import PropTypes from "prop-types";

const ElementComponent = ({
  tag: Tag = "div",
  style,
  children,
  ...restProps
}) => {
  // Destructure and omit non-HTML-standard props
  const { contextId, ...filteredProps } = restProps;
  if (contextId) {
    filteredProps["data-context-id"] = contextId;
  }

  const elementStyle = style ? Object.values(style).join(" ") : "";

  return (
    <Tag className={elementStyle} {...filteredProps}>
      {children}
    </Tag>
  );
};

ElementComponent.propTypes = {
  tag: PropTypes.string, // The HTML tag to use for the element (e.g., "div", "span", "button")
  style: PropTypes.shape({
    className: PropTypes.string,
  }),
  children: PropTypes.node, // Children elements to render inside the tag
};

export default ElementComponent;
