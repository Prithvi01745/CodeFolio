import api from "./api";

// Get logged-in user's profile
export const getProfile = async () => {
  const response = await api.get("/profile");
  return response.data;
};

// Update logged-in user's profile
export const updateProfile = async (profile) => {
  const response = await api.put("/profile", profile);
  return response.data;
};