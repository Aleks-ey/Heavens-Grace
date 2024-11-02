import PropTypes from "prop-types";
import Button from "./Button";

const NavLinks = ({ links, linkStyle, style }) => {
  // *** ALL DEFAULT STYLES NEED A SPACE AT THE END TO JOIN TOGETHER CORRECTLY WITH CUSTOM STYLES ***
  // default tailwind style for navLinks container
  const defaultStyle =
    "flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 ";
  // check for custom style for navLinks container
  const navStyle = style ? Object.values(style)?.join(" ") : null;

  return (
    <div className={defaultStyle + navStyle}>
      {links.map((link, index) => {
        // use customStyle if provided for a button
        const buttonStyle = link.customStyle ? link.customStyle : linkStyle;

        return (
          <Button
            key={index}
            buttonProps={{
              text: link.text,
              link: link.link,
              onClick: link.onClick,
              style: buttonStyle,
            }}
          />
        );
      })}
    </div>
  );
};

NavLinks.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      link: PropTypes.string,
      onClick: PropTypes.func,
      customStyle: PropTypes.shape({
        className: PropTypes.string,
      }),
    })
  ),
  linkStyle: PropTypes.shape({
    className: PropTypes.string,
  }),
  style: PropTypes.shape({
    className: PropTypes.string,
  }),
};

export default NavLinks;
