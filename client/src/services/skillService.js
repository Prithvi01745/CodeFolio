import api from "./api";

export const getSkills = async () => {
  const response = await api.get("/skills");
  return response.data;
};

export const addSkill = async (skill) => {
  const response = await api.post("/skills", skill);
  return response.data;
};

export const updateSkill = async (id, skill) => {
  const response = await api.put(`/skills/${id}`, skill);
  return response.data;
};

export const deleteSkill = async (id) => {
  const response = await api.delete(`/skills/${id}`);
  return response.data;
};