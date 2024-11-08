// src/components/Footer.jsx
import PropTypes from "prop-types";
import fullLogoWhite from "../assets/logos/full-logo-white.png";

import AHSlogo from "./Slogo";
import AHNavLinks from "./dynamic/lowLevel/navLinks/NavLinksComponent";
import AHContactInfo from "./ContactInfo";

const Footer = ({ footer }) => {
  // *** ALL DEFAULT STYLES NEED A SPACE AT THE END TO JOIN TOGETHER CORRECTLY WITH CUSTOM STYLES ***
  // default tailwind style for footer
  const defaultFooterStyle = "bg-black text-white py-10 ";
  // default tailwind style for footer container
  const defaultContainerStyle =
    "mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 ";

  const footerStyle = footer.style
    ? Object.values(footer.style)?.join(" ")
    : null;
  const containerStyle = footer.container
    ? Object.values(footer.container)?.join(" ")
    : null;

  const logo = {
    src: fullLogoWhite,
    alt: "Heaven's Grace Logo",
    logoStyle: {
      height: "md:h-28",
      objectFit: "object-cover",
    },
  };

  const navLinks = [
    { text: "About Us", link: "/about" },
    { text: "Children", link: "/support" },
    { text: "How Donate", link: "/" },
    { text: "News & Media", link: "/board" },
    { text: "Contact", link: "/" },
  ];

  const linksStyle = {
    font: "font-montserrat",
    fontSize: "text-sm",
    backgroundColor: "bg-transparent",
    color: "text-white",
    padding: "px-2 py-2",
    border: "border-transparent",
    hoverColors: "hover:text-main hover:border-b hover:border-b-main",
    activeColors: "active:text-main active:border-main",
    focusStyle: "focus:outline-none",
  };

  const navLinksStyle = {
    display: "flex",
    direction: "flex-col md:flex-row",
    spacing: "space-y-4 md:space-y-0 md:space-x-2",
  };

  const contactItems = [
    { text: "Mail: info@heavensgrace.org" },
    { text: "Phone: +1 (234) 567-890" },
    {
      isLink: true,
      link: "https://facebook.com/heavensgrace",
      text: "Facebook",
      icon: {
        iconUrl: "/path/to/facebook-icon.png",
        className: "w-4 h-4 mr-2",
      },
      customStyle: {
        display: "flex",
        direction: "flex-row",
      },
    },
  ];

  const contactItemsStyle = {
    font: "font-montserrat",
    fontSize: "text-sm",
  };

  const contactInfoStyle = {
    display: "flex",
    direction: "flex-col",
    center: "items-center",
    color: "text-white",
    spacing: "space-y-2",
  };

  return (
    <footer className={defaultFooterStyle + footerStyle}>
      <div className={defaultContainerStyle + containerStyle}>
        {/* Logo Section */}
        <AHSlogo logo={logo} showLogo={true} showIdentity={false} />

        {/* Navigation Links */}
        <AHNavLinks
          links={navLinks}
          linkStyle={linksStyle}
          style={navLinksStyle}
        />

        {/* Contact Section */}
        <AHContactInfo
          items={contactItems}
          itemsStyle={contactItemsStyle}
          style={contactInfoStyle}
        />
      </div>
    </footer>
  );
};

Footer.propTypes = {
  footer: PropTypes.shape({
    style: PropTypes.shape({
      className: PropTypes.string,
    }),
    container: PropTypes.shape({
      className: PropTypes.string,
    }),
  }),
};

export default Footer;
