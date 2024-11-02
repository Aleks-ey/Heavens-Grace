import Element from "../element/ElementComponent";
import PropTypes from "prop-types";

const TextComponent = ({ text, tag = "p", style, ...props }) => {
  return (
    <Element
      element={{
        tag,
        style,
        props,
      }}
    >
      {text}
    </Element>
  );
};

TextComponent.propTypes = {
  text: PropTypes.string.isRequired,
  tag: PropTypes.string,
  style: PropTypes.shape({
    className: PropTypes.string,
  }),
};

export default TextComponent;
