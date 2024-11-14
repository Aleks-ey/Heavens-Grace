import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";
import ElementComponent from "../../baseComponents/element/ElementComponent";
import ComponentRenderer from "../../ComponentRenderer";

const CardComponent = ({ style, topContainer, bottomContainer }) => {
  // Default styles for the card and inner containers
  const defaultCardStyle =
    "w-auto h-auto p-4 bg-white shadow-lg rounded-lg flex flex-col ";
  const cardStyle = style ? Object.values(style).join(" ") : "";

  const defaultTopContainerStyle = "rounded-t-lg h-1/2 overflow-none ";
  const topContainerStyle = topContainer?.style
    ? Object.values(topContainer.style).join(" ")
    : "";

  const defaultBottomContainerStyle = "rounded-b-lg h-1/2 overflow-none ";
  const bottomContainerStyle = bottomContainer?.style
    ? Object.values(bottomContainer.style).join(" ")
    : "";

  return (
    <ElementComponent
      style={{ className: twMerge(defaultCardStyle + cardStyle) }}
    >
      {/* Top Container */}
      <ElementComponent
        style={{
          className: twMerge(defaultTopContainerStyle + topContainerStyle),
        }}
      >
        {topContainer?.children?.map((childConfig, index) => (
          <ComponentRenderer key={index} config={childConfig} />
        ))}
      </ElementComponent>

      {/* Bottom Container */}
      <ElementComponent
        style={{
          className: twMerge(
            defaultBottomContainerStyle + bottomContainerStyle
          ),
        }}
      >
        {bottomContainer?.children?.map((childConfig, index) => (
          <ComponentRenderer key={index} config={childConfig} />
        ))}
      </ElementComponent>
    </ElementComponent>
  );
};

CardComponent.propTypes = {
  style: PropTypes.shape({
    className: PropTypes.string,
  }),
  topContainer: PropTypes.shape({
    style: PropTypes.shape({
      className: PropTypes.string,
    }),
    children: PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.string.isRequired,
        props: PropTypes.object,
        children: PropTypes.array,
      })
    ),
  }),
  bottomContainer: PropTypes.shape({
    style: PropTypes.shape({
      className: PropTypes.string,
    }),
    children: PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.string.isRequired,
        props: PropTypes.object,
        children: PropTypes.array,
      })
    ),
  }),
};

export default CardComponent;
