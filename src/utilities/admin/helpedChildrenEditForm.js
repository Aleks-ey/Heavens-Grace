import { uploadImageToSupabase, deleteImageFromSupabase } from "./childrenApi";

const helpedChildrenEditForm = ({
  helpedFormData,
  setHelpedFormData,
  onSubmit,
}) => {
  let uploadedFileName = null; // Track uploaded file for cleanup if needed

  return {
    type: "FormComponent",
    props: {
      fields: [
        {
          name: "name",
          label: "Name",
          props: {
            defaultValue: helpedFormData.name,
            placeholder: "Enter Name",
            onBlur: (e) => {
              setHelpedFormData((prev) => ({
                ...prev,
                name: e.target.defaultValue,
              }));
            },
          },
          labelStyle: { className: "font-bold text-left" },
          inputStyle: { className: "border rounded px-1 py-2" },
        },
        {
          name: "header",
          label: "Header",
          props: {
            defaultValue: helpedFormData.header,
            placeholder: "Enter Header",
            onBlur: (e) => {
              setHelpedFormData((prev) => ({
                ...prev,
                header: e.target.defaultValue,
              }));
            },
          },
          labelStyle: { className: "font-bold text-left" },
          inputStyle: { className: "border rounded px-1 py-2" },
        },
        // paragraph1_ header input field
        {
          name: "paragraph1_header",
          label: "Paragraph 1 Header",
          props: {
            defaultValue: helpedFormData.paragraph1_header,
            placeholder: "Enter Paragraph 1 Header. Child Name is Recommended",
            onBlur: (e) => {
              setHelpedFormData((prev) => ({
                ...prev,
                paragraph1_header: e.target.defaultValue,
              }));
            },
          },
          labelStyle: { className: "font-bold text-left" },
          inputStyle: { className: "border rounded px-1 py-2" },
        },
        // paragraph1 input field
        {
          name: "paragraph1",
          label: "Paragraph 1",
          tag: "textarea",
          props: {
            defaultValue: helpedFormData.paragraph1,
            placeholder: "Enter Paragraph 1",
            onBlur: (e) => {
              setHelpedFormData((prev) => ({
                ...prev,
                paragraph1: e.target.defaultValue,
              }));
            },
          },
          labelStyle: { className: "font-bold text-left" },
          inputStyle: { className: "border rounded px-1 py-2 min-h-28" },
        },
        // paragraph2_header input field
        {
          name: "paragraph2_header",
          label: "Paragraph 2 Header",
          props: {
            defaultValue: helpedFormData.paragraph2_header,
            placeholder:
              "Enter Paragraph 2 Header. 'After Receiving Help' is Recommended",
            onBlur: (e) => {
              setHelpedFormData((prev) => ({
                ...prev,
                paragraph2_header: e.target.defaultValue,
              }));
            },
          },
          labelStyle: { className: "font-bold text-left" },
          inputStyle: { className: "border rounded px-1 py-2" },
        },
        // paragraph2 input field
        {
          name: "paragraph2",
          label: "Paragraph 2",
          tag: "textarea",
          props: {
            defaultValue: helpedFormData.paragraph2,
            placeholder: "Enter Paragraph 2",
            onBlur: (e) => {
              setHelpedFormData((prev) => ({
                ...prev,
                paragraph2: e.target.defaultValue,
              }));
            },
          },
          labelStyle: { className: "font-bold text-left" },
          inputStyle: { className: "border rounded px-1 py-2 min-h-28" },
        },
        {
          name: "cost",
          label: "Cost",
          props: {
            defaultValue: helpedFormData.cost,
            placeholder: "Enter Cost",
            onBlur: (e) => {
              setHelpedFormData((prev) => ({
                ...prev,
                cost: e.target.defaultValue,
              }));
            },
          },
          labelStyle: { className: "font-bold text-left" },
          inputStyle: { className: "border rounded px-1 py-2" },
        },
        {
          name: "raised",
          label: "Raised",
          props: {
            defaultValue: helpedFormData.raised,
            placeholder: "Enter Amount Raised",
            onBlur: (e) => {
              setHelpedFormData((prev) => ({
                ...prev,
                raised: e.target.defaultValue,
              }));
            },
          },
          labelStyle: { className: "font-bold text-left" },
          inputStyle: { className: "border rounded px-1 py-2" },
        },
        {
          name: "remaining",
          label: "Remaining",
          props: {
            defaultValue: helpedFormData.remaining,
            placeholder: "Enter Remaining Amount",
            onBlur: (e) => {
              setHelpedFormData((prev) => ({
                ...prev,
                remaining: e.target.defaultValue,
              }));
            },
          },
          labelStyle: { className: "font-bold text-left" },
          inputStyle: { className: "border rounded px-1 py-2" },
        },
        {
          name: "image_upload",
          label: "Upload Image",
          tag: "input",
          props: {
            type: "file",
            accept: "image/*",
            onChange: async (e) => {
              const file = e.target.files[0];
              if (file) {
                try {
                  const { publicUrl, fileName } = await uploadImageToSupabase(
                    file,
                    "children-helped"
                  );
                  setHelpedFormData({
                    ...helpedFormData,
                    image_url: publicUrl,
                  });
                  uploadedFileName = fileName; // Track file for cleanup
                  alert("Image upload successful!");
                } catch (error) {
                  console.error("Image upload error:", error.message);
                  alert("Image upload failed.");
                }
              }
            },
          },
          labelStyle: { className: "font-bold text-left" },
          inputStyle: { className: "border rounded px-1 py-2" },
        },
      ],
      button: {
        text: "Save Changes",
        style: {
          className:
            "bg-main hover:bg-white text-white hover:text-main border-main font-bold py-2 px-4 rounded",
        },
      },
      onSubmit: async () => {
        const success = await onSubmit(helpedFormData);
        if (success) {
          alert("Child data updated successfully!");
        } else {
          //   alert("Failed to update child data.");
          // Cleanup uploaded image if submission fails
          if (uploadedFileName) {
            try {
              await deleteImageFromSupabase(
                uploadedFileName,
                "children-helped"
              );
              alert("Unused image deleted.");
            } catch (error) {
              console.error("Failed to delete unused image:", error.message);
            }
          }
        }
      },
      style: {
        className:
          "space-y-4 h-full md:w-full lg:w-full xl:w-full overflow-y-auto scrollbar-thin scrollbar-thumb-main",
      },
    },
  };
};

export default helpedChildrenEditForm;
