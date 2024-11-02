import Element from "../element/ElementComponent";
import PropTypes from "prop-types";

const ImageComponent = ({ src, alt, style, ...props }) => {
  return (
    <Element
      element={{
        tag: "img",
        style,
        props: { ...props, src, alt },
      }}
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
