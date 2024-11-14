// FormComponent.jsx
import PropTypes from "prop-types";
import { useState } from "react";
import { supabase } from "../../../../supabaseClient"; // Supabase client

const FormComponent = ({
  fields,
  onSubmit,
  style,
  supabaseConfig,
  ...props
}) => {
  // Initialize form state based on field names
  const [formData, setFormData] = useState(
    fields.reduce((acc, field) => {
      acc[field.name] = field.props?.defaultValue || "";
      return acc;
    }, {})
  );

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // If Supabase config is provided, save the form data to Supabase
    if (supabaseConfig) {
      const { table } = supabaseConfig;
      console.log(formData.name);
      const { error } = await supabase.from(table).insert([
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
      ]);
      if (error) {
        console.error("Supabase insert error:", error);
        alert(
          "Form submission failed. If error persists, please contact support."
        );
        return;
      }
      alert("Form submitted successfully!");
    }

    // Call the custom onSubmit handler if provided
    if (onSubmit) {
      onSubmit(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={style?.className} {...props}>
      {fields.map((field, index) => {
        const FieldTag = field.tag || "input";
        const commonProps = {
          name: field.name,
          value: formData[field.name] || "",
          onChange: handleChange,
          className: field.style?.className,
          ...field.props,
        };

        return (
          <div key={index} className="mb-4">
            {field.label && (
              <label htmlFor={field.name} className="block text-gray-700">
                {field.label}
              </label>
            )}
            {FieldTag === "textarea" ? (
              <textarea {...commonProps} />
            ) : (
              <FieldTag {...commonProps} />
            )}
          </div>
        );
      })}
      <button type="submit" className="p-2 bg-blue-500 text-white rounded">
        Submit
      </button>
    </form>
  );
};

FormComponent.propTypes = {
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      tag: PropTypes.string,
      name: PropTypes.string.isRequired,
      label: PropTypes.string,
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
  supabaseConfig: PropTypes.shape({
    table: PropTypes.string.isRequired,
  }),
};

export default FormComponent;
