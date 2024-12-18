import { supabase } from "../../supabaseClient";

// Upload an image to the specified bucket
export const uploadImageToSupabase = async (file, bucket) => {
  if (!["children-helped", "children-help"].includes(bucket)) {
    throw new Error("Invalid bucket specified.");
  }

  const fileName = `${Date.now()}_${file.name}`;
  const { error } = await supabase.storage.from(bucket).upload(fileName, file);

  if (error) {
    console.error(`Image upload error in bucket ${bucket}:`, error.message);
    throw new Error("Image upload failed.");
  }

  const { data: publicData } = supabase.storage
    .from(bucket)
    .getPublicUrl(fileName);

  return { publicUrl: publicData.publicUrl, fileName };
};

// Delete an image from the specified bucket
export const deleteImageFromSupabase = async (fileName, bucket) => {
  if (!["children-helped", "children-help"].includes(bucket)) {
    throw new Error("Invalid bucket specified.");
  }

  const { error } = await supabase.storage.from(bucket).remove([fileName]);
  if (error) {
    console.error(`Image deletion error in bucket ${bucket}:`, error.message);
    throw new Error("Failed to delete image.");
  }
  return true;
};

// Add a new child record to the database
export const addChild = async (childData) => {
  const { data, error } = await supabase.from("children").insert([childData]);
  if (error) {
    console.error("Add child error:", error.message);
    throw new Error("Failed to add child.");
  }
  return data;
};

// Edit an existing child record
export const editChild = async (id, updatedData) => {
  const { data, error } = await supabase
    .from("children")
    .update(updatedData)
    .eq("id", id);
  if (error) throw error;
  return data;
};

// Delete a child record from the database and remove their image
export const deleteChild = async (id, bucket) => {
  // Fetch the child's data to get the image file name
  const { data, error } = await supabase
    .from("children")
    .select("image_url")
    .eq("id", id)
    .single();

  if (error) {
    console.error("Fetch child error:", error.message);
    throw new Error("Failed to fetch child data for deletion.");
  }

  // Extract file name from the image URL
  const fileName = data.image_url.split("/").pop();

  // Delete the image from the bucket
  await deleteImageFromSupabase(fileName, bucket);

  // Delete the child record from the database
  const { error: deleteError } = await supabase
    .from("children")
    .delete()
    .eq("id", id);
  if (deleteError) {
    console.error("Delete child error:", deleteError.message);
    throw new Error("Failed to delete child record.");
  }

  return true;
};
