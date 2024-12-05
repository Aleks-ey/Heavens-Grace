// FormComponent.jsx
import PropTypes from "prop-types";
import { useState } from "react";
import { supabase } from "../../../../supabaseClient"; // Supabase client
import { twMerge } from "tailwind-merge";
import ButtonComponent from "../../baseComponents/button/ButtonComponent";

const FormComponent = ({
  fields,
  onSubmit,
  style,
  button,
  supabaseConfig,
  ...props
}) => {
  const defaultFormStyle = "flex flex-col w-full md:w-1/2 lg:w-1/3 xl:w-1/4 ";
  const customFormStyle = style ? Object.values(style).join(" ") : "";

  const defaultFieldStyle = "w-full mb-4 ";
  const defaultLabelStyle = "block text-black ";
  const defaultInputStyle =
    "block w-full p-3 rounded-lg focus:outline-gray-300 ";

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
    <form
      onSubmit={handleSubmit}
      className={twMerge(defaultFormStyle, customFormStyle)}
      {...props}
    >
      {fields.map((field, index) => {
        const FieldTag = field.tag || "input";
        const commonProps = {
          name: field.name,
          value: formData[field.name] || "",
          onChange: handleChange,
          ...field.props,
        };
        const customFieldStyle = field.style
          ? Object.values(field.style).join(" ")
          : "";
        const customLabelStyle = field.labelStyle
          ? Object.values(field.labelStyle).join(" ")
          : "";
        const customInputStyle = field.inputStyle
          ? Object.values(field.inputStyle).join(" ")
          : "";

        return (
          <div
            key={index}
            className={twMerge(defaultFieldStyle, customFieldStyle)}
          >
            {field.label && (
              <label
                htmlFor={field.name}
                className={twMerge(defaultLabelStyle, customLabelStyle)}
              >
                {field.label}
              </label>
            )}
            {FieldTag === "textarea" ? (
              <textarea
                className={twMerge(defaultInputStyle, customInputStyle)}
                {...commonProps}
              />
            ) : (
              <FieldTag
                className={twMerge(defaultInputStyle, customInputStyle)}
                {...commonProps}
              />
            )}
          </div>
        );
      })}
      {/* ButtonComponent instead of native button */}
      <ButtonComponent type="submit" {...button}>
        Submit
      </ButtonComponent>
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
      labelStyle: PropTypes.shape({
        className: PropTypes.string,
      }),
      inputStyle: PropTypes.shape({
        className: PropTypes.string,
      }),
      props: PropTypes.object,
    })
  ).isRequired,
  onSubmit: PropTypes.func,
  style: PropTypes.shape({
    className: PropTypes.string,
  }),
  button: PropTypes.object,
  supabaseConfig: PropTypes.shape({
    table: PropTypes.string.isRequired,
  }),
};

export default FormComponent;
