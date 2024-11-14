// src/components/Slogo.jsx
import PropTypes from "prop-types";

const SlogoComponent = ({
  showLogo = true,
  logo,
  showIdentity = true,
  identity,
  style = { className: "" },
}) => {
  const defaultContainerStyle = "flex items-center justify-center ";
  const containerStyle = style ? Object.values(style).join(" ") : "";

  const defaultLogoStyle = "w-16 h-16 ";
  const logoStyle = logo.logoStyle
    ? Object.values(logo.logoStyle).join(" ")
    : "";

  const defaultSloganStyle = "";
  const sloganStyle = identity?.sloganStyle
    ? Object.values(identity.sloganStyle).join(" ")
    : "";

  const defaultNameStyle = "";
  const nameStyle = identity?.nameStyle
    ? Object.values(identity.nameStyle).join(" ")
    : "";

  return (
    <div className={defaultContainerStyle + containerStyle}>
      {/* Logo Section */}
      {showLogo && logo.src ? (
        <a href="/home">
          <img
            src={logo.src}
            alt={logo.alt || ""}
            className={defaultLogoStyle + logoStyle}
          />
        </a>
      ) : null}

      {/* Slogan Section */}
      {showIdentity && identity && (
        <a href="/home" className="flex flex-col text-center">
          <h1 className="flex flex-col text-center">
            <span className={defaultNameStyle + nameStyle}>
              {identity.name || ""}
            </span>
            <span className={defaultSloganStyle + sloganStyle}>
              {identity.slogan || ""}
            </span>
          </h1>
        </a>
      )}
    </div>
  );
};

SlogoComponent.propTypes = {
  //   boolean to show logo and logo styling
  showLogo: PropTypes.bool,
  logo: PropTypes.shape({
    src: PropTypes.string,
    alt: PropTypes.string,
    logoStyle: PropTypes.shape({
      className: PropTypes.string,
    }),
  }),
  //   boolean to show slogan and slogan styling
  showIdentity: PropTypes.bool,
  identity: PropTypes.shape({
    name: PropTypes.string,
    nameStyle: PropTypes.shape({
      className: PropTypes.string,
    }),
    slogan: PropTypes.string,
    sloganStyle: PropTypes.shape({
      className: PropTypes.string,
    }),
  }),
  //   Style for outer div
  style: PropTypes.shape({
    className: PropTypes.string,
  }),
};

export default SlogoComponent;
