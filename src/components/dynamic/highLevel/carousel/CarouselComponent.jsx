import { useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";
import { useIndexContext } from "../../helpers/useIndexContext";
// Component Imports
import ButtonComponent from "../../lowLevel/button/ButtonComponent";
import ElementComponent from "../../lowLevel/element/ElementComponent";
import ImageComponent from "../../lowLevel/image/ImageComponent";
import ComponentRenderer from "../../ComponentRenderer";

const CarouselComponent = ({
  backgrounds = [],
  carouselChildren = [],
  backgroundSettings = {},
  childrenSettings = {},
  arrows = [],
  style,
  contextId,
  syncSlides = false, // New prop for slide synchronization
}) => {
  const {
    backgroundContextId = syncSlides
      ? contextId
      : contextId?.backgroundContextId,
    displayBackground = true,
    autoAdvanceBackground = true,
    backgroundInterval = 10000,
    backgroundTransition = "fade",
    backgroundScrollDirection = "left",
  } = backgroundSettings;

  const {
    childrenContextId = syncSlides ? contextId : contextId?.childrenContextId,
    displayChildren = true,
    autoAdvanceChildren = true,
    childrenInterval = 10000,
    childrenTransition = "fade",
    childrenScrollDirection = "left",
  } = childrenSettings;

  const { index: backgroundIndex, setIndex: setBackgroundIndex } =
    useIndexContext(backgroundContextId);
  const { index: childIndex, setIndex: setChildIndex } =
    useIndexContext(childrenContextId);

  const totalBackgrounds = backgrounds.length;
  const totalChildren = carouselChildren.length;

  // Handlers for manual navigation, now correctly updating the index
  const prevBackground = useCallback(() => {
    const newIndex =
      backgroundIndex === 0 ? totalBackgrounds - 1 : backgroundIndex - 1;
    setBackgroundIndex(newIndex);
  }, [backgroundIndex, totalBackgrounds, setBackgroundIndex]);

  const nextBackground = useCallback(() => {
    const newIndex = (backgroundIndex + 1) % totalBackgrounds;
    setBackgroundIndex(newIndex);
  }, [backgroundIndex, totalBackgrounds, setBackgroundIndex]);

  const prevChild = useCallback(() => {
    const newIndex = childIndex === 0 ? totalChildren - 1 : childIndex - 1;
    setChildIndex(newIndex);
  }, [childIndex, totalChildren, setChildIndex]);

  const nextChild = useCallback(() => {
    const newIndex = (childIndex + 1) % totalChildren;
    setChildIndex(newIndex);
  }, [childIndex, totalChildren, setChildIndex]);

  useEffect(() => {
    if (!autoAdvanceBackground || totalBackgrounds <= 1) return;
    const timer = setInterval(nextBackground, backgroundInterval);
    return () => clearInterval(timer);
  }, [
    backgroundInterval,
    autoAdvanceBackground,
    totalBackgrounds,
    nextBackground,
  ]);

  useEffect(() => {
    if (!autoAdvanceChildren || totalChildren <= 1) return;
    const timer = setInterval(nextChild, childrenInterval);
    return () => clearInterval(timer);
  }, [childrenInterval, autoAdvanceChildren, totalChildren, nextChild]);

  const handleArrowClick = (arrowFunction) => {
    switch (arrowFunction) {
      case "prevChild":
        prevChild();
        break;
      case "nextChild":
        nextChild();
        break;
      case "prevBackground":
        prevBackground();
        break;
      case "nextBackground":
        nextBackground();
        break;
      case "prev":
        prevChild();
        prevBackground();
        break;
      case "next":
        nextChild();
        nextBackground();
        break;
      default:
        break;
    }
  };

  const defaultCarouselStyle = "relative flex w-full h-full overflow-hidden ";
  const carouselStyle = style ? Object.values(style).join(" ") : "";

  const defaultBackgroundStyle =
    "absolute inset-0 w-full h-full object-cover transform transition-all duration-1000 ";
  const defaultChildStyle =
    "absolute inset-0 flex flex-col justify-center items-center space-y-4 text-center transform transition-all duration-1000 ";
  const defaultArrowStyle =
    "absolute z-20 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full ";

  const getSlideTransition = (isVisible, transitionType, direction) => {
    if (transitionType === "fade") {
      return isVisible ? "opacity-100" : "opacity-0";
    } else if (transitionType === "scroll") {
      switch (direction) {
        case "left":
          return isVisible
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0";
        case "right":
          return isVisible
            ? "translate-x-0 opacity-100"
            : "-translate-x-full opacity-0";
        case "up":
          return isVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-full opacity-0";
        case "down":
          return isVisible
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0";
        default:
          return "opacity-0";
      }
    }
    return "opacity-0";
  };

  return (
    <ElementComponent className={twMerge(defaultCarouselStyle + carouselStyle)}>
      {/* Render Backgrounds */}
      {displayBackground &&
        backgrounds.map((bg, index) => {
          const isVisible = index === backgroundIndex;
          const backgroundStyle = bg.customStyle
            ? Object.values(bg.customStyle).join(" ")
            : "";
          return (
            <ImageComponent
              key={`bg-${index}`}
              src={bg.src}
              bucketId={bg.bucketId}
              supabaseId={bg.supabaseId}
              alt={`Background ${index + 1}`}
              style={{
                className: twMerge(
                  defaultBackgroundStyle +
                    backgroundStyle +
                    " " +
                    getSlideTransition(
                      isVisible,
                      backgroundTransition,
                      backgroundScrollDirection
                    )
                ),
              }}
            />
          );
        })}

      {/* Render Carousel Children */}
      {displayChildren &&
        carouselChildren.map((slide, slideIndex) => {
          const isVisible = slideIndex === childIndex;
          const childStyle = slide.style
            ? Object.values(slide.style).join(" ").concat(" ")
            : "";
          return (
            <ElementComponent
              key={`child-${slideIndex}`}
              style={{
                className: twMerge(
                  defaultChildStyle +
                    childStyle +
                    getSlideTransition(
                      isVisible,
                      childrenTransition,
                      childrenScrollDirection
                    )
                ),
              }}
            >
              {isVisible && <ComponentRenderer config={slide} />}
            </ElementComponent>
          );
        })}

      {/* Navigation Arrows */}
      {arrows.map((arrow, index) => {
        const arrowStyle = arrow.style
          ? Object.values(arrow.style).join(" ").concat(" ")
          : "";
        const defaultArrowSymbol =
          arrow.type === "left"
            ? "←"
            : arrow.type === "right"
            ? "→"
            : arrow.type === "top"
            ? "↑"
            : arrow.type === "bottom"
            ? "↓"
            : "";
        return (
          <ButtonComponent
            key={`arrow-${index}`}
            className={
              defaultArrowStyle +
              arrowStyle +
              `${
                arrow.type === "left"
                  ? "left-2"
                  : arrow.type === "right"
                  ? "right-2"
                  : arrow.type === "top"
                  ? "top-2"
                  : arrow.type === "bottom"
                  ? "bottom-2"
                  : ""
              }`
            }
            onClick={() => handleArrowClick(arrow.function)}
            buttonChildren={arrow.arrowChildren}
          >
            {arrow.arrowChildren ? null : defaultArrowSymbol}
          </ButtonComponent>
        );
      })}
    </ElementComponent>
  );
};

CarouselComponent.propTypes = {
  // Array of background images to display in the carousel and the background settings
  backgrounds: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      bucketId: PropTypes.string,
      supabseId: PropTypes.string,
      customStyle: PropTypes.shape({
        className: PropTypes.string,
      }),
    })
  ),
  backgroundSettings: PropTypes.shape({
    displayBackground: PropTypes.bool,
    autoAdvanceBackground: PropTypes.bool,
    backgroundInterval: PropTypes.number,
    backgroundTransition: PropTypes.oneOf(["fade", "scroll"]),
    backgroundScrollDirection: PropTypes.oneOf(["left", "right", "up", "down"]),
  }),
  // Array of child components to display in the carousel and the children settings
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
      style: PropTypes.shape({
        className: PropTypes.string,
      }),
    })
  ),
  childrenSettings: PropTypes.shape({
    displayChildren: PropTypes.bool,
    autoAdvanceChildren: PropTypes.bool,
    childrenInterval: PropTypes.number,
    childrenTransition: PropTypes.oneOf(["fade", "scroll"]),
    childrenScrollDirection: PropTypes.oneOf(["left", "right", "up", "down"]),
  }),
  // Array of arrow components to display in the carousel and the arrow settings
  arrows: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.oneOf(["left", "right", "top", "bottom"]).isRequired,
      function: PropTypes.oneOf([
        "prevChild",
        "nextChild",
        "prevBackground",
        "nextBackground",
        "prev",
        "next",
      ]).isRequired,
      props: PropTypes.object,
      arrowChildren: PropTypes.arrayOf(
        PropTypes.shape({
          type: PropTypes.string.isRequired,
          props: PropTypes.object,
          children: PropTypes.array,
        })
      ),
      style: PropTypes.shape({
        className: PropTypes.string,
      }),
    })
  ),
  syncSlides: PropTypes.bool,
  contextId: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.objectOf(PropTypes.string),
  ]),
  style: PropTypes.shape({
    className: PropTypes.string,
  }),
};

export default CarouselComponent;
