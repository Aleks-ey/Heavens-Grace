// import { useState, useEffect } from "react";
// import PropTypes from "prop-types";
// import ContainerComponent from "../../lowLevel/container/ContainerComponent";
// import ImageComponent from "../../lowLevel/image/ImageComponent";
// import ComponentRenderer from "../../ComponentRenderer"; // Import PageRenderer

// const CarouselComponent = ({
//   backgrounds,
//   children,
//   interval = 10000,
//   style,
//   leftArrow = { showLeftArrow: true },
//   rightArrow = { showRightArrow: true },
// }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const totalSlides = Math.max(backgrounds.length, children.length);

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
//     );
//   };

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
//     );
//   };

//   // Auto-advance the carousel and reset the timer when the index changes
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
//     }, interval);

//     return () => clearInterval(timer);
//   }, [totalSlides, interval, currentIndex]);

//   // Default style for carousel container
//   const defaultCarouselStyle = "relative flex w-full h-full overflow-hidden ";
//   // Custom style for carousel container
//   const carouselStyle = style ? Object.values(style).join(" ") : "";
//   // default background style for background images
//   const defaultBackgroundStyle =
//     "absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ";
//   // default container style for individual child containers
//   const defaultContainerStyle =
//     "absolute inset-0 flex flex-col justify-center items-center space-y-4 text-center ";
//   // Default style for both arrows
//   const defaultArrowStyle =
//     "absolute z-20 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full ";

//   return (
//     <ContainerComponent
//       style={{ className: defaultCarouselStyle + carouselStyle }}
//     >
//       {backgrounds.map((bg, index) => {
//         const backgroundStyle = bg.customStyle
//           ? Object.values(bg.customStyle).join(" ").concat(" ")
//           : "";
//         return (
//           <ImageComponent
//             key={index}
//             src={bg.src}
//             alt={`Background ${index + 1}`}
//             style={{
//               className:
//                 defaultBackgroundStyle +
//                 backgroundStyle +
//                 (index === currentIndex ? "opacity-100" : "opacity-0"),
//             }}
//           />
//         );
//       })}
//       {children.map((slide, slideIndex) => {
//         const slideVisible = slideIndex === currentIndex % children.length;
//         const containerStyle = slide.containerStyle
//           ? Object.values(slide.containerStyle).join(" ")
//           : "";
//         return (
//           slideVisible && (
//             <ContainerComponent
//               key={slideIndex}
//               style={{
//                 className: defaultContainerStyle + containerStyle,
//               }}
//             >
//               <ComponentRenderer config={slide} />{" "}
//               {/* Render slide using PageRenderer */}
//             </ContainerComponent>
//           )
//         );
//       })}
//       {leftArrow.showLeftArrow && (
//         <button
//           onClick={prevSlide}
//           className={`${defaultArrowStyle} left-2 ${
//             leftArrow.leftArrowStyle?.className || ""
//           }`}
//         >
//           {leftArrow.leftArrowContent ? leftArrow.leftArrowContent : "←"}
//         </button>
//       )}
//       {rightArrow.showRightArrow && (
//         <button
//           onClick={nextSlide}
//           className={`${defaultArrowStyle} right-2 ${
//             rightArrow.rightArrowStyle?.className || ""
//           }`}
//         >
//           {rightArrow.rightArrowContent ? rightArrow.rightArrowContent : "→"}
//         </button>
//       )}
//     </ContainerComponent>
//   );
// };

// CarouselComponent.propTypes = {
//   backgrounds: PropTypes.arrayOf(
//     PropTypes.shape({
//       src: PropTypes.string.isRequired,
//       customStyle: PropTypes.shape({
//         className: PropTypes.string,
//       }),
//     })
//   ),
//   children: PropTypes.arrayOf(
//     PropTypes.shape({
//       type: PropTypes.string.isRequired,
//       props: PropTypes.object,
//       children: PropTypes.arrayOf(
//         PropTypes.shape({
//           type: PropTypes.string.isRequired,
//           props: PropTypes.object,
//           children: PropTypes.array,
//         })
//       ),
//       containerStyle: PropTypes.shape({
//         className: PropTypes.string,
//       }),
//     })
//   ),
//   interval: PropTypes.number,
//   style: PropTypes.shape({
//     className: PropTypes.string,
//   }),
//   leftArrow: PropTypes.shape({
//     showLeftArrow: PropTypes.bool,
//     leftArrowContent: PropTypes.node,
//     leftArrowStyle: PropTypes.shape({
//       className: PropTypes.string,
//     }),
//   }),
//   rightArrow: PropTypes.shape({
//     showRightArrow: PropTypes.bool,
//     rightArrowContent: PropTypes.node,
//     rightArrowStyle: PropTypes.shape({
//       className: PropTypes.string,
//     }),
//   }),
// };

// export default CarouselComponent;

import { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import ContainerComponent from "../../lowLevel/container/ContainerComponent";
import ImageComponent from "../../lowLevel/image/ImageComponent";
import ComponentRenderer from "../../ComponentRenderer";

const CarouselComponent = ({
  backgrounds = [],
  carouselChildren = [],
  interval = 10000,
  autoAdvance = true,
  autoAdvanceBackground = true,
  autoAdvanceChildren = true,
  displayBackground = true,
  displayChildren = true,
  style,
  leftArrow = { showLeftArrow: true },
  rightArrow = { showRightArrow: true },
}) => {
  const [backgroundIndex, setBackgroundIndex] = useState(0);
  const [childIndex, setChildIndex] = useState(0);

  const totalBackgrounds = backgrounds.length;
  const totalChildren = carouselChildren.length;

  // Handlers for manual navigation
  const prevBackground = useCallback(() => {
    setBackgroundIndex((prevIndex) =>
      prevIndex === 0 ? totalBackgrounds - 1 : prevIndex - 1
    );
  }, [totalBackgrounds]);

  const nextBackground = useCallback(() => {
    setBackgroundIndex((prevIndex) => (prevIndex + 1) % totalBackgrounds);
  }, [totalBackgrounds]);

  const prevChild = useCallback(() => {
    setChildIndex((prevIndex) =>
      prevIndex === 0 ? totalChildren - 1 : prevIndex - 1
    );
  }, [totalChildren]);

  const nextChild = useCallback(() => {
    setChildIndex((prevIndex) => (prevIndex + 1) % totalChildren);
  }, [totalChildren]);

  // Auto-advance for backgrounds
  useEffect(() => {
    if (!autoAdvance || !autoAdvanceBackground || totalBackgrounds <= 1) return;
    const timer = setInterval(nextBackground, interval);
    return () => clearInterval(timer);
  }, [
    interval,
    autoAdvance,
    autoAdvanceBackground,
    totalBackgrounds,
    nextBackground,
  ]);

  // Auto-advance for children
  useEffect(() => {
    if (!autoAdvance || !autoAdvanceChildren || totalChildren <= 1) return;
    const timer = setInterval(nextChild, interval);
    return () => clearInterval(timer);
  }, [interval, autoAdvance, autoAdvanceChildren, totalChildren, nextChild]);

  const defaultCarouselStyle = "relative flex w-full h-full overflow-hidden ";
  const carouselStyle = style ? Object.values(style).join(" ") : "";

  const defaultBackgroundStyle =
    "absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ";
  const defaultContainerStyle =
    "absolute inset-0 flex flex-col justify-center items-center space-y-4 text-center ";
  const defaultArrowStyle =
    "absolute z-20 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full ";

  return (
    <ContainerComponent
      style={{ className: defaultCarouselStyle + carouselStyle }}
    >
      {/* Render Backgrounds */}
      {displayBackground &&
        backgrounds.map((bg, index) => {
          const backgroundStyle = bg.customStyle
            ? Object.values(bg.customStyle).join(" ").concat(" ")
            : "";
          return (
            <ImageComponent
              key={`bg-${index}`}
              src={bg.src}
              alt={`Background ${index + 1}`}
              style={{
                className:
                  defaultBackgroundStyle +
                  backgroundStyle +
                  (index === backgroundIndex ? "opacity-100" : "opacity-0"),
              }}
            />
          );
        })}

      {/* Render Carousel Children */}
      {displayChildren &&
        carouselChildren.map((slide, slideIndex) => {
          const slideVisible = slideIndex === childIndex;
          const containerStyle = slide.containerStyle
            ? Object.values(slide.containerStyle).join(" ")
            : "";
          return (
            <ContainerComponent
              key={`child-${slideIndex}`}
              style={{
                className:
                  defaultContainerStyle +
                  containerStyle +
                  (slideVisible ? " opacity-100" : " opacity-0"),
              }}
            >
              {slideVisible && <ComponentRenderer config={slide} />}
            </ContainerComponent>
          );
        })}

      {/* Navigation Arrows */}
      {leftArrow.showLeftArrow && (
        <button
          onClick={() => {
            prevBackground();
            prevChild();
          }}
          className={`${defaultArrowStyle} left-2 ${
            leftArrow.leftArrowStyle?.className || ""
          }`}
        >
          {leftArrow.leftArrowContent || "←"}
        </button>
      )}
      {rightArrow.showRightArrow && (
        <button
          onClick={() => {
            nextBackground();
            nextChild();
          }}
          className={`${defaultArrowStyle} right-2 ${
            rightArrow.rightArrowStyle?.className || ""
          }`}
        >
          {rightArrow.rightArrowContent || "→"}
        </button>
      )}
    </ContainerComponent>
  );
};

CarouselComponent.propTypes = {
  backgrounds: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      customStyle: PropTypes.shape({
        className: PropTypes.string,
      }),
    })
  ),
  carouselChildren: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      props: PropTypes.object,
      children: PropTypes.arrayOf(
        PropTypes.shape({
          type: PropTypes.string.isRequired,
          props: PropTypes.object,
          children: PropTypes.array,
        })
      ),
      containerStyle: PropTypes.shape({
        className: PropTypes.string,
      }),
    })
  ),
  interval: PropTypes.number,
  autoAdvance: PropTypes.bool,
  autoAdvanceBackground: PropTypes.bool,
  autoAdvanceChildren: PropTypes.bool,
  displayBackground: PropTypes.bool,
  displayChildren: PropTypes.bool,
  style: PropTypes.shape({
    className: PropTypes.string,
  }),
  leftArrow: PropTypes.shape({
    showLeftArrow: PropTypes.bool,
    leftArrowContent: PropTypes.node,
    leftArrowStyle: PropTypes.shape({
      className: PropTypes.string,
    }),
  }),
  rightArrow: PropTypes.shape({
    showRightArrow: PropTypes.bool,
    rightArrowContent: PropTypes.node,
    rightArrowStyle: PropTypes.shape({
      className: PropTypes.string,
    }),
  }),
};

export default CarouselComponent;
