// import { useEffect } from "react";
import { supabase } from "../../../supabaseClient";

// Edit form component
const boardEditForm = (member) => {
  const { id, name, position, biography, personal, image_url, file_name } =
    member;
  let uploadedFile = null; // Track the uploaded file

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
      let newFileName = file_name; // Default to existing file_name

      if (uploadedFile) {
        // Generate a unique file name
        const fileName = `${Date.now()}_${uploadedFile.name}`;

        // Upload the file to Supabase storage
        const { error: uploadError } = await supabase.storage
          .from("board")
          .upload(fileName, uploadedFile);

        if (uploadError) {
          console.error("Image upload error:", uploadError.message);
          alert("Image upload failed. Please try again.");
          return false; // Return false on upload failure
        }

        // Retrieve the public URL of the uploaded image
        const { data: publicUrlData, error: urlError } = supabase.storage
          .from("board")
          .getPublicUrl(fileName);

        if (urlError) {
          console.error("Public URL retrieval error:", urlError.message);
          alert("Failed to retrieve public URL for the uploaded image.");
          return false; // Return false on URL retrieval failure
        }

        newImageUrl = publicUrlData.publicUrl; // Update image_url
        newFileName = fileName; // Update file_name

        // Delete the old image from the bucket if it exists
        if (image_url && file_name) {
          const { error: deleteError } = await supabase.storage
            .from("board")
            .remove([file_name]);

          if (deleteError) {
            console.error("Failed to delete old image:", deleteError.message);
            alert("Failed to delete the old image.");
          }
        }
      }

      // Prepare the updated data
      const updatedData = {
        name: formData.name,
        position: formData.position,
        biography: formData.biography,
        personal: formData.personal,
        image_url: newImageUrl,
        file_name: newFileName,
      };

      // Update the board member data in Supabase
      const { error } = await supabase
        .from("board")
        .update(updatedData)
        .eq("id", id);

      if (error) {
        console.error("Error updating member:", error.message);
        alert("Failed to update member. Please try again.");
        // If a new image was uploaded, delete it from the bucket
        if (uploadedFile) {
          const { error } = await supabase.storage
            .from("board")
            .remove([uploadedFile]);
          if (error) throw error;
        }
        return false; // Failure
      }

      alert("Member updated successfully.");
      window.location.reload(); // Reload the page to reflect changes
      return true; // Success
    } catch (error) {
      console.error("Error updating board member:", error.message);
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
            placeholder: "Enter Name Here",
          },
          labelStyle: { className: "font-bold text-left" },
          inputStyle: { className: "border border-black rounded px-1 py-2" },
        },
        {
          name: "position",
          label: "Position",
          props: {
            defaultValue: position,
            placeholder: "Enter Position Here",
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
            defaultValue: biography || "",
            placeholder: "Enter Biography Here",
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
            defaultValue: personal || "",
            placeholder: "Enter Personal Statement Here",
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
            onChange: handleFileChange,
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
      onSubmit,
      style: {
        className: "space-y-4 h-full md:w-full lg:w-full xl:w-full",
      },
    },
  };
};

export default boardEditForm;
