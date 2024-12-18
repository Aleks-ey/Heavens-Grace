import { uploadImageToSupabase, deleteImageFromSupabase } from "./childrenApi";

const helpedChildrenEditForm = ({
  helpedFormData,
  setHelpedFormData,
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
            value: helpedFormData.name,
            placeholder: "Enter Name",
            onChange: (e) =>
              setHelpedFormData({ ...helpedFormData, name: e.target.value }),
          },
          labelStyle: { className: "font-bold text-left" },
          inputStyle: { className: "border rounded px-1 py-2" },
        },
        {
          name: "description",
          label: "Description",
          tag: "textarea",
          props: {
            value: helpedFormData.description,
            placeholder: "Enter Description",
            onChange: (e) =>
              setHelpedFormData({
                ...helpedFormData,
                description: e.target.value,
              }),
          },
          labelStyle: { className: "font-bold text-left" },
          inputStyle: { className: "border rounded px-1 py-2 min-h-28" },
        },
        {
          name: "cost",
          label: "Cost",
          props: {
            value: helpedFormData.cost,
            placeholder: "Enter Cost",
            onChange: (e) =>
              setHelpedFormData({ ...helpedFormData, cost: e.target.value }),
          },
          labelStyle: { className: "font-bold text-left" },
          inputStyle: { className: "border rounded px-1 py-2" },
        },
        {
          name: "raised",
          label: "Raised",
          props: {
            value: helpedFormData.raised,
            placeholder: "Enter Amount Raised",
            onChange: (e) =>
              setHelpedFormData({ ...helpedFormData, raised: e.target.value }),
          },
          labelStyle: { className: "font-bold text-left" },
          inputStyle: { className: "border rounded px-1 py-2" },
        },
        {
          name: "remaining",
          label: "Remaining",
          props: {
            value: helpedFormData.remaining,
            placeholder: "Enter Remaining Amount",
            onChange: (e) =>
              setHelpedFormData({
                ...helpedFormData,
                remaining: e.target.value,
              }),
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
          closeDialog();
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
      style: { className: "space-y-4 h-full md:w-full lg:w-full xl:w-full" },
    },
  };
};

export default helpedChildrenEditForm;
