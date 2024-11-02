import { useState, Children, cloneElement } from "react";
import PropTypes from "prop-types";

const CarouselChildren = ({ carousel, children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Default styles for arrows and carousel container
  const defaultCarouselStyle =
    "flex w-full h-full justify-center items-center ";
  const carouselStyle = carousel.style
    ? Object.values(carousel.style)?.join(" ")
    : "";

  const defaultLeftArrowStyle =
    "absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full ";
  const leftArrowStyle = carousel.leftArrowStyle
    ? Object.values(carousel.leftArrowStyle)?.join(" ")
    : "";

  const defaultRightArrowStyle =
    "absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full ";
  const rightArrowStyle = carousel.rightArrowStyle
    ? Object.values(carousel.rightArrowStyle)?.join(" ")
    : "";

  // Navigate to the previous slide
  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + Children.count(children)) % Children.count(children)
    );
  };

  // Navigate to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Children.count(children));
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
          {Children.map(children, (child, index) =>
            cloneElement(child, {
              style: {
                display: index === currentIndex ? "block" : "none",
                width: "100%",
                transition: "opacity 0.5s ease",
              },
            })
          )}
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

CarouselChildren.propTypes = {
  carousel: PropTypes.shape({
    leftArrow: PropTypes.bool,
    leftArrowStyle: PropTypes.shape({
      className: PropTypes.string,
    }),
    rightArrow: PropTypes.bool,
    rightArrowStyle: PropTypes.shape({
      className: PropTypes.string,
    }),
    style: PropTypes.shape({
      className: PropTypes.string,
    }),
  }),
  children: PropTypes.node.isRequired,
};

export default CarouselChildren;
