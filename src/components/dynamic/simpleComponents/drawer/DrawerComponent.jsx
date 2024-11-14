import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";

const DrawerComponent = ({
  isOpen,
  onClose,
  position = "left",
  width = "w-64",
  overlayStyle,
  drawerStyle,
  children,
}) => {
  const positionClass = position === "right" ? "right-0" : "left-0";
  const defaultDrawerStyle = `fixed top-0 ${positionClass} h-full ${width} bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-40 ${
    isOpen
      ? "translate-x-0 "
      : position === "right"
      ? "translate-x-full "
      : "-translate-x-full "
  }`;
  const defaultOverlayStyle = "fixed inset-0 bg-black bg-opacity-50 z-30 ";

  const drawerContainerStyle = drawerStyle ? Object.values(drawerStyle) : "";
  const overlayContainerStyle = overlayStyle ? Object.values(overlayStyle) : "";

  return (
    <>
      {/* Overlay for closing drawer when clicking outside */}
      {isOpen && (
        <div
          onClick={onClose}
          className={twMerge(defaultOverlayStyle + overlayContainerStyle)}
        />
      )}

      {/* Drawer Content */}
      <div className={twMerge(defaultDrawerStyle + drawerContainerStyle)}>
        {children}
      </div>
    </>
  );
};

DrawerComponent.propTypes = {
  isOpen: PropTypes.bool.isRequired, // Controls if the drawer is open
  onClose: PropTypes.func.isRequired, // Function to close the drawer
  position: PropTypes.oneOf(["left", "right"]), // Position of the drawer
  width: PropTypes.string, // Tailwind width class for drawer size
  overlayStyle: PropTypes.shape({
    className: PropTypes.string,
  }), // Custom styling for overlay
  drawerStyle: PropTypes.shape({
    className: PropTypes.string,
  }), // Custom styling for drawer content
  children: PropTypes.node, // Content to render inside the drawer
};

export default DrawerComponent;
