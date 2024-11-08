// import React from "react";
// import PropTypes from "prop-types";
// import { IndexContextProvider } from "./helpers/IndexContextProvider";

// // Import all components
// import ButtonComponent from "./lowLevel/button/ButtonComponent";
// import CardComponent from "./lowLevel/card/CardComponent";
// import ContainerComponent from "./lowLevel/container/ContainerComponent";
// import ElementComponent from "./lowLevel/element/ElementComponent";
// import FormComponent from "./lowLevel/form/FormComponent";
// import GridComponent from "./lowLevel/grid/GridComponent";
// import ImageComponent from "./lowLevel/image/ImageComponent";
// import ListComponent from "./lowLevel/list/ListComponent";
// import TextComponent from "./lowLevel/text/TextComponent";
// import CarouselComponent from "./highLevel/carousel/CarouselComponent";
// // import CarouselSlideComponent from "./highLevel/carouselSlide/carouselSlideComponent";

// const componentMap = {
//   CardComponent,
//   CarouselComponent,
//   // CarouselSlideComponent,
//   ButtonComponent,
//   ContainerComponent,
//   ElementComponent,
//   FormComponent,
//   GridComponent,
//   ImageComponent,
//   ListComponent,
//   TextComponent,
// };

// const AppBuilder = ({ config }) => {
//   const renderComponentWithContext = (componentConfig) => {
//     const { type, props, contextId, children } = componentConfig;

//     // Get the component type
//     const Component = componentMap[type];
//     if (!Component) {
//       console.warn(`Component ${type} not found`);
//       return null;
//     }

//     // Render children if they exist
//     const renderedChildren =
//       children?.map((childConfig, index) => (
//         <React.Fragment key={index}>
//           {renderComponentWithContext(childConfig)}
//         </React.Fragment>
//       )) || null;

//     // Render the component with its own props, including its own contextId
//     return (
//       <Component {...props} contextId={contextId}>
//         {renderedChildren}
//       </Component>
//     );
//   };

//   return (
//     <IndexContextProvider>
//       {renderComponentWithContext(config)}
//     </IndexContextProvider>
//   );
// };

// AppBuilder.propTypes = {
//   config: PropTypes.shape({
//     type: PropTypes.string.isRequired,
//     props: PropTypes.object,
//     contextId: PropTypes.string,
//     children: PropTypes.arrayOf(
//       PropTypes.shape({
//         type: PropTypes.string.isRequired,
//         props: PropTypes.object,
//         contextId: PropTypes.string,
//         children: PropTypes.array,
//       })
//     ),
//   }).isRequired,
// };

// export default AppBuilder;

import React from "react";
import PropTypes from "prop-types";
import { IndexContextProvider } from "./helpers/IndexContextProvider";

// Import all components
import ButtonComponent from "./lowLevel/button/ButtonComponent";
import CardComponent from "./lowLevel/card/CardComponent";
import ElementComponent from "./lowLevel/element/ElementComponent";
import FormComponent from "./lowLevel/form/FormComponent";
import GridComponent from "./lowLevel/grid/GridComponent";
import HeaderComponent from "./highLevel/header/HeaderComponent";
import ImageComponent from "./lowLevel/image/ImageComponent";
import ListComponent from "./lowLevel/list/ListComponent";
import NavLinksComponent from "./lowLevel/navLinks/NavLinksComponent";
import TextComponent from "./lowLevel/text/TextComponent";

import CarouselComponent from "./highLevel/carousel/CarouselComponent";
import CarouselMultiItemsComponent from "./highLevel/carouselMultiItems/CarouselMultiItemsComponent";

const componentMap = {
  CardComponent,
  CarouselComponent,
  CarouselMultiItemsComponent,
  ButtonComponent,
  ElementComponent,
  FormComponent,
  GridComponent,
  HeaderComponent,
  ImageComponent,
  ListComponent,
  NavLinksComponent,
  TextComponent,
};

const AppBuilder = ({ config }) => {
  const renderComponentWithContext = (componentConfig) => {
    const { type, props, contextId, children } = componentConfig;

    const Component = componentMap[type];
    if (!Component) {
      console.warn(`Component ${type} not found`);
      return null;
    }

    // Pass contextId directly, allowing any structure (single string or object with multiple contextIds)
    const contextProps = { contextId };

    const renderedChildren =
      children?.map((childConfig, index) => (
        <React.Fragment key={index}>
          {renderComponentWithContext(childConfig)}
        </React.Fragment>
      )) || null;

    return (
      <Component {...props} {...contextProps}>
        {renderedChildren}
      </Component>
    );
  };

  return (
    <IndexContextProvider>
      {renderComponentWithContext(config)}
    </IndexContextProvider>
  );
};

AppBuilder.propTypes = {
  config: PropTypes.shape({
    type: PropTypes.string.isRequired,
    props: PropTypes.object,
    contextId: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.objectOf(PropTypes.string), // Allow any number of contextId keys with string values
    ]),
    children: PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.string.isRequired,
        props: PropTypes.object,
        contextId: PropTypes.oneOfType([
          PropTypes.string,
          PropTypes.objectOf(PropTypes.string),
        ]),
        children: PropTypes.array,
      })
    ),
  }).isRequired,
};

export default AppBuilder;
