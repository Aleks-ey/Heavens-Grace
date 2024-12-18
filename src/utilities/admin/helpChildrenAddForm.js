import { uploadImageToSupabase, deleteImageFromSupabase } from "./childrenApi";

const helpChildrenAddForm = ({
  helpFormData,
  setHelpFormData,
  onSubmit,
  closeDialog,
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
            value: helpFormData.name,
            placeholder: "Enter Name",
            onChange: (e) =>
              setHelpFormData({ ...helpFormData, name: e.target.value }),
          },
          labelStyle: { className: "font-bold text-left" },
          inputStyle: { className: "border rounded px-1 py-2" },
        },
        {
          name: "description",
          label: "Description",
          tag: "textarea",
          props: {
            value: helpFormData.description,
            placeholder: "Enter Description",
            onChange: (e) =>
              setHelpFormData({
                ...helpFormData,
                description: e.target.value,
              }),
          },
          labelStyle: { className: "font-bold text-left" },
          inputStyle: { className: "border rounded px-1 py-2 min-h-28" },
        },
        {
          name: "description2",
          label: "Description",
          tag: "textarea",
          props: {
            value: helpFormData.description2,
            placeholder: "Enter Description",
            onChange: (e) =>
              setHelpFormData({
                ...helpFormData,
                description2: e.target.value,
              }),
          },
          labelStyle: { className: "font-bold text-left" },
          inputStyle: { className: "border rounded px-1 py-2 min-h-28" },
        },
        {
          name: "cost",
          label: "Cost",
          props: {
            value: helpFormData.cost,
            placeholder: "Enter Cost",
            onChange: (e) =>
              setHelpFormData({ ...helpFormData, cost: e.target.value }),
          },
          labelStyle: { className: "font-bold text-left" },
          inputStyle: { className: "border rounded px-1 py-2" },
        },
        {
          name: "raised",
          label: "Raised",
          props: {
            value: helpFormData.raised,
            placeholder: "Enter Amount Raised",
            onChange: (e) =>
              setHelpFormData({ ...helpFormData, raised: e.target.value }),
          },
          labelStyle: { className: "font-bold text-left" },
          inputStyle: { className: "border rounded px-1 py-2" },
        },
        {
          name: "remaining",
          label: "Remaining",
          props: {
            value: helpFormData.remaining,
            placeholder: "Enter Remaining Amount",
            onChange: (e) =>
              setHelpFormData({ ...helpFormData, remaining: e.target.value }),
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
                    "children-help"
                  );
                  setHelpFormData({
                    ...helpFormData,
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
      onSubmit: async () => {
        const success = await onSubmit({
          ...helpFormData,
          type: "help", // Explicitly set type
        });
        if (success) {
          alert("Child added successfully!");
          setHelpFormData({
            name: "",
            description: "",
            description2: "",
            cost: "",
            raised: "",
            remaining: "",
            image_url: "",
          }); // Reset form
          closeDialog();
        } else {
          alert("Failed to add child.");
          // Cleanup uploaded image if submission fails
          if (uploadedFileName) {
            try {
              await deleteImageFromSupabase(uploadedFileName, "children-help");
              alert("Unused image deleted.");
            } catch (error) {
              console.error("Failed to delete unused image:", error.message);
            }
          }
        }
      },
      button: {
        text: "Add Child",
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

export default helpChildrenAddForm;
