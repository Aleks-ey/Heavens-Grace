import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

const Button = ({ buttonProps }) => {
  // *** ALL DEFAULT STYLES NEED A SPACE AT THE END TO JOIN TOGETHER CORRECTLY WITH CUSTOM STYLES ***
  // Default Tailwind styles for the button
  const defaultStyle =
    "bg-white text-black font-medium px-4 py-2 rounded border border-black transform transition-all cursor-pointer ";

  // check for custom styles
  const customStyle = buttonProps.style
    ? Object.values(buttonProps.style)?.join(" ")
    : null;

  // Handle the click event if provided
  const handleClick = () => {
    if (buttonProps?.onClick) {
      buttonProps.onClick();
    }
  };

  return (
    <Link to={buttonProps?.link} className="">
      <button
        className={twMerge(defaultStyle + customStyle)}
        onClick={handleClick}
      >
        {buttonProps?.text || "Click me"}
      </button>
    </Link>
  );
};

Button.propTypes = {
  buttonProps: PropTypes.shape({
    text: PropTypes.string,
    link: PropTypes.string,
    onClick: PropTypes.func,
    // Array of style props for ctaButton
    style: PropTypes.shape({
      className: PropTypes.string,
    }),
  }),
};

export default Button;
