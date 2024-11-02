import Element from "../element/ElementComponent";
import PropTypes from "prop-types";

const FormComponent = ({ fields, onSubmit, style, ...props }) => {
  return (
    <Element
      element={{
        tag: "form",
        style,
        props: { ...props, onSubmit },
      }}
    >
      {fields.map((field, index) => (
        <Element
          key={index}
          element={{
            tag: field.tag || "input",
            style: field.style || {},
            props: { ...field.props, name: field.name },
          }}
        />
      ))}
    </Element>
  );
};

FormComponent.propTypes = {
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      tag: PropTypes.string,
      name: PropTypes.string.isRequired,
      style: PropTypes.shape({
        className: PropTypes.string,
      }),
      props: PropTypes.object,
    })
  ).isRequired,
  onSubmit: PropTypes.func,
  style: PropTypes.shape({
    className: PropTypes.string,
  }),
};

export default FormComponent;
