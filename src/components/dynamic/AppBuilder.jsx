import React from "react";
import PropTypes from "prop-types";
import { IndexContextProvider } from "./helpers/IndexContextProvider";

// Import all components
import ButtonComponent from "./baseComponents/button/ButtonComponent";
import CardComponent from "./simpleComponents/card/CardComponent";
import DialogComponent from "./simpleComponents/dialog/DialogComponent";
import DrawerComponent from "./simpleComponents/drawer/DrawerComponent";
import ElementComponent from "./baseComponents/element/ElementComponent";
import FooterComponent from "./complexComponents/footer/FooterComponent";
import FormComponent from "./simpleComponents/form/FormComponent";
import GridComponent from "./simpleComponents/grid/GridComponent";
import HeaderComponent from "./complexComponents/header/HeaderComponent";
import ImageComponent from "./baseComponents/image/ImageComponent";
import ListComponent from "./simpleComponents/list/ListComponent";
import NavLinksComponent from "./simpleComponents/navLinks/NavLinksComponent";
import TextComponent from "./baseComponents/text/TextComponent";

import CarouselComponent from "./complexComponents/carousel/CarouselComponent";
import CarouselMultiItemsComponent from "./complexComponents/carouselMultiItems/CarouselMultiItemsComponent";

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
