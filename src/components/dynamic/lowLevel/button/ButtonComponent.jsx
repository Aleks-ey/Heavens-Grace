import Element from "../element/ElementComponent";
import PropTypes from "prop-types";

const ButtonComponent = ({
  text,
  onClick,
  style,
  type = "button",
  ...props
}) => {
  return (
    <Element
      element={{
        tag: "button",
        style,
        props: { ...props, type, onClick },
      }}
    >
      {text}
    </Element>
  );
};

ButtonComponent.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  style: PropTypes.shape({
    className: PropTypes.string,
  }),
  type: PropTypes.string,
};

export default ButtonComponent;
