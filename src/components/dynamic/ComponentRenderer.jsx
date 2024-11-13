// import React from "react";
// import PropTypes from "prop-types";
// // lowLevel
// import ButtonComponent from "./lowLevel/button/ButtonComponent";
// import CardComponent from "./lowLevel/card/CardComponent";
// import ContainerComponent from "./lowLevel/container/ContainerComponent";
// import ElementComponent from "./lowLevel/element/ElementComponent";
// import FormComponent from "./lowLevel/form/FormComponent";
// import GridComponent from "./lowLevel/grid/GridComponent";
// import ImageComponent from "./lowLevel/image/ImageComponent";
// import ListComponent from "./lowLevel/list/ListComponent";
// import TextComponent from "./lowLevel/text/TextComponent";
// // highLevel
// import CarouselComponent from "./highLevel/carousel/CarouselComponent";

// const componentMap = {
//   ButtonComponent,
//   CardComponent,
//   CarouselComponent,
//   ContainerComponent,
//   ElementComponent,
//   FormComponent,
//   GridComponent,
//   ImageComponent,
//   ListComponent,
//   TextComponent,
// };

// const ComponentRenderer = ({ config }) => {
//   // Recursive function to render a component based on the configuration
//   const renderComponent = (config) => {
//     const { type, props, children } = config;
//     const Component = componentMap[type];

//     if (!Component) {
//       console.warn(`Component ${type} not found`);
//       return null;
//     }

//     return (
//       <Component {...props}>
//         {children &&
//           children.map((childConfig, index) => (
//             <React.Fragment key={index}>
//               {renderComponent(childConfig)}
//             </React.Fragment>
//           ))}
//       </Component>
//     );
//   };

//   return <>{renderComponent(config)}</>;
// };

// // PropTypes validation
// ComponentRenderer.propTypes = {
//   config: PropTypes.shape({
//     type: PropTypes.string.isRequired,
//     props: PropTypes.object,
//     children: PropTypes.arrayOf(
//       PropTypes.shape({
//         type: PropTypes.string.isRequired,
//         props: PropTypes.object,
//         children: PropTypes.array,
//       })
//     ),
//   }).isRequired,
// };

// export default ComponentRenderer;

import React, { Suspense, useMemo } from "react";
import PropTypes from "prop-types";

// Lazy load components to avoid circular dependencies
const ButtonComponent = React.lazy(() =>
  import("./lowLevel/button/ButtonComponent")
);
const CardComponent = React.lazy(() => import("./lowLevel/card/CardComponent"));
const CarouselComponent = React.lazy(() =>
  import("./highLevel/carousel/CarouselComponent")
);
const CarouselMultiItemsComponent = React.lazy(() =>
  import("./highLevel/carouselMultiItems/CarouselMultiItemsComponent")
);
const DialogComponent = React.lazy(() =>
  import("./lowLevel/dialog/DialogComponent")
);
const DrawerComponent = React.lazy(() =>
  import("./lowLevel/drawer/DrawerComponent")
);
const ElementComponent = React.lazy(() =>
  import("./lowLevel/element/ElementComponent")
);
const FooterComponent = React.lazy(() =>
  import("./highLevel/footer/FooterComponent")
);
const FormComponent = React.lazy(() => import("./lowLevel/form/FormComponent"));
const GridComponent = React.lazy(() => import("./lowLevel/grid/GridComponent"));
const HeaderComponent = React.lazy(() =>
  import("./highLevel/header/HeaderComponent")
);
const ImageComponent = React.lazy(() =>
  import("./lowLevel/image/ImageComponent")
);
const ListComponent = React.lazy(() => import("./lowLevel/list/ListComponent"));
const NavLinksComponent = React.lazy(() =>
  import("./lowLevel/navLinks/NavLinksComponent")
);
const SlogoComponent = React.lazy(() =>
  import("./lowLevel/slogo/SlogoComponent")
);
const TextComponent = React.lazy(() => import("./lowLevel/text/TextComponent"));

const ComponentRenderer = ({ config }) => {
  // Memoize componentMap to prevent re-creating it on each render
  const componentMap = useMemo(
    () => ({
      ButtonComponent,
      CardComponent,
      CarouselComponent,
      CarouselMultiItemsComponent,
      DialogComponent,
      DrawerComponent,
      ElementComponent,
      FooterComponent,
      FormComponent,
      GridComponent,
      HeaderComponent,
      ImageComponent,
      ListComponent,
      NavLinksComponent,
      TextComponent,
      SlogoComponent,
    }),
    []
  );

  // Recursive function to render a component based on the configuration
  const renderComponent = (config) => {
    const { type, props, children } = config;
    const Component = componentMap[type];

    if (!Component) {
      console.warn(`Component ${type} not found`);
      return null;
    }

    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Component {...props}>
          {children &&
            children.map((childConfig, index) => (
              <React.Fragment key={index}>
                {renderComponent(childConfig)}
              </React.Fragment>
            ))}
        </Component>
      </Suspense>
    );
  };

  return <>{renderComponent(config)}</>;
};

// PropTypes validation
ComponentRenderer.propTypes = {
  config: PropTypes.shape({
    type: PropTypes.string.isRequired,
    props: PropTypes.object,
    children: PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.string.isRequired,
        props: PropTypes.object,
        children: PropTypes.array,
      })
    ),
  }).isRequired,
};

export default ComponentRenderer;
