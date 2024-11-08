import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";

const TextComponent = ({ tag: Tag = "p", text, style, ...restProps }) => {
  const defaultTextStyle = "text-gray-700 ";
  const textStyle = style ? Object.values(style).join(" ") : "";

  // Destructure and omit non-HTML-standard props
  const { contextId, ...filteredProps } = restProps;
  if (contextId) {
    filteredProps["data-context-id"] = contextId;
  }

  return (
    <Tag className={twMerge(defaultTextStyle + textStyle)} {...restProps}>
      {text}
    </Tag>
  );
};

TextComponent.propTypes = {
  tag: PropTypes.string,
  text: PropTypes.string.isRequired,
  style: PropTypes.shape({
    className: PropTypes.string,
  }),
  children: PropTypes.node,
};

export default TextComponent;
