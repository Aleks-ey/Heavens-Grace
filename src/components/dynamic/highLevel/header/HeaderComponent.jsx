// import { useState } from "react";
// import PropTypes from "prop-types";
// import ButtonComponent from "../../lowLevel/button/ButtonComponent";
// import DrawerComponent from "../../lowLevel/drawer/DrawerComponent";
// import ElementComponent from "../../lowLevel/element/ElementComponent";
// // import SlogoComponent from "../../lowLevel/slogo/SlogoComponent";
// import ComponentRenderer from "../../ComponentRenderer"; // For rendering items in the drawer

// const HeaderComponent = ({
//   slogo,
//   navLinks = [],
//   drawerContent = [],
//   style,
//   headerStyle,
// }) => {
//   const [isDrawerOpen, setIsDrawerOpen] = useState(false);

//   const defaultContainerStyle =
//     "absolute w-full top-96 items-center justify-center bg-white text-black ";
//   const containerStyle = headerStyle
//     ? Object.values(headerStyle).join(" ")
//     : "";

//   const defaultStyle =
//     "flex flex-row items-center justify-between p-4 bg-white text-black ";
//   const contentStyle = style ? Object.values(style).join(" ") : "";

//   return (
//     <header className={defaultContainerStyle + containerStyle}>
//       <ElementComponent className={defaultStyle + contentStyle}>
//         {/* Logo Section */}
//         <ComponentRenderer config={slogo} />

//         {/* Navigation Links - Visible on md screens and above */}
//         <nav className="hidden md:flex space-x-4">
//           {navLinks.map((linkConfig, index) => (
//             <ComponentRenderer key={index} config={linkConfig} />
//           ))}
//         </nav>

//         {/* Hamburger icon for opening the drawer on small screens */}
//         <ButtonComponent
//           onClick={() => setIsDrawerOpen(true)}
//           className="md:hidden" // Only show on small screens
//         >
//           <span className="text-3xl">☰</span>
//         </ButtonComponent>
//       </ElementComponent>
//       {/* Drawer Component */}
//       <DrawerComponent
//         isOpen={isDrawerOpen}
//         onClose={() => setIsDrawerOpen(false)}
//         position="left"
//         width="w-64"
//       >
//         {/* Render drawer content with ComponentRenderer for flexibility */}
//         {drawerContent &&
//           drawerContent.map((item, index) => (
//             <ComponentRenderer key={index} config={item} />
//           ))}
//       </DrawerComponent>
//     </header>
//   );
// };
// HeaderComponent.propTypes = {
//   slogo: PropTypes.shape({
//     type: PropTypes.string,
//     props: PropTypes.object,
//   }),
//   navLinks: PropTypes.arrayOf(
//     PropTypes.shape({
//       type: PropTypes.string,
//       props: PropTypes.object,
//     })
//   ),
//   drawerContent: PropTypes.arrayOf(
//     PropTypes.shape({
//       type: PropTypes.string.isRequired,
//       props: PropTypes.object,
//     })
//   ),
//   style: PropTypes.shape({
//     className: PropTypes.string,
//   }),
//   headerStyle: PropTypes.shape({
//     className: PropTypes.string,
//   }),
// };

// export default HeaderComponent;

import { useState } from "react";
import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";
import SlogoComponent from "../../lowLevel/slogo/SlogoComponent"; // Logo component
import DrawerComponent from "../../lowLevel/drawer/DrawerComponent";
import ButtonComponent from "../../lowLevel/button/ButtonComponent";
import ComponentRenderer from "../../ComponentRenderer";

const HeaderComponent = ({
  slogoProps,
  navLinks,
  drawerContent,
  drawerStyle,
  style,
}) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const defaultHeaderStyle =
    "absolute top-0 w-full z-20 flex items-center justify-between px-4 py-2 bg-white text-black ";
  const headerStyle = style ? Object.values(style).join(" ") : "";

  const drawerContainerStyle = drawerStyle
    ? Object.values(drawerStyle).join(" ")
    : "";

  return (
    <header className={twMerge(defaultHeaderStyle, headerStyle)}>
      {/* Logo Section */}
      <SlogoComponent {...slogoProps} />

      {/* Hamburger Icon for small screens */}
      <div className="md:hidden">
        <ButtonComponent
          onClick={() => setIsDrawerOpen(true)}
          style={{
            className: "bg-transparent border-none text-white text-3xl",
          }}
        >
          ☰
        </ButtonComponent>
      </div>

      {/* Navigation Links for medium and larger screens */}
      <div className="hidden md:flex">
        {navLinks && <ComponentRenderer config={navLinks} />}
      </div>

      {/* Drawer for small screens */}
      <DrawerComponent
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        position="left"
        width="w-64"
        drawerStyle={{ drawerContainerStyle }}
      >
        {drawerContent &&
          drawerContent.map((item, index) => (
            <ComponentRenderer key={index} config={item} />
          ))}
      </DrawerComponent>
    </header>
  );
};

HeaderComponent.propTypes = {
  slogoProps: PropTypes.object, // Props for Logo component
  navLinks: PropTypes.shape({
    type: PropTypes.string.isRequired,
    props: PropTypes.object,
  }), // Configuration for navigation links on medium and larger screens
  drawerContent: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      props: PropTypes.object,
    })
  ), // Array of components to display in the drawer
  drawerStyle: PropTypes.shape({
    className: PropTypes.string,
  }),
  style: PropTypes.shape({
    className: PropTypes.string,
  }),
};

export default HeaderComponent;
