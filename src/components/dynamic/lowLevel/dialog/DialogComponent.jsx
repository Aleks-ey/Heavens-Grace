// // DialogComponent.jsx
// import PropTypes from "prop-types";
// import { useState, useEffect } from "react";
// import ComponentRenderer from "../../ComponentRenderer";
// import { twMerge } from "tailwind-merge";

// const DialogComponent = ({
//   children,
//   dialogChildren = [],
//   dialogStyle,
//   wrapperStyle,
// }) => {
//   const [isDialogOpen, setDialogOpen] = useState(false);

//   // Open and close handlers for the dialog
//   const handleOpenDialog = () => setDialogOpen(true);
//   const handleCloseDialog = () => setDialogOpen(false);

//   // Close dialog on Escape key press
//   useEffect(() => {
//     const closeOnEscapeKey = (e) => e.key === "Escape" && handleCloseDialog();
//     document.addEventListener("keydown", closeOnEscapeKey);
//     return () => document.removeEventListener("keydown", closeOnEscapeKey);
//   }, []);

//   // Default styles for the dialog and wrapper
//   const defaultDialogStyle =
//     "fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 ";
//   const defaultWrapperStyle = "cursor-pointer ";

//   const customDialogStyle = dialogStyle
//     ? Object.values(dialogStyle).join(" ")
//     : "";
//   const customWrapperStyle = wrapperStyle
//     ? Object.values(wrapperStyle).join(" ")
//     : "";

//   return (
//     <>
//       {/* Clickable wrapper for the children */}
//       <div
//         onClick={handleOpenDialog}
//         className={twMerge(defaultWrapperStyle, customWrapperStyle)}
//       >
//         {children}
//       </div>

//       {/* Dialog that appears on click */}
//       {isDialogOpen && (
//         <div
//           className={twMerge(defaultDialogStyle, customDialogStyle)}
//           onClick={handleCloseDialog}
//         >
//           <div
//             className="bg-white p-6 rounded-lg shadow-lg"
//             onClick={(e) => e.stopPropagation()} // Prevent clicks inside the dialog from closing it
//           >
//             {dialogChildren.map((child, index) => (
//               <ComponentRenderer key={index} config={child} />
//             ))}

//             {/* Close button */}
//             <button
//               onClick={handleCloseDialog}
//               className="mt-4 bg-red-500 text-white p-2 rounded"
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// DialogComponent.propTypes = {
//   children: PropTypes.node, // The content to render as clickable
//   dialogChildren: PropTypes.arrayOf(
//     PropTypes.shape({
//       type: PropTypes.string.isRequired,
//       props: PropTypes.object,
//       children: PropTypes.arrayOf(
//         PropTypes.shape({
//           type: PropTypes.string.isRequired,
//           props: PropTypes.object,
//           children: PropTypes.array,
//         })
//       ),
//       style: PropTypes.shape({
//         className: PropTypes.string,
//       }),
//     })
//   ), // Content to display in the dialog
//   dialogStyle: PropTypes.shape({
//     className: PropTypes.string,
//   }), // Optional style for the dialog
//   wrapperStyle: PropTypes.shape({
//     className: PropTypes.string,
//   }), // Optional style for the wrapper
// };

// export default DialogComponent;

// DialogComponent.jsx
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

  // Default styles for the dialog and wrapper
  const defaultDialogOverlayStyle =
    "fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50";
  const defaultWrapperStyle = "cursor-pointer ";

  const customDialogStyle = dialogStyle
    ? Object.values(dialogStyle).join(" ")
    : "";
  const customWrapperStyle = wrapperStyle
    ? Object.values(wrapperStyle).join(" ")
    : "";

  // Render the dialog through a portal to avoid parent positioning issues
  const dialog = (
    <div
      className={twMerge(defaultDialogOverlayStyle, customDialogStyle)}
      onClick={handleCloseDialog}
    >
      <div
        className="bg-white p-6 rounded-lg shadow-lg max-w-full max-h-full"
        onClick={(e) => e.stopPropagation()} // Prevent clicks inside the dialog from closing it
      >
        {/* Use ComponentRenderer to render dialogChildren */}
        {dialogChildren.map((child, index) => (
          <ComponentRenderer key={index} config={child} />
        ))}

        {/* Close button */}
        <button
          onClick={handleCloseDialog}
          className="mt-4 bg-red-500 text-white p-2 rounded"
        >
          Close
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
};

export default DialogComponent;
