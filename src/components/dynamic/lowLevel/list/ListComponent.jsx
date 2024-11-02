import PropTypes from "prop-types";
import Element from "../element/ElementComponent";
import { useIndexContext } from "../../helpers/useIndexContext";
import { useEffect } from "react";

const ListComponent = ({
  items,
  initialIndex = 0,
  contextId,
  underlineActive = true,
  listTag = "ul",
  itemTag = "li",
  style,
  itemStyle,
  activeItemStyle,
  onItemClick,
}) => {
  const { index, setIndex } = useIndexContext(contextId);

  // Set initial index on first render if it hasn't been set yet
  useEffect(() => {
    if (index === undefined) {
      setIndex(initialIndex);
    }
  }, [initialIndex, index, setIndex]);

  const listCombinedStyle = style
    ? `space-y-2 ${Object.values(style).join(" ")}`
    : "space-y-2";

  const defaultItemStyle = "text-gray-500 cursor-pointer px-2";
  const customItemStyle = itemStyle ? Object.values(itemStyle).join(" ") : "";

  const defaultActiveItemStyle = "font-bold text-black underline";
  const customActiveItemStyle = activeItemStyle
    ? Object.values(activeItemStyle).join(" ")
    : "";

  const handleClick = (newIndex) => {
    setIndex(newIndex);
    if (onItemClick) onItemClick(newIndex);
  };

  return (
    <Element
      element={{
        tag: listTag,
        style: { className: listCombinedStyle },
      }}
    >
      {items.map((item, itemIndex) => (
        <Element
          key={itemIndex}
          element={{
            tag: itemTag,
            style: {
              className:
                index === itemIndex && underlineActive
                  ? defaultActiveItemStyle + customActiveItemStyle
                  : defaultItemStyle + customItemStyle,
            },
            onClick: () => handleClick(itemIndex),
          }}
        >
          {item}
        </Element>
      ))}
    </Element>
  );
};

ListComponent.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  initialIndex: PropTypes.number,
  contextId: PropTypes.string,
  underlineActive: PropTypes.bool,
  listTag: PropTypes.string,
  itemTag: PropTypes.string,
  style: PropTypes.shape({
    className: PropTypes.string,
  }),
  itemStyle: PropTypes.shape({
    className: PropTypes.string,
  }),
  activeItemStyle: PropTypes.shape({
    className: PropTypes.string,
  }),
  onItemClick: PropTypes.func,
};

export default ListComponent;
