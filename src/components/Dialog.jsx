import PropTypes from "prop-types";
import { useEffect } from "react";

const Dialog = ({
  item,
  onOpen,
  onClose,
  maxSize = true, // max size of 90vw & 90vh is default, can be set to "half" for 50vw & 50vh, or "none" for no limit
  shadow = true, // 50% opacity black background shadow is on by default, can be set to false
  className = "",
}) => {
  useEffect(() => {
    if (onOpen) onOpen();
  }, [onOpen, onClose]);

  const closeModal = () => {
    if (onClose) onClose();
  };

  // Function to handle click inside the dialog to stop propagation(dialog wont close)
  const handleDialogClick = (e) => {
    e.stopPropagation();
  };

  // Determine size class, default is true
  const sizeClass = maxSize ? "max-w-[90vw] md:max-w-[60vw] max-h-[90vh]" : "";

  // Determine shadow class, default is true
  const shadowClass = shadow ? "bg-black bg-opacity-50" : "";

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-20 ${shadowClass}`}
      onClick={closeModal} // clicking outside of dialog will close it
    >
      <div
        className={`min-w-[33vw] min-h-[33vh] content-center bg-white rounded-lg shadow-lg overflow-hidden relative ${sizeClass} ${className}`}
        onClick={handleDialogClick} // dialog wont close when clicked inside
      >
        {/* Close Dialog Button */}
        <button
          className="absolute top-4 right-4 text-white text-2xl font-bold px-2 pt-0 pb-1 border-main hover:bg-main"
          onClick={closeModal}
        >
          &times;
        </button>

        <div className="w-full h-full flex flex-col justify-center text-center">
          {/* Dialog Image */}
          {item.imageUrl && (
            <div className="w-full flex-shrink-0">
              <img
                src={item.imageUrl}
                alt={`${item.name ? item.name : "Dialog"}'s image`}
                className="object-cover"
              />
            </div>
          )}

          {/* Dialog Text Content */}
          <div className="flex-1 p-4 text-xl font-montserrat overflow-y-auto">
            {/* Name, Age, & Position */}
            <div className="flex flex-row place-content-center text-accent text-3xl font-bold">
              {item.name && <h2 className="">{item.name}</h2>}
              {item.age && <p className="">, {item.age}</p>}
            </div>

            {item.position && (
              <p className="text-main text-2xl md:text-3xl font-medium">
                {item.position}
              </p>
            )}
            {item.location && <p className="text-base-dark">{item.location}</p>}
            {item.date && (
              <p className="text-main text-base">Date: {item.date}</p>
            )}
            <hr className="py-1 md:py-2" />

            {item.description && (
              <p className="text-base-dark">{item.description}</p>
            )}
            {/* extra details, most likely will not be used */}
            {item.time && (
              <p className="text-base-dark text-sm">Time: {item.time}</p>
            )}
            {item.otherDetails && (
              <p className="text-base-dark">{item.otherDetails}</p>
            )}

            {/* For information type card */}
            <div className="mb-4">
              {item.title && (
                <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
              )}
              {item.subtitle && (
                <h3 className="text-xl font-medium mb-2">{item.subtitle}</h3>
              )}
              {item.content && (
                <p className="text-gray-700 mb-4">{item.content}</p>
              )}
              {item.details && (
                <div className="text-gray-600 mt-2">{item.details}</div>
              )}
            </div>
            {item.footer && (
              <div className="mt-4 border-t pt-4">{item.footer}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

Dialog.propTypes = {
  item: PropTypes.shape({
    imageUrl: PropTypes.string,
    name: PropTypes.string,
    position: PropTypes.string,
    age: PropTypes.string,
    location: PropTypes.string,
    description: PropTypes.string,
    time: PropTypes.string,
    date: PropTypes.string,
    otherDetails: PropTypes.string,

    title: PropTypes.string,
    subtitle: PropTypes.string,
    content: PropTypes.string,
    details: PropTypes.string,
    footer: PropTypes.node,
  }).isRequired,
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
  maxSize: PropTypes.bool,
  shadow: PropTypes.bool,
  className: PropTypes.string,
};

export default Dialog;
