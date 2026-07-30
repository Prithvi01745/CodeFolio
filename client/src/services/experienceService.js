import api from "./api";

// Get Experience
export const getExperience = async () => {
  const response = await api.get("/experience");
  return response.data;
};

// Add Experience
export const addExperience = async (experience) => {
  const response = await api.post("/experience", experience);
  return response.data;
};

// Update Experience
export const updateExperience = async (id, experience) => {
  const response = await api.put(`/experience/${id}`, experience);
  return response.data;
};

// Delete Experience
export const deleteExperience = async (id) => {
  const response = await api.delete(`/experience/${id}`);
  return response.data;
};