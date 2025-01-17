import { supabase } from "../../../supabaseClient";

const helpChildrenEditForm = (child) => {
  const {
    id,
    name,
    header,
    paragraph1_header,
    paragraph1,
    paragraph2_header,
    paragraph2,
    cost,
    raised,
    remaining,
    image_url,
  } = child;

  let uploadedFile = null; // Track uploaded file for cleanup if needed

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      uploadedFile = file; // Store the file for submission
    }
  };

  const onSubmit = async (formData) => {
    try {
      // Handle image upload if a new file is provided
      let newImageUrl = image_url; // Default to existing image_url
      let newFileName = null;

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

        newImageUrl = publicUrlData.publicUrl;
        newFileName = fileName;

        // Delete the old image from the bucket if it exists
        if (image_url && newFileName !== image_url) {
          const { error: deleteError } = await supabase.storage
            .from("children-help")
            .remove([image_url.split("/").pop()]);

          if (deleteError) {
            console.error("Failed to delete old image:", deleteError.message);
          }
        }
      }

      // Prepare the updated data
      const updatedFormData = {
        name: formData.name,
        header: formData.header,
        paragraph1_header: formData.paragraph1_header,
        paragraph1: formData.paragraph1,
        paragraph2_header: formData.paragraph2_header,
        paragraph2: formData.paragraph2,
        cost: formData.cost,
        raised: formData.raised,
        remaining: formData.remaining,
        image_url: newImageUrl,
        file_name: newFileName || null,
      };

      // Update the child data in Supabase
      const { error } = await supabase
        .from("children")
        .update(updatedFormData)
        .eq("id", id);

      if (error) {
        console.error("Update error:", error.message);
        alert("Failed to update child. Please try again.");
        return false; // Failure
      }

      alert("Child updated successfully.");
      window.location.reload(); // Reload the page to reflect changes
      return true; // Success
    } catch (err) {
      console.error("Error during update:", err.message);
      alert("An unexpected error occurred. Please try again.");
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
            defaultValue: name,
            placeholder: "Enter Name",
          },
          labelStyle: { className: "font-bold text-left" },
          inputStyle: { className: "border rounded px-1 py-2" },
        },
        {
          name: "header",
          label: "Header",
          props: {
            defaultValue: header,
            placeholder: "Enter Header",
          },
          labelStyle: { className: "font-bold text-left" },
          inputStyle: { className: "border rounded px-1 py-2" },
        },
        {
          name: "paragraph1_header",
          label: "Paragraph 1 Header",
          props: {
            defaultValue: paragraph1_header,
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
            defaultValue: paragraph1,
            placeholder: "Enter Paragraph 1",
          },
          labelStyle: { className: "font-bold text-left" },
          inputStyle: { className: "border rounded px-1 py-2 min-h-28" },
        },
        {
          name: "paragraph2_header",
          label: "Paragraph 2 Header",
          props: {
            defaultValue: paragraph2_header,
            placeholder:
              "Enter Paragraph 2 Header. 'Why Help is Needed' is Recommended",
          },
          labelStyle: { className: "font-bold text-left" },
          inputStyle: { className: "border rounded px-1 py-2" },
        },
        {
          name: "paragraph2",
          label: "Paragraph 2",
          tag: "textarea",
          props: {
            defaultValue: paragraph2,
            placeholder: "Enter Paragraph 2",
          },
          labelStyle: { className: "font-bold text-left" },
          inputStyle: { className: "border rounded px-1 py-2 min-h-28" },
        },
        {
          name: "cost",
          label: "Cost",
          props: {
            defaultValue: cost,
            placeholder: "Enter Cost",
          },
          labelStyle: { className: "font-bold text-left" },
          inputStyle: { className: "border rounded px-1 py-2" },
        },
        {
          name: "raised",
          label: "Raised",
          props: {
            defaultValue: raised,
            placeholder: "Enter Amount Raised",
          },
          labelStyle: { className: "font-bold text-left" },
          inputStyle: { className: "border rounded px-1 py-2" },
        },
        {
          name: "remaining",
          label: "Remaining",
          props: {
            defaultValue: remaining,
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
        text: "Save Changes",
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

export default helpChildrenEditForm;
