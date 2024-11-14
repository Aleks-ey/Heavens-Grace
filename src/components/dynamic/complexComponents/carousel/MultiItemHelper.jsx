import React, { useState } from "react";
import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";

const MultiItemHelper = ({ children, displayCount, className }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = React.Children.count(children);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? totalItems - 1 : prevIndex - 1
    );
  };

  // Determine the items to display based on `currentIndex` and `displayCount`
  const visibleItems = [];
  for (let i = 0; i < displayCount; i++) {
    visibleItems.push(children[(currentIndex + i) % totalItems]);
  }

  return (
    <div
      className={twMerge(
        "relative overflow-hidden transform transition-all duration-500 ease-in-out",
        className
      )}
    >
      <div className="flex transform transition-all duration-500 ease-in-out pr-4 justify-between h-full items-center">
        {visibleItems.map((child, index) => (
          <div
            key={index}
            className="flex-shrink-0 transform transition-all duration-500 ease-in-out px-4"
            style={{ flexBasis: `${100 / displayCount}%` }}
          >
            {child}
          </div>
        ))}
      </div>

      {/* Arrows */}
      <button
        className="absolute left-0 top-1/2 transform transition-all ease-in-out -translate-y-1/2 bg-black text-white p-2"
        onClick={handlePrev}
      >
        ←
      </button>
      <button
        className="absolute right-0 top-1/2 transform transition-all ease-in-out -translate-y-1/2 bg-black text-white p-2"
        onClick={handleNext}
      >
        →
      </button>
    </div>
  );
};

MultiItemHelper.propTypes = {
  children: PropTypes.node.isRequired,
  displayCount: PropTypes.number.isRequired,
  className: PropTypes.string,
};

export default MultiItemHelper;
