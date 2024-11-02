import { useState } from "react";
import PropTypes from "prop-types";

const OldCarousel = ({ items, fullArt }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Navigate to the previous item
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  // Navigate to the next item
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Determine keys available in each object to adapt rendering
  const currentItem = items[currentIndex];
  const keys = Object.keys(currentItem);

  //   change padding and other classes based on fullArt prop
  const paddingFullArt = fullArt ? "p-0" : "p-4";
  const textContentFullArt = fullArt
    ? "absolute right-0 top-0 w-3/4 h-full px-14 opacity-100 bg-gradient-to-r from-transparent to-white to-40% from-0%"
    : "";

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className={
          "flex justify-center items-center w-full bg-gray-100 " +
          paddingFullArt
        }
      >
        {/* Previous Slide Button */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-base-dark bg-opacity-50 text-white px-3 py-2 rounded-full border-main hover:bg-main"
        >
          &#8592;
        </button>

        <div className="flex flex-col md:flex-row items-center w-full bg-white overflow-hidden">
          {/* Image */}
          {keys.includes("imageUrl") && (
            <img
              src={currentItem.imageUrl}
              alt={`${currentItem.name}'s image`}
              className="h-[50vh] object-cover"
            />
          )}
          {/* Text Content */}
          <div className={"p-6 text-right text-black " + textContentFullArt}>
            {keys.includes("name") && (
              <h2 className="text-2xl font-semibold mb-2">
                {currentItem.name}
              </h2>
            )}
            {keys.includes("position") && (
              <p className="mb-4">{currentItem.position}</p>
            )}
            {keys.includes("age") && (
              <p className="mb-2">Age: {currentItem.age}</p>
            )}
            {keys.includes("location") && (
              <p className="mb-2">{currentItem.location}</p>
            )}
            {keys.includes("description") && (
              <p className="">{currentItem.description}</p>
            )}
            {keys.includes("story") && <p className="">{currentItem.story}</p>}
          </div>
        </div>

        {/* Next Slide Button */}
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-base-dark bg-opacity-50 text-white px-3 py-2 rounded-full border-main hover:bg-main"
        >
          &#8594;
        </button>
      </div>
    </div>
  );
};

OldCarousel.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      imageUrl: PropTypes.string,
      name: PropTypes.string,
      position: PropTypes.string,
      age: PropTypes.string,
      location: PropTypes.string,
      description: PropTypes.string,
      story: PropTypes.string,
    })
  ).isRequired,
  fullArt: PropTypes.bool,
};

export default OldCarousel;
