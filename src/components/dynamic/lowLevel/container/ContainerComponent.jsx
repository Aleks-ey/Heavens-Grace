import Element from "../element/ElementComponent";
import PropTypes from "prop-types";

const ContainerComponent = ({ tag = "div", style, children, ...props }) => {
  return (
    <Element
      element={{
        tag,
        style,
        props,
      }}
    >
      {children}
    </Element>
  );
};

ContainerComponent.propTypes = {
  tag: PropTypes.string,
  style: PropTypes.shape({
    className: PropTypes.string,
  }),
  children: PropTypes.node,
};

export default ContainerComponent;
