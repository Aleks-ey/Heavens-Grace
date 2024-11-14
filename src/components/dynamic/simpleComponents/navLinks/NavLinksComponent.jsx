import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";
import ButtonComponent from "../../baseComponents/button/ButtonComponent";

const NavLinksComponent = ({ links, linkStyle, style }) => {
  const defaultStyle =
    "flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 ";
  const navStyle = style ? Object.values(style)?.join(" ") : null;
  const buttonStyle = linkStyle ? Object.values(linkStyle).join(" ") : "";

  return (
    <div className={defaultStyle + navStyle}>
      {links.map((link, index) => {
        // use customStyle if provided for a button
        const customButtonStyle = link.style
          ? Object.values(link.style).join(" ")
          : " ";

        return (
          <ButtonComponent
            key={index}
            text={link.text}
            href={link.link}
            onClick={link.onClick}
            style={{ className: twMerge(buttonStyle + customButtonStyle) }}
          />
        );
      })}
    </div>
  );
};

NavLinksComponent.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      link: PropTypes.string,
      onClick: PropTypes.func,
      style: PropTypes.shape({
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

export default NavLinksComponent;
