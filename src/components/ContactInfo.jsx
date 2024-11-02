import PropTypes from "prop-types";

const ContactInfo = ({ items, itemsStyle, style }) => {
  // *** ALL DEFAULT STYLES NEED A SPACE AT THE END TO JOIN TOGETHER CORRECTLY WITH CUSTOM STYLES ***
  // default tailwind style for contact info container
  const defaultStyle = "flex flex-col items-center md:items-end space-y-2 ";
  // default tailwind style for contact info items
  const defaultItemsStyle = "flex items-center text-white text-sm ";
  // default tailwind style for contact info icons
  const defaultIconStyle = "w-5 h-5 mr-2 ";

  // check for custom style for contact info container
  const checkStyle = style ? Object.values(style)?.join(" ") : null;
  // check for custom style for contact info items
  const checkItemsStyle = itemsStyle
    ? Object.values(itemsStyle)?.join(" ").concat(" ") // concat used to add space to end
    : null;

  return (
    <div className={defaultStyle + checkStyle}>
      {items.map((item, index) => (
        <p
          key={index}
          className={
            defaultItemsStyle +
            checkItemsStyle +
            (item.customStyle
              ? Object.values(item.customStyle)?.join(" ")
              : " ")
          }
        >
          {item.icon && (
            <img
              src={item.icon.iconUrl}
              alt={`${item.text} icon`}
              className={defaultIconStyle + item.icon.className}
            />
          )}
          {item.isLink ? (
            <a
              href={item.link}
              className="hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.text}
            </a>
          ) : (
            <span>{item.text}</span>
          )}
        </p>
      ))}
    </div>
  );
};

ContactInfo.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      isLink: PropTypes.bool,
      link: PropTypes.string,
      text: PropTypes.string.isRequired,
      customStyle: PropTypes.shape({
        className: PropTypes.string,
      }),
      icon: PropTypes.shape({
        iconUrl: PropTypes.string.isRequired,
        className: PropTypes.string,
      }),
    })
  ).isRequired,
  itemsStyle: PropTypes.shape({
    className: PropTypes.string,
  }),
  style: PropTypes.shape({
    className: PropTypes.string,
  }),
};

export default ContactInfo;
