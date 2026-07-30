import api from "./api";

// Get all projects
export const getProjects = async () => {
  const response = await api.get("/projects");
  return response.data;
};

// Add a new project
export const addProject = async (project) => {
  const response = await api.post("/projects", project);
  return response.data;
};

// Update an existing project
export const updateProject = async (projectId, project) => {
  const response = await api.put(`/projects/${projectId}`, project);
  return response.data;
};

// Delete a project
export const deleteProject = async (projectId) => {
  const response = await api.delete(`/projects/${projectId}`);
  return response.data;
};
// Upload project image
export const uploadProjectImage = async (file) => {
  const formData = new FormData();
  formData.append("image", file);

  const response = await api.post("/projects/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};