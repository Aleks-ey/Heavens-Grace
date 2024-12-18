import { uploadImageToSupabase } from "./boardApi";

// Add form component
const boardAddForm = ({
  boardFormData,
  setBoardFormData,
  onSubmit,
  closeDialog,
}) => {
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
                  const uploadedUrl = await uploadImageToSupabase(file);
                  if (uploadedUrl) {
                    alert("Image upload successful!");
                    setBoardFormData({
                      ...boardFormData,
                      image_url: uploadedUrl,
                    });
                  } else {
                    alert("Image upload failed!");
                  }
                } catch (error) {
                  console.error("Error uploading image:", error);
                  alert("Image upload failed!");
                }
              }
            },
            // onChange: async (e) => {
            //   const file = e.target.files[0];
            //   if (file) {
            //     const labelElement = e.target.nextSibling; // Assuming a sibling label
            //     labelElement.textContent = file.name; // Update label with filename
            //     try {
            //       const uploadedUrl = await uploadImageToSupabase(file);
            //       if (uploadedUrl) {
            //         alert("Image upload successful!");
            //         setBoardFormData({
            //           ...boardFormData,
            //           image_url: uploadedUrl,
            //         });
            //       } else {
            //         alert("Image upload failed!");
            //       }
            //     } catch (error) {
            //       console.error("Error uploading image:", error);
            //       alert("Image upload failed!");
            //     }
            //   }
            // },
          },
          labelStyle: {
            className: "font-bold text-left",
          },
          inputStyle: {
            className: "border border-black rounded px-1 py-2",
          },
        },
      ],
      onSubmit: async () => {
        const success = await onSubmit(boardFormData);
        if (success) {
          alert("Board member added successfully!");
          setBoardFormData({
            name: "",
            position: "",
            biography: "",
            personal: "",
            image_url: "",
          }); // Clear the form
          closeDialog(); // Close the dialog on success
        } else {
          alert("Failed to add board member. Please try again.");
        }
      },
      button: {
        text: "Add Member",
        style: {
          className:
            "bg-main hover:bg-white text-white hover:text-main border-main font-bold py-2 px-4 rounded",
        },
      },
      style: {
        className: "space-y-4 h-full md:w-full lg:w-full xl:w-full",
      },
    },
  };
};

export default boardAddForm;
