import { supabase } from "../../../supabaseClient";

const donateEditForm = (section) => {
  const { id, section_title, paragraph1, list, paragraph2 } = section;

  const onSubmit = async (formData) => {
    // Prepare the updated data
    const updatedData = {
      section_title: formData.section_title,
      paragraph1: formData.paragraph1,
      list: formData.list ? JSON.parse(formData.list) : null,
      paragraph2: formData.paragraph2,
    };

    try {
      const { error } = await supabase
        .from("donate")
        .update(updatedData)
        .eq("id", id);

      if (error) {
        console.error("Error updating donate section:", error.message);
        alert("Failed to update section. Please try again.");
        return false; // Failure
      }

      alert("Section updated successfully.");
      window.location.reload(); // Reload the page to reflect changes
      return true; // Success
    } catch (error) {
      console.error("Error updating donate section:", error.message);
      return false; // Failure
    }
  };

  return {
    type: "FormComponent",
    props: {
      fields: [
        {
          name: "section_title",
          label: "Section Title",
          props: {
            defaultValue: section_title,
            placeholder: "Enter the section title...",
          },
          labelStyle: { className: "font-bold text-left" },
          inputStyle: { className: "border rounded px-1 py-2 bg-gray-100" },
        },
        {
          name: "paragraph1",
          label: "Paragraph 1",
          tag: "textarea",
          props: {
            defaultValue: paragraph1 || "",
            placeholder: "Enter the first paragraph...",
          },
          labelStyle: { className: "font-bold text-left" },
          inputStyle: { className: "border rounded px-1 py-2 min-h-28" },
        },
        {
          name: "list",
          label: "List Items (['like this'], ['item1'])",
          tag: "textarea",
          props: {
            defaultValue: list ? JSON.stringify(list, null, 2) : "",
            placeholder:
              "Enter list items like this: (e.g., ['item1', 'item2'])",
          },
          labelStyle: { className: "font-bold text-left" },
          inputStyle: { className: "border rounded px-1 py-2 min-h-28" },
        },
        {
          name: "paragraph2",
          label: "Paragraph 2",
          tag: "textarea",
          props: {
            defaultValue: paragraph2 || "",
            placeholder: "Enter the second paragraph...",
          },
          labelStyle: { className: "font-bold text-left" },
          inputStyle: { className: "border rounded px-1 py-2 min-h-28" },
        },
      ],
      onSubmit,
      button: {
        text: "Save Changes",
        style: {
          className:
            "bg-main hover:bg-white text-white hover:text-main border-main font-bold py-2 px-4 rounded",
        },
      },
      style: {
        className:
          "space-y-4 h-full md:w-full lg:w-full xl:w-full overflow-y-auto scrollbar-thin scrollbar-thumb-main",
      },
    },
  };
};

export default donateEditForm;
