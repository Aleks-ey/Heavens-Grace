import PropTypes from "prop-types";

const ElementComponent = ({
  element = { tag: "div", style: "" },
  children,
}) => {
  // Choose the tag dynamically based on the "tag" prop
  const { tag: Tag, style, onClick, ...restProps } = element;
  // Use the "style" prop to set the className attribute of the element
  const className = style ? Object.values(style).join(" ") : "";

  return (
    <Tag className={className} onClick={onClick} {...restProps}>
      {children}
    </Tag>
  );
};

ElementComponent.propTypes = {
  element: PropTypes.shape({
    tag: PropTypes.string, // The HTML tag to use for the element (e.g., "h2", "img", "div", etc.)
    style: PropTypes.shape({
      className: PropTypes.string,
    }),
    onClick: PropTypes.func, // Event handler function for onClick
  }),
  children: PropTypes.node,
};

export default ElementComponent;
