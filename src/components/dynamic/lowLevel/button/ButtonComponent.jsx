// import Element from "../element/ElementComponent";
// import PropTypes from "prop-types";

// const ButtonComponent = ({
//   text,
//   onClick,
//   style,
//   type = "button",
//   ...props
// }) => {
//   return (
//     <Element
//       element={{
//         tag: "button",
//         style,
//         props: { ...props, type, onClick },
//       }}
//     >
//       {text}
//     </Element>
//   );
// };

// ButtonComponent.propTypes = {
//   text: PropTypes.string.isRequired,
//   onClick: PropTypes.func,
//   style: PropTypes.shape({
//     className: PropTypes.string,
//   }),
//   type: PropTypes.string,
// };

// export default ButtonComponent;

import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import ComponentRenderer from "../../ComponentRenderer";

const ButtonComponent = ({
  onClick,
  style,
  type = "button",
  buttonChildren,
  children,
  href, // New prop to specify link URL
  isExternal = false, // Option to specify if the link is external
  ...props
}) => {
  const defaultStyle =
    "bg-white text-black font-medium px-4 py-2 rounded border border-black transform transition-all cursor-pointer ";
  const buttonStyle = style ? Object.values(style).join(" ") : "";

  const content = buttonChildren ? (
    buttonChildren.map((childConfig, index) => (
      <ComponentRenderer key={index} config={childConfig} />
    ))
  ) : (
    <span>{props.text || children}</span>
  );

  if (href) {
    // Render as a link if `href` is provided
    return isExternal ? (
      <a
        href={href}
        className={twMerge(defaultStyle + buttonStyle)}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {content}
      </a>
    ) : (
      <Link
        to={href}
        className={twMerge(defaultStyle + buttonStyle)}
        {...props}
      >
        {content}
      </Link>
    );
  }

  // Render as a button if `href` is not provided
  return (
    <button
      type={type}
      onClick={onClick}
      className={twMerge(defaultStyle + buttonStyle)}
      {...props}
    >
      {content}
    </button>
  );
};

ButtonComponent.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
  style: PropTypes.shape({
    className: PropTypes.string,
  }),
  buttonChildren: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      props: PropTypes.object,
      children: PropTypes.array,
      style: PropTypes.shape({
        className: PropTypes.string,
      }),
    })
  ),
  children: PropTypes.node,
  href: PropTypes.string, // URL for link functionality
  isExternal: PropTypes.bool, // Specifies if the link is external
};

export default ButtonComponent;
