import { supabase } from "../../../supabaseClient";

const helpChildrenAddForm = () => {
  let uploadedFile = null; // Track the uploaded file for cleanup if needed

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      uploadedFile = file; // Store the file for submission
    }
  };

  const onSubmit = async (formData) => {
    try {
      // Handle image upload
      let image_url = null;
      let file_name = null;

      if (uploadedFile) {
        const fileName = `${Date.now()}_${uploadedFile.name}`;

        // Upload the file to Supabase storage
        const { error: uploadError } = await supabase.storage
          .from("children-help")
          .upload(fileName, uploadedFile);

        if (uploadError) {
          console.error("Image upload error:", uploadError.message);
          alert("Image upload failed. Please try again.");
          return false;
        }

        // Retrieve the public URL of the uploaded image
        const { data: publicUrlData, error: urlError } = supabase.storage
          .from("children-help")
          .getPublicUrl(fileName);

        if (urlError) {
          console.error("Public URL retrieval error:", urlError.message);
          alert("Failed to retrieve public URL for the uploaded image.");
          return false;
        }

        image_url = publicUrlData.publicUrl;
        file_name = fileName;
      }

      // Prepare data to insert into the database
      const dataToInsert = {
        ...formData,
        image_url,
        file_name,
        type: "help", // Explicitly set type
      };

      delete dataToInsert.image_upload; // Remove the `image_upload` field

      const { error } = await supabase.from("children").insert([dataToInsert]);

      if (error) {
        console.error("Error adding new help child:", error.message);
        alert("Failed to add child. Please try again.");

        // Cleanup uploaded image if insertion fails
        if (uploadedFile) {
          const { error: cleanupError } = await supabase.storage
            .from("children-help")
            .remove([file_name]);
          if (cleanupError) {
            console.error(
              "Failed to delete unused image:",
              cleanupError.message
            );
          }
        }

        return false;
      }

      alert("Child added successfully.");
      window.location.reload(); // Reload the page to reflect changes
      return true; // Success
    } catch (error) {
      console.error("Error adding new help child:", error.message);
      alert("An unexpected error occurred. Please try again.");
      return false;
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
        {
          name: "header",
          label: "Header",
          props: {
            placeholder: "Enter Header. 'Children Needing Help' is Recommended",
          },
          labelStyle: { className: "font-bold text-left" },
          inputStyle: { className: "border rounded px-1 py-2" },
        },
        {
          name: "paragraph1_header",
          label: "Paragraph 1 Header",
          props: {
            placeholder: "Enter Paragraph 1 Header. Child Name is Recommended",
          },
          labelStyle: { className: "font-bold text-left" },
          inputStyle: { className: "border rounded px-1 py-2" },
        },
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
        {
          name: "image_upload",
          label: "Upload Image",
          tag: "input",
          props: {
            type: "file",
            accept: "image/*",
            onChange: handleFileChange, // Handle file change
          },
          labelStyle: { className: "font-bold text-left" },
          inputStyle: { className: "border rounded px-1 py-2" },
        },
      ],
      button: {
        text: "Add Child",
        style: {
          className:
            "bg-main hover:bg-white text-white hover:text-main border-main font-bold py-2 px-4 rounded",
        },
      },
      onSubmit,
      style: {
        className:
          "space-y-4 h-full md:w-full lg:w-full xl:w-full overflow-y-auto scrollbar-thin scrollbar-thumb-main",
      },
    },
  };
};

export default helpChildrenAddForm;
