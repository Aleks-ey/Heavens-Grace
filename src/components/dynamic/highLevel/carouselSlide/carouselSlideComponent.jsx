// import PropTypes from "prop-types";
// import ContainerComponent from "../../lowLevel/container/ContainerComponent";
// import ComponentRenderer from "../../ComponentRenderer";
// import useDynamicIndex from "../../helpers/useDynamicIndex";
// import { useState } from "react";

// const CarouselSlideComponent = ({
//   items,
//   initialIndex = 0,
//   contextId, // Optional prop for connecting to DynamicIndexContext
//   direction = "horizontal",
//   showButtons = true,
//   style,
//   buttonStyle,
//   contentStyle,
// }) => {
//   const context = useDynamicIndex(contextId);
//   const [localActiveIndex, setLocalActiveIndex] = useState(initialIndex);

//   // Use context state if available; otherwise, use local state
//   const activeIndex = context ? context.activeIndex : localActiveIndex;
//   const setActiveIndex = context ? context.setActiveIndex : setLocalActiveIndex;

//   const isHorizontal = direction === "horizontal";
//   const transform = isHorizontal
//     ? `translateX(-${activeIndex * 100}%)`
//     : `translateY(-${activeIndex * 100}%)`;

//   const defaultCarouselStyle = "relative w-full h-full overflow-hidden";
//   const defaultButtonStyle =
//     "absolute z-10 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full";
//   const defaultContentStyle = "flex w-full transition-transform duration-500";

//   const carouselCombinedStyle = style
//     ? `${defaultCarouselStyle} ${Object.values(style).join(" ")}`
//     : defaultCarouselStyle;

//   const buttonCombinedStyle = buttonStyle
//     ? `${defaultButtonStyle} ${Object.values(buttonStyle).join(" ")}`
//     : defaultButtonStyle;

//   const contentCombinedStyle = contentStyle
//     ? `${defaultContentStyle} ${Object.values(contentStyle).join(" ")}`
//     : defaultContentStyle;

//   const handlePrevSlide = () => {
//     setActiveIndex((prevIndex) =>
//       prevIndex === 0 ? items.length - 1 : prevIndex - 1
//     );
//   };

//   const handleNextSlide = () => {
//     console.log(activeIndex);
//     setActiveIndex((prevIndex) =>
//       prevIndex === items.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   return (
//     <ContainerComponent style={{ className: carouselCombinedStyle }}>
//       <ContainerComponent
//         style={{
//           className: contentCombinedStyle,
//           style: { transform },
//         }}
//       >
//         {items.map((itemConfig, index) => (
//           <ComponentRenderer key={index} config={itemConfig} />
//         ))}
//       </ContainerComponent>

//       {showButtons && (
//         <>
//           <button
//             onClick={handlePrevSlide}
//             className={`${buttonCombinedStyle} left-2`}
//           >
//             {"←"}
//           </button>
//           <button
//             onClick={handleNextSlide}
//             className={`${buttonCombinedStyle} right-2`}
//           >
//             {"→"}
//           </button>
//         </>
//       )}
//     </ContainerComponent>
//   );
// };

// CarouselSlideComponent.propTypes = {
//   items: PropTypes.arrayOf(
//     PropTypes.shape({
//       type: PropTypes.string.isRequired,
//       props: PropTypes.object,
//       children: PropTypes.array,
//     })
//   ).isRequired,
//   initialIndex: PropTypes.number,
//   contextId: PropTypes.string, // New prop to connect to a specific DynamicIndexContext
//   direction: PropTypes.oneOf(["horizontal", "vertical"]),
//   showButtons: PropTypes.bool,
//   style: PropTypes.shape({
//     className: PropTypes.string,
//   }),
//   buttonStyle: PropTypes.shape({
//     className: PropTypes.string,
//   }),
//   contentStyle: PropTypes.shape({
//     className: PropTypes.string,
//   }),
// };

// export default CarouselSlideComponent;
