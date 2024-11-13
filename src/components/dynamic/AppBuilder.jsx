import React from "react";
import PropTypes from "prop-types";
import { IndexContextProvider } from "./helpers/IndexContextProvider";

// Import all components
import ButtonComponent from "./lowLevel/button/ButtonComponent";
import CardComponent from "./lowLevel/card/CardComponent";
import DialogComponent from "./lowLevel/dialog/DialogComponent";
import DrawerComponent from "./lowLevel/drawer/DrawerComponent";
import ElementComponent from "./lowLevel/element/ElementComponent";
import FooterComponent from "./highLevel/footer/FooterComponent";
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
  DialogComponent,
  DrawerComponent,
  ButtonComponent,
  ElementComponent,
  FooterComponent,
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
