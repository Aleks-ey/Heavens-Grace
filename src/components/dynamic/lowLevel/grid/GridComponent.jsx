import Element from "../element/ElementComponent";
import PropTypes from "prop-types";

const GridComponent = ({ style, children, columns = 2, ...props }) => {
  // Tailwind CSS classes for grid
  const defaultGridStyle = `grid grid-cols-${columns} gap-4 `;

  return (
    <Element
      element={{
        tag: "div",
        style: { className: defaultGridStyle + (style?.className || "") },
        props,
      }}
    >
      {children}
    </Element>
  );
};

GridComponent.propTypes = {
  style: PropTypes.shape({
    className: PropTypes.string,
  }),
  children: PropTypes.node,
  columns: PropTypes.number,
};

export default GridComponent;
