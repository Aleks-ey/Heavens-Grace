import { useState } from "react";
import PropTypes from "prop-types";

const CarouselItems = ({ carousel, items, itemStyle }) => {
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

  // default general style for items
  const defaultItemsStyle = "";
  // Check for general style for items
  const itemsStyle = itemStyle
    ? Object.values(itemStyle)?.join(" ").concat(" ")
    : null;
  // check for custom style for items
  const customItemsStyle = items.customStyle
    ? Object.values(items.customStyle)?.join(" ")
    : null;

  // Navigate to the previous slide
  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
  };

  // Navigate to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
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
        <div className="relative w-full flex justify-center items-center">
          {items?.map((item, index) => (
            <div
              key={index}
              style={{
                display: index === currentIndex ? "block" : "none",
                width: "100%",
                transition: "opacity 0.5s ease",
              }}
              className={defaultItemsStyle + itemsStyle + customItemsStyle}
            >
              {item.imageUrl && (
                <img
                  src={item.imageUrl}
                  alt={item.name || "Carousel Item"}
                  className="w-full h-full object-cover"
                />
              )}
              <div className="absolute top-1/3 text-white">
                {item.title && (
                  <h2 className="text-xl font-semibold">{item.title}</h2>
                )}
                {item.description && <p className="mb-4">{item.description}</p>}
                {item.button && (
                  <button className="bg-main text-white px-4 py-2 rounded-lg">
                    {item.button}
                  </button>
                )}
              </div>
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

CarouselItems.propTypes = {
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
  items: PropTypes.arrayOf(
    PropTypes.shape({
      imageUrl: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
      story: PropTypes.string,
      customStyle: PropTypes.shape({
        className: PropTypes.string,
      }),
    })
  ).isRequired,
  itemStyle: PropTypes.shape({
    className: PropTypes.string,
  }),
};

export default CarouselItems;
