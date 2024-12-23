import { supabase } from "../../../supabaseClient";

// Add form component
const boardAddForm = () => {
  let uploadedFileName = null; // Track uploaded image for cleanup if needed
  let uploadedFile = null; // Track the uploaded file

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
        file_name = `${Date.now()}_${uploadedFile.name}`; // Generate a unique file name

        // Upload the file to Supabase storage
        const { error: uploadError } = await supabase.storage
          .from("board")
          .upload(file_name, uploadedFile);

        if (uploadError) {
          console.error("Image upload error:", uploadError.message);
          alert("Image upload failed. Please try again.");
          return false; // Return false on upload failure
        }

        // Retrieve the public URL of the uploaded image
        const { data: publicUrlData, error: urlError } = supabase.storage
          .from("board")
          .getPublicUrl(file_name);

        if (urlError) {
          console.error("Public URL retrieval error:", urlError.message);
          alert("Failed to retrieve public URL for the uploaded image.");
          return false; // Return false on URL retrieval failure
        }

        uploadedFileName = file_name; // Store uploaded file name for cleanup
        image_url = publicUrlData.publicUrl; // Store the public URL
      }

      // Prepare data to insert into the database
      const dataToInsert = {
        ...formData,
        image_url: image_url || null,
        file_name: file_name || null,
      };

      delete dataToInsert.image_upload; // Remove the `image_upload` field

      // Directly insert the new member data into Supabase
      const { data, error } = await supabase
        .from("board")
        .insert([dataToInsert]);

      if (error) {
        console.error("Supabase insert error:", error.message);
        if (uploadedFileName) {
          const { error } = await supabase.storage
            .from("board")
            .remove([uploadedFileName]);
          if (error) throw error;
        }
        return false; // Return false on error
      }

      if (data) {
        console.log("New board member added:", data);
        alert("Board member added successfully!");
        window.location.reload(); // Reload the page to reflect changes
        return true; // Return true on success
      }

      if (data === null) {
        console.log("New board member added:", data);
        alert("Board member added successfully!");
        window.location.reload(); // Reload the page to reflect changes
        return true; // Return true on success
      }

      console.log("Unexpected result:", data);
      return false; // Handle unexpected cases
    } catch (error) {
      console.error("Error adding new board member:", error);
      return false; // Return false on exception
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
            placeholder: "Enter Name Here",
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
            onChange: handleFileChange, // Directly handle file input
          },
          labelStyle: { className: "font-bold text-left" },
          inputStyle: { className: "border border-black rounded px-1 py-2" },
        },
      ],
      onSubmit,
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
