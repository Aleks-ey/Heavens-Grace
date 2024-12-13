import { supabase } from "../../supabaseClient";

// Add a new row to the 'children' table
export const addChild = async (childData) => {
  const { data, error } = await supabase.from("children").insert([childData]);
  if (error) {
    console.error("Error adding child:", error);
    return null;
  }
  return data;
};

// Update a row in the 'children' table
export const editChild = async (id, updatedData) => {
  const { data, error } = await supabase
    .from("children")
    .update(updatedData)
    .eq("id", id);
  if (error) {
    console.error("Error editing child:", error);
    return null;
  }
  return data;
};

// Delete a row from the 'children' table
export const deleteChild = async (id) => {
  const { data, error } = await supabase.from("children").delete().eq("id", id);
  if (error) {
    console.error("Error deleting child:", error);
    return null;
  }
  return data;
};
