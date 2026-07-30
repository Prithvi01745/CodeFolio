import api from "./api";

export const getPortfolio = async (username) => {
  const response = await api.get(`/portfolio/${username}`);
  return response.data;
};