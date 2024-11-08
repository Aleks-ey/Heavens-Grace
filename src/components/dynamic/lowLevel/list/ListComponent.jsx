import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";
import { useIndexContext } from "../../helpers/useIndexContext";

const ListComponent = ({
  items = [],
  initialIndex = 0,
  contextId,
  underlineActive = true,
  style,
  itemStyle,
  activeStyle,
  onItemClick,
}) => {
  const { index, setIndex } = useIndexContext(contextId, initialIndex);

  const defaultListStyle = "space-y-2 ";
  const listStyle = style ? Object.values(style).join(" ") : "";

  const defaultLiStyle = "text-gray-500 cursor-pointer px-2 ";
  const liStyle = itemStyle
    ? Object.values(itemStyle).join(" ").concat(" ")
    : "";

  const defaultActiveLiStyle = "font-bold text-black underline ";
  const activeLiStyle = activeStyle
    ? Object.values(activeStyle).join(" ").concat(" ")
    : "";

  const handleClick = (newIndex) => {
    setIndex(newIndex);
    if (onItemClick) onItemClick(newIndex);
  };

  return (
    <ul className={twMerge(defaultListStyle + listStyle)}>
      {items.map((item, itemIndex) => {
        const isActive = index === itemIndex && underlineActive;
        const customLiStyle = item.style
          ? Object.values(item.style.className).join(" ").concat(" ")
          : "";
        const customActiveLiStyle = item.activeStyle
          ? Object.values(item.activeStyle.className).join(" ")
          : "";
        const itemClasses = isActive
          ? twMerge(
              defaultLiStyle +
                defaultActiveLiStyle +
                customLiStyle +
                activeLiStyle +
                customActiveLiStyle
            )
          : twMerge(defaultLiStyle + liStyle + customLiStyle);

        return (
          <li
            key={itemIndex}
            className={itemClasses}
            onClick={() => handleClick(itemIndex)}
          >
            {item.text}
          </li>
        );
      })}
    </ul>
  );
};

ListComponent.propTypes = {
  initialIndex: PropTypes.number,
  contextId: PropTypes.string,
  underlineActive: PropTypes.bool,
  onItemClick: PropTypes.func,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      style: PropTypes.shape({
        className: PropTypes.string,
      }),
      activeStyle: PropTypes.shape({
        className: PropTypes.string,
      }),
    })
  ).isRequired,
  itemStyle: PropTypes.shape({
    className: PropTypes.string,
  }),
  activeStyle: PropTypes.shape({
    className: PropTypes.string,
  }),
  style: PropTypes.shape({
    className: PropTypes.string,
  }),
};

export default ListComponent;
