import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";
import ImageComponent from "../../baseComponents/image/ImageComponent";

const GalleryComponent = ({ images, columns = 3, gap = 4, style }) => {
  const defaultGalleryStyle = `grid gap-${gap} grid-cols-${columns} `; // Default style for the gallery container
  const galleryStyle = style ? Object.values(style).join(" ") : "";

  const defaultContainerStyle = "relative aspect-square "; // default style for the image container

  return (
    <div className={twMerge(defaultGalleryStyle, galleryStyle)}>
      {images.map(({ containerStyle, ...image }, index) => {
        const customContainerStyle = containerStyle
          ? Object.values(containerStyle).join(" ")
          : "";

        return (
          <div
            key={index}
            className={twMerge(defaultContainerStyle, customContainerStyle)}
          >
            <ImageComponent {...image} />
          </div>
        );
      })}
    </div>
  );
};

GalleryComponent.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string,
      alt: PropTypes.string,
      style: PropTypes.shape({
        className: PropTypes.string,
      }),
      containerStyle: PropTypes.shape({
        className: PropTypes.string,
      }),
    })
  ).isRequired, // Array of image configurations for ImageComponent
  columns: PropTypes.number, // Number of columns in the gallery grid
  gap: PropTypes.number, // Gap between images
  style: PropTypes.shape({
    className: PropTypes.string,
  }), // Custom styles for the gallery container
};

export default GalleryComponent;
