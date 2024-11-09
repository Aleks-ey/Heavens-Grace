// src/supabaseClient.js
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Function to upload an image
export const uploadImage = async (file, filePath) => {
  const { data, error } = await supabase.storage
    .from("your-bucket-name")
    .upload(filePath, file);
  if (error) throw new Error("Error uploading image:", error);
  return data?.path; // Unique identifier for the uploaded image
};
