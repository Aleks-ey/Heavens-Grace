// import { useEffect } from "react";
import { uploadImageToSupabase, deleteImageFromSupabase } from "./boardApi";

// Edit form component
const boardEditForm = ({
  boardFormData,
  setBoardFormData,
  onSubmit,
  closeDialog,
}) => {
  let uploadedFileName = null; // To track the uploaded file name
  return {
    type: "FormComponent",
    props: {
      fields: [
        {
          name: "name",
          label: "Name",
          props: {
            value: boardFormData.name,
            placeholder: "Enter Name Here",
            onChange: (e) =>
              setBoardFormData({ ...boardFormData, name: e.target.value }),
          },
          labelStyle: {
            className: "font-bold text-left",
          },
          inputStyle: {
            className: "border border-black rounded px-1 py-2",
          },
        },
        {
          name: "position",
          label: "Position",
          props: {
            value: boardFormData.position,
            placeholder: "Enter Position Here",
            onChange: (e) =>
              setBoardFormData({ ...boardFormData, position: e.target.value }),
          },
          labelStyle: {
            className: "font-bold text-left",
          },
          inputStyle: {
            className: "border border-black rounded px-1 py-2",
          },
        },
        {
          name: "biography",
          label: "Biography",
          tag: "textarea",
          props: {
            value: boardFormData.biography,
            placeholder: "Enter Biography Here",
            onChange: (e) =>
              setBoardFormData({ ...boardFormData, biography: e.target.value }),
          },
          labelStyle: {
            className: "font-bold text-left",
          },
          inputStyle: {
            className: "border border-black rounded px-1 py-2 min-h-28",
          },
        },
        {
          name: "personal",
          label: "Personal Statement",
          tag: "textarea",
          props: {
            value: boardFormData.personal,
            placeholder: "Enter Personal Statement Here",
            onChange: (e) =>
              setBoardFormData({ ...boardFormData, personal: e.target.value }),
          },
          style: {
            className: "",
          },
          labelStyle: {
            className: "font-bold text-left",
          },
          inputStyle: {
            className: "border border-black rounded px-1 py-2 min-h-28",
          },
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
                    file
                  );
                  setBoardFormData({
                    ...boardFormData,
                    image_url: publicUrl,
                  });
                  uploadedFileName = fileName; // Track the uploaded file name
                  alert("Image upload successful!");
                } catch (error) {
                  console.error("Image upload error:", error.message);
                  alert("Image upload failed.");
                }
              }
            },
          },

          labelStyle: {
            className: "font-bold text-left",
          },
          inputStyle: {
            className: "border border-black rounded px-1 py-2",
          },
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
        const success = await onSubmit(boardFormData);
        if (success) {
          alert("Board member updated successfully!");
          closeDialog(); // Close the dialog on success
        } else {
          alert("Failed to update board member. Please try again.");
          // Delete the uploaded image if the form submission fails
          if (uploadedFileName) {
            try {
              await deleteImageFromSupabase(uploadedFileName);
              alert("Unused image deleted.");
            } catch (error) {
              console.error("Failed to delete unused image:", error.message);
            }
          }
        }
      },
      style: {
        className: "space-y-4 h-full md:w-full lg:w-full xl:w-full",
      },
    },
  };
};

export default boardEditForm;
