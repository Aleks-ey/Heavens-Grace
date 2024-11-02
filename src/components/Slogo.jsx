// src/components/Slogo.jsx
import PropTypes from "prop-types";

const Slogo = ({
  showLogo = true,
  logo,
  showIdentity = true,
  identity,
  style = { className: "" },
}) => {
  return (
    <div
      className={
        "flex items-center justify-center" + Object.values(style)?.join(" ")
      }
    >
      {/* Logo Section */}
      {showLogo && logo.src ? (
        <a href="/">
          <img
            src={logo.src}
            alt={logo.alt}
            className={Object.values(logo.logoStyle)?.join(" ") || "w-16 h-16"}
          />
        </a>
      ) : null}

      {/* Slogan Section */}
      {showIdentity && identity && (
        <a href="/" className="flex flex-col text-center">
          <h1 className="flex flex-col text-center">
            <span className={Object.values(identity.nameStyle)?.join(" ")}>
              {identity.name}
            </span>
            <span className={Object.values(identity.sloganStyle)?.join(" ")}>
              {identity.slogan}
            </span>
          </h1>
        </a>
      )}
    </div>
  );
};

Slogo.propTypes = {
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

export default Slogo;
