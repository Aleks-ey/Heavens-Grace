import React from "react";
import PropTypes from "prop-types";

import ButtonComponent from "./lowLevel/button/ButtonComponent";
import CardComponent from "./lowLevel/card/CardComponent";
import ContainerComponent from "./lowLevel/container/ContainerComponent";
import ElementComponent from "./lowLevel/element/ElementComponent";
import FormComponent from "./lowLevel/form/FormComponent";
import GridComponent from "./lowLevel/grid/GridComponent";
import ImageComponent from "./lowLevel/image/ImageComponent";
import ListComponent from "./lowLevel/list/ListComponent";
import TextComponent from "./lowLevel/text/TextComponent";

// import CarouselSlideComponent from "./highLevel/carouselSlide/carouselSlideComponent";

const componentMap = {
  ButtonComponent,
  CardComponent,
  // CarouselSlideComponent,
  ContainerComponent,
  ElementComponent,
  FormComponent,
  GridComponent,
  ImageComponent,
  ListComponent,
  TextComponent,
};

const ComponentRenderer = ({ config }) => {
  // Recursive function to render a component based on the configuration
  const renderComponent = (config) => {
    const { type, props, children } = config;
    const Component = componentMap[type];

    if (!Component) {
      console.warn(`Component ${type} not found`);
      return null;
    }

    return (
      <Component {...props}>
        {children &&
          children.map((childConfig, index) => (
            <React.Fragment key={index}>
              {renderComponent(childConfig)}
            </React.Fragment>
          ))}
      </Component>
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
