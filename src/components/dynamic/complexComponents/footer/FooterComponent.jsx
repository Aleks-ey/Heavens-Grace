import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";
import SlogoComponent from "../../simpleComponents/slogo/SlogoComponent"; // Logo component
import ContactInfoComponent from "../../simpleComponents/contactInfo/ContactInfoComponent";
import ComponentRenderer from "../../ComponentRenderer";

const FooterComponent = ({ footer, slogo, navLinks, contactInfo }) => {
  // Merged footer and container styles
  const defaultFooterStyle =
    "bg-black text-white py-10 mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 ";
  const footerStyle = footer?.style
    ? Object.values(footer.style).join(" ")
    : "";

  return (
    <footer className={twMerge(defaultFooterStyle, footerStyle)}>
      {/* Logo Section */}
      {slogo && <SlogoComponent {...slogo} />}

      {/* Navigation Links */}
      {navLinks && (
        <ComponentRenderer
          config={{ type: "NavLinksComponent", props: { ...navLinks } }}
        />
      )}

      {/* Contact Information */}
      {contactInfo && <ContactInfoComponent {...contactInfo} />}
    </footer>
  );
};

FooterComponent.propTypes = {
  footer: PropTypes.shape({
    style: PropTypes.shape({
      className: PropTypes.string,
    }),
  }),
  slogo: PropTypes.object,
  navLinks: PropTypes.object,
  contactInfo: PropTypes.shape({
    items: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string,
        link: PropTypes.string,
        isLink: PropTypes.bool,
        icon: PropTypes.shape({
          iconUrl: PropTypes.string,
          className: PropTypes.string,
        }),
        customStyle: PropTypes.object,
      })
    ).isRequired,
    style: PropTypes.object,
  }), // Contact info configuration
};

export default FooterComponent;
