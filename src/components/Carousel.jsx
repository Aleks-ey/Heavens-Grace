import { useState, Children, cloneElement } from "react";
import PropTypes from "prop-types";

const Carousel = ({
  carousel = { leftArrow: true, rightArrow: true, sameArrowStyles: true },
  items,
  itemStyle,
  hasChildren = false,
  children,
}) => {
  // *** ALL DEFAULT STYLES NEED A SPACE AT THE END TO JOIN TOGETHER CORRECTLY WITH CUSTOM STYLES ***
  //   default tailwind style for carousel container
  const defaultCarouselStyle =
    "flex w-full h-full justify-center items-center ";
  // check for custom style for carousel container
  const carouselStyle = carousel.style
    ? Object.values(carousel.style)?.join(" ")
    : null;

  // default tailwind style for leftArrow
  const defaultLeftArrowStyle =
    "absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full ";
  // check for custom style for leftArrow
  const leftArrowStyle = carousel.leftArrowStyle
    ? Object.values(carousel.leftArrowStyle)?.join(" ")
    : null;

  // default tailwind style for rightArow
  const defaultRightArrowStyle =
    "absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full ";
  // check for custom style for rightArrow
  const rightArrowStyle = carousel.rightArrowStyle
    ? Object.values(carousel.rightArrowStyle)?.join(" ")
    : null;

  const [currentIndex, setCurrentIndex] = useState(0);

  // Get the total number of slides (children components)
  //   const totalSlides = Children.count(children);

  // Navigate to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  // Navigate to the next slide
  const nextSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div className={defaultCarouselStyle + carouselStyle}>
        {carousel.leftArrow && (
          <button
            onClick={prevSlide}
            className={defaultLeftArrowStyle + leftArrowStyle}
          >
            &#8592;
          </button>
        )}
        <div className="w-full flex justify-center items-center">
          {hasChildren
            ? // If hasChildren is true, render the passed children
              Children.map(children, (child, index) =>
                cloneElement(child, {
                  style: {
                    display: index === currentIndex ? "block" : "none",
                    width: "100%",
                    transition: "opacity 0.5s ease",
                  },
                })
              )
            : // If hasChildren is false, render items array
              items?.map((item, index) => (
                <div
                  key={index}
                  style={{
                    display: index === currentIndex ? "block" : "none",
                    width: "100%",
                    transition: "opacity 0.5s ease",
                  }}
                  className={`p-4 ${itemStyle?.className || ""} ${
                    item.customStyle?.className || ""
                  }`}
                >
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      alt={item.name || "Carousel Item"}
                      className="w-full h-64 object-cover mb-4"
                    />
                  )}
                  {item.name && (
                    <h2 className="text-xl font-semibold">{item.name}</h2>
                  )}
                  {item.location && (
                    <p className="text-gray-600 mb-2">{item.location}</p>
                  )}
                  {item.description && (
                    <p className="text-gray-700 mb-4">{item.description}</p>
                  )}
                  {item.story && <p className="text-gray-700">{item.story}</p>}
                </div>
              ))}
        </div>
        {carousel.rightArrow && (
          <button
            onClick={nextSlide}
            className={defaultRightArrowStyle + rightArrowStyle}
          >
            &#8594;
          </button>
        )}
      </div>
    </div>
  );
};
Carousel.propTypes = {
  carousel: PropTypes.shape({
    leftArrow: PropTypes.bool,
    leftArrowStyle: PropTypes.shape({
      className: PropTypes.string,
    }),
    rightArrow: PropTypes.bool,
    rightArrowStyle: PropTypes.shape({
      className: PropTypes.string,
    }),
    sameArrowStyles: PropTypes.bool,
    style: PropTypes.shape({
      className: PropTypes.string,
    }),
  }),
  items: PropTypes.arrayOf(
    PropTypes.shape({
      imageUrl: PropTypes.string,
      name: PropTypes.string,
      position: PropTypes.string,
      age: PropTypes.string,
      location: PropTypes.string,
      description: PropTypes.string,
      story: PropTypes.string,
      customStyle: PropTypes.shape({
        // custom style or individual items. Will overide itemStyle
        className: PropTypes.string,
      }),
    })
  ),
  itemStyle: PropTypes.shape({
    // styling that will apply to all items
    className: PropTypes.string,
  }),
  hasChildren: PropTypes.bool, // "false" will use the items array, "true" will use child components
  children: PropTypes.node, // go inside the Carousel component
};

export default Carousel;
