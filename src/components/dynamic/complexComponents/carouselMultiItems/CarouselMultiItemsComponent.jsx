import { useState } from "react";
import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";
import ComponentRenderer from "../../ComponentRenderer";
import ButtonComponent from "../../baseComponents/button/ButtonComponent";
import ElementComponent from "../../baseComponents/element/ElementComponent";

const CarouselMultiItemsComponent = ({
  carouselChildren = [],
  displayCount = 1,
  style,
  arrows = [],
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = carouselChildren.length;

  // Calculate visible items based on currentIndex and displayCount
  const visibleItems = [];
  for (let i = 0; i < displayCount; i++) {
    visibleItems.push(carouselChildren[(currentIndex + i) % totalItems]);
  }

  // Handler for scrolling actions
  const handleArrowClick = (arrowFunction) => {
    switch (arrowFunction) {
      case "prev":
        setCurrentIndex((prevIndex) =>
          prevIndex - 1 < 0 ? totalItems - 1 : prevIndex - 1
        );
        break;
      case "next":
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
        break;
      default:
        break;
    }
  };

  const defaultContainerStyle =
    "relative overflow-hidden flex transform transition-all duration-1000 ";
  const containerStyle = style ? Object.values(style).join(" ") : "";

  const defaultArrowStyle =
    "absolute z-20 transform transition-all -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full ";

  return (
    <ElementComponent
      className={twMerge(defaultContainerStyle, containerStyle)}
    >
      {/* Carousel Items */}
      {visibleItems.map((itemConfig, index) => {
        return itemConfig ? (
          <ComponentRenderer key={index} config={itemConfig} />
        ) : null;
      })}

      {/* Navigation Arrows */}
      {totalItems > 1 &&
        arrows.map((arrow, index) => {
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
          const defaultArrowPosition =
            arrow.type === "left"
              ? "left-2 "
              : arrow.type === "right"
              ? "right-2 "
              : arrow.type === "top"
              ? "top-2 "
              : arrow.type === "bottom"
              ? "bottom-2 "
              : "";

          return (
            <ButtonComponent
              key={`arrow-${index}`}
              className={twMerge(
                defaultArrowPosition,
                defaultArrowStyle,
                arrowStyle
              )}
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

CarouselMultiItemsComponent.propTypes = {
  displayCount: PropTypes.number,
  carouselChildren: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      props: PropTypes.object,
      children: PropTypes.array,
      style: PropTypes.shape({
        className: PropTypes.string,
      }),
    })
  ).isRequired,
  style: PropTypes.shape({
    className: PropTypes.string,
  }),
  // Array of arrow components to display in the carousel and the arrow settings
  arrows: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.oneOf(["left", "right", "top", "bottom"]).isRequired,
      function: PropTypes.oneOf(["prev", "next"]).isRequired,
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
};

export default CarouselMultiItemsComponent;
