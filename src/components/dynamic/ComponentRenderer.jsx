import React, { Suspense, useMemo } from "react";
import PropTypes from "prop-types";

// Lazy load components to avoid circular dependencies
const ButtonComponent = React.lazy(() =>
  import("./baseComponents/button/ButtonComponent")
);
const CardComponent = React.lazy(() =>
  import("./simpleComponents/card/CardComponent")
);
const CarouselComponent = React.lazy(() =>
  import("./complexComponents/carousel/CarouselComponent")
);
const CarouselMultiItemsComponent = React.lazy(() =>
  import("./complexComponents/carouselMultiItems/CarouselMultiItemsComponent")
);
const DialogComponent = React.lazy(() =>
  import("./simpleComponents/dialog/DialogComponent")
);
const DrawerComponent = React.lazy(() =>
  import("./simpleComponents/drawer/DrawerComponent")
);
const ElementComponent = React.lazy(() =>
  import("./baseComponents/element/ElementComponent")
);
const FooterComponent = React.lazy(() =>
  import("./complexComponents/footer/FooterComponent")
);
const FormComponent = React.lazy(() =>
  import("./simpleComponents/form/FormComponent")
);
const GridComponent = React.lazy(() =>
  import("./simpleComponents/grid/GridComponent")
);
const HeaderComponent = React.lazy(() =>
  import("./complexComponents/header/HeaderComponent")
);
const ImageComponent = React.lazy(() =>
  import("./baseComponents/image/ImageComponent")
);
const ListComponent = React.lazy(() =>
  import("./simpleComponents/list/ListComponent")
);
const NavLinksComponent = React.lazy(() =>
  import("./simpleComponents/navLinks/NavLinksComponent")
);
const SlogoComponent = React.lazy(() =>
  import("./simpleComponents/slogo/SlogoComponent")
);
const TextComponent = React.lazy(() =>
  import("./baseComponents/text/TextComponent")
);

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
