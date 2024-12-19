import { supabase } from "../../supabaseClient";

// export const addBoardMember = async (memberData) => {
//   const { data, error } = await supabase.from("board").insert([memberData]);
//   if (error) {
//     console.error("Add board member error:", error.message);
//     throw new Error(error.message);
//   }
//   return data;
// };

export const editBoardMember = async (id, updatedData) => {
  const { data, error } = await supabase
    .from("board")
    .update(updatedData)
    .eq("id", id);
  if (error) throw error;
  return data;
};

export const deleteBoardMember = async (id) => {
  const { data, error } = await supabase.from("board").delete().eq("id", id);
  if (error) throw error;
  return data;
};

export const uploadImageToSupabase = async (file) => {
  const fileName = `${Date.now()}_${file.name}`;
  const { error } = await supabase.storage.from("board").upload(fileName, file);
  if (error) throw error;

  const { data: publicData } = supabase.storage
    .from("board")
    .getPublicUrl(fileName);
  return publicData.publicUrl;
};

export const deleteImageFromSupabase = async (fileName) => {
  const { error } = await supabase.storage.from("board").remove([fileName]);
  if (error) throw error;
  return true;
};
