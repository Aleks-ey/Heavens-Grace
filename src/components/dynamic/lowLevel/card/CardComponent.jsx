import PropTypes from "prop-types";
import ContainerComponent from "../container/ContainerComponent";
import ComponentRenderer from "../../ComponentRenderer";

const CardComponent = ({ style, topContainer, bottomContainer }) => {
  // Default styles for the card and inner containers
  const defaultCardStyle = "p-4 bg-white shadow-lg rounded-lg flex flex-col";
  const cardStyle = style ? Object.values(style).join(" ") : "";

  const defaultTopContainerStyle = "p-4 border-b";
  const topContainerStyle = topContainer?.style
    ? Object.values(topContainer.style).join(" ")
    : "";

  const defaultBottomContainerStyle = "p-4";
  const bottomContainerStyle = bottomContainer?.style
    ? Object.values(bottomContainer.style).join(" ")
    : "";

  return (
    <ContainerComponent
      style={{ className: defaultCardStyle + " " + cardStyle }}
    >
      {/* Top Container */}
      <ContainerComponent
        style={{
          className: defaultTopContainerStyle + " " + topContainerStyle,
        }}
      >
        {topContainer?.children?.map((childConfig, index) => (
          <ComponentRenderer key={index} config={childConfig} />
        ))}
      </ContainerComponent>

      {/* Bottom Container */}
      <ContainerComponent
        style={{
          className: defaultBottomContainerStyle + " " + bottomContainerStyle,
        }}
      >
        {bottomContainer?.children?.map((childConfig, index) => (
          <ComponentRenderer key={index} config={childConfig} />
        ))}
      </ContainerComponent>
    </ContainerComponent>
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
