import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { twMerge } from "tailwind-merge";
import { createPortal } from "react-dom";
import ComponentRenderer from "../../ComponentRenderer"; // Assuming this is your existing renderer

const DialogComponent = ({
  children,
  dialogChildren = [],
  dialogStyle,
  wrapperStyle,
  overlayStyle,
}) => {
  const [isDialogOpen, setDialogOpen] = useState(false);

  // Open and close handlers for the dialog
  const handleOpenDialog = () => setDialogOpen(true);
  const handleCloseDialog = () => setDialogOpen(false);

  // Close dialog on Escape key press
  useEffect(() => {
    const closeOnEscapeKey = (e) => e.key === "Escape" && handleCloseDialog();
    document.addEventListener("keydown", closeOnEscapeKey);
    return () => document.removeEventListener("keydown", closeOnEscapeKey);
  }, []);

  // Default styles for the dialog, wrapper, and overlay
  const defaultDialogStyle =
    "relative bg-white p-6 rounded-lg shadow-lg max-w-full max-h-full ";
  const defaultWrapperStyle = "cursor-pointer ";
  const defaultDialogOverlayStyle =
    "fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50";

  const customDialogStyle = dialogStyle
    ? Object.values(dialogStyle).join(" ")
    : "";
  const customWrapperStyle = wrapperStyle
    ? Object.values(wrapperStyle).join(" ")
    : "";
  const customOverlayStyle = overlayStyle
    ? Object.values(overlayStyle).join(" ")
    : "";

  // Render the dialog through a portal to avoid parent positioning issues
  const dialog = (
    <div
      className={twMerge(defaultDialogOverlayStyle, customOverlayStyle)}
      onClick={handleCloseDialog}
    >
      <div
        className={twMerge(defaultDialogStyle + customDialogStyle)}
        onClick={(e) => e.stopPropagation()} // Prevent clicks inside the dialog from closing it
      >
        {/* Use ComponentRenderer to render dialogChildren */}
        {dialogChildren.map((child, index) => (
          <ComponentRenderer key={index} config={child} />
        ))}

        {/* Close button */}
        <button
          onClick={handleCloseDialog}
          className="absolute top-0 right-3 text-black font-bold"
        >
          X
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* Clickable wrapper for the children */}
      <div
        onClick={handleOpenDialog}
        className={twMerge(defaultWrapperStyle, customWrapperStyle)}
      >
        {children}
      </div>

      {/* Render dialog content in a portal */}
      {isDialogOpen && createPortal(dialog, document.body)}
    </>
  );
};

DialogComponent.propTypes = {
  children: PropTypes.node, // The content to render as clickable
  dialogChildren: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      props: PropTypes.object,
      children: PropTypes.array,
      style: PropTypes.shape({
        className: PropTypes.string,
      }),
    })
  ), // Content to display in the dialog
  dialogStyle: PropTypes.shape({
    className: PropTypes.string,
  }), // Optional style for the dialog
  wrapperStyle: PropTypes.shape({
    className: PropTypes.string,
  }), // Optional style for the wrapper
  overlayStyle: PropTypes.shape({
    className: PropTypes.string,
  }), // Optional style for the overlay
};

export default DialogComponent;
