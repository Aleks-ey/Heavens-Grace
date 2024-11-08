import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";

const ImageComponent = ({ src, alt, style, ...restProps }) => {
  // Destructure and omit non-HTML-standard props
  const { contextId, ...filteredProps } = restProps;
  if (contextId) {
    filteredProps["data-context-id"] = contextId;
  }

  const defaultImageStyle = "object-cover w-full h-full ";
  const imageStyle = style ? Object.values(style).join(" ") : "";

  return (
    <img
      src={src}
      alt={alt}
      className={twMerge(defaultImageStyle + imageStyle)}
      {...filteredProps}
    />
  );
};

ImageComponent.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  style: PropTypes.shape({
    className: PropTypes.string,
  }),
};

export default ImageComponent;
