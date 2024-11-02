import React from "react";
import PropTypes from "prop-types";
import { IndexContextProvider } from "./helpers/IndexContextProvider";

// Import all components
import ButtonComponent from "./lowLevel/button/ButtonComponent";
import CardComponent from "./lowLevel/card/CardComponent";
import ContainerComponent from "./lowLevel/container/ContainerComponent";
import ElementComponent from "./lowLevel/element/ElementComponent";
import FormComponent from "./lowLevel/form/FormComponent";
import GridComponent from "./lowLevel/grid/GridComponent";
import ImageComponent from "./lowLevel/image/ImageComponent";
import ListComponent from "./lowLevel/list/ListComponent";
import TextComponent from "./lowLevel/text/TextComponent";
import CarouselComponent from "./highLevel/carousel/CarouselComponent";
// import CarouselSlideComponent from "./highLevel/carouselSlide/carouselSlideComponent";

const componentMap = {
  CardComponent,
  CarouselComponent,
  // CarouselSlideComponent,
  ButtonComponent,
  ContainerComponent,
  ElementComponent,
  FormComponent,
  GridComponent,
  ImageComponent,
  ListComponent,
  TextComponent,
};

const AppBuilder = ({ config }) => {
  const renderComponentWithContext = (componentConfig) => {
    const { type, props, contextId, children } = componentConfig;

    // Get the component type
    const Component = componentMap[type];
    if (!Component) {
      console.warn(`Component ${type} not found`);
      return null;
    }

    // Render children if they exist
    const renderedChildren =
      children?.map((childConfig, index) => (
        <React.Fragment key={index}>
          {renderComponentWithContext(childConfig)}
        </React.Fragment>
      )) || null;

    // Render the component with its own props, including its own contextId
    return (
      <Component {...props} contextId={contextId}>
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
    contextId: PropTypes.string,
    children: PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.string.isRequired,
        props: PropTypes.object,
        contextId: PropTypes.string,
        children: PropTypes.array,
      })
    ),
  }).isRequired,
};

export default AppBuilder;
