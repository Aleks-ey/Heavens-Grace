import { supabase } from "../../supabaseClient";
import { uploadImageToSupabase, deleteImageFromSupabase } from "./childrenApi";

const helpChildrenAddForm = () => {
  let uploadedFileName = null; // Track uploaded file for cleanup if needed

  const onSubmit = async (formData) => {
    // seperate image_upload field from formData
    const { image_upload, ...filteredFormData } = formData;
    console.log(image_upload);

    try {
      const { data, error } = await supabase.from("children").insert([
        {
          ...filteredFormData,
          type: "help", // Explicitly set type
        },
      ]);

      if (error) {
        console.error("Error adding new help child:", error.message);
        alert("Failed to add child. Please try again.");
        // Cleanup uploaded image if submission fails
        if (uploadedFileName) {
          try {
            await deleteImageFromSupabase(uploadedFileName, "children-help");
            alert("Unused image deleted.");
          } catch (error) {
            console.error("Failed to delete unused image:", error.message);
          }
        }
        return false; // Failure
      }

      if (data === null) {
        alert("Child needing help added successfully.");
        window.location.reload(); // Reload the page to reflect changes
        return true; // Success
      }

      console.log("Unexpected result:", data);
      return false; // Handle unexpected cases
    } catch (error) {
      console.error("Error adding new help child:", error);
      return false; // Failure
    }
  };

  return {
    type: "FormComponent",
    props: {
      fields: [
        {
          name: "name",
          label: "Name",
          props: {
            placeholder: "Enter Name",
          },
          labelStyle: { className: "font-bold text-left" },
          inputStyle: { className: "border rounded px-1 py-2" },
        },
        // header input field
        {
          name: "header",
          label: "Header",
          props: {
            placeholder: "Enter Header. 'Children Needing Help' is Recommended",
          },
          labelStyle: { className: "font-bold text-left" },
          inputStyle: { className: "border rounded px-1 py-2" },
        },
        // paragraph1_ header input field
        {
          name: "paragraph1_header",
          label: "Paragraph 1 Header",
          props: {
            placeholder: "Enter Paragraph 1 Header. Child Name is Recommended",
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
            placeholder: "Enter Paragraph 1",
          },
          labelStyle: { className: "font-bold text-left" },
          inputStyle: { className: "border rounded px-1 py-2 min-h-28" },
        },
        // paragraph2_header input field
        {
          name: "paragraph2_header",
          label: "Paragraph 2 Header",
          props: {
            placeholder:
              "Enter Paragraph 2 Header. 'Why Help is Needed:' is Recommended",
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
            placeholder: "Enter Paragraph 2",
          },
          labelStyle: { className: "font-bold text-left" },
          inputStyle: { className: "border rounded px-1 py-2 min-h-28" },
        },
        {
          name: "cost",
          label: "Cost",
          props: {
            placeholder: "Enter Cost",
          },
          labelStyle: { className: "font-bold text-left" },
          inputStyle: { className: "border rounded px-1 py-2" },
        },
        {
          name: "raised",
          label: "Raised",
          props: {
            placeholder: "Enter Amount Raised",
          },
          labelStyle: { className: "font-bold text-left" },
          inputStyle: { className: "border rounded px-1 py-2" },
        },
        {
          name: "remaining",
          label: "Remaining",
          props: {
            placeholder: "Enter Remaining Amount",
          },
          labelStyle: { className: "font-bold text-left" },
          inputStyle: { className: "border rounded px-1 py-2" },
        },
        // {
        //   name: "image_upload",
        //   label: "Upload Image",
        //   tag: "input",
        //   props: {
        //     type: "file",
        //     accept: "image/*",
        //     onChange: async (e) => {
        //       const file = e.target.files[0];
        //       if (file) {
        //         try {
        //           const { publicUrl, fileName } = await uploadImageToSupabase(
        //             file,
        //             "children-help"
        //           );
        //         //   setHelpFormData({
        //         //     ...helpFormData,
        //         //     image_url: publicUrl,
        //         //   });
        //             helpFormData.image_url = publicUrl;
        //           uploadedFileName = fileName; // Track file for cleanup
        //           alert("Image upload successful!");
        //         } catch (error) {
        //           console.error("Image upload error:", error.message);
        //           alert("Image upload failed.");
        //         }
        //       }
        //     },
        //   },
        //   labelStyle: { className: "font-bold text-left" },
        //   inputStyle: { className: "border rounded px-1 py-2" },
        // },
        {
          name: "image_upload", // Virtual field for file upload
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

                  // Programmatically update `image_url` and `file_name` fields
                  const form = e.target.form;

                  // Update `image_url`
                  const imageUrlField = form.elements["image_url"];
                  imageUrlField.value = publicUrl;
                  imageUrlField.dispatchEvent(
                    new Event("input", { bubbles: true })
                  );

                  // Update `file_name`
                  const fileNameField = form.elements["file_name"];
                  fileNameField.value = fileName;
                  fileNameField.dispatchEvent(
                    new Event("input", { bubbles: true })
                  );

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
        {
          name: "image_url", // Field for storing the uploaded image URL
          label: "Image URL",
          tag: "input",
          props: {
            type: "hidden", // Hidden field to store `image_url`
          },
        },
        {
          name: "file_name", // Field to display the uploaded file name
          label: "File Name",
          tag: "input",
          props: {
            type: "text",
            readOnly: true, // Make this field read-only
            placeholder: "No file uploaded", // Default placeholder text
          },
          labelStyle: { className: "font-bold text-left" },
          inputStyle: { className: "text-gray-600 italic" },
        },
      ],
      //   onSubmit: async () => {
      //     const success = await onSubmit({
      //       ...helpFormData,
      //       type: "help", // Explicitly set type
      //     });
      //     if (success) {
      //       console.log("Child added successfully. helpChildrenAddForm.js");
      //     } else {
      //       console.log("Child not added successfully. helpChildrenAddForm.js");
      //       // Cleanup uploaded image if submission fails
      //       if (uploadedFileName) {
      //         try {
      //           await deleteImageFromSupabase(uploadedFileName, "children-help");
      //           alert("Unused image deleted.");
      //         } catch (error) {
      //           console.error("Failed to delete unused image:", error.message);
      //         }
      //       }
      //     }
      //   },
      onSubmit,
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
