import api from "./api";

// =====================
// Get Education
// =====================
export const getEducation = async () => {
  const res = await api.get("/education");
  return res.data;
};

// =====================
// Add Education
// =====================
export const addEducation = async (educationData) => {
  const res = await api.post("/education", educationData);
  return res.data;
};

// =====================
// Update Education
// =====================
export const updateEducation = async (educationId, educationData) => {
  const res = await api.put(
    `/education/${educationId}`,
    educationData
  );
  return res.data;
};

// =====================
// Delete Education
// =====================
export const deleteEducation = async (educationId) => {
  const res = await api.delete(`/education/${educationId}`);
  return res.data;
};