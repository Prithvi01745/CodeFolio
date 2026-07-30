import User from "../models/User.js";

export const getProjects = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("projects");

    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    res.status(200).json({ success: true, projects: user.projects });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const addProject = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);

    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    user.projects.push(req.body);
    await user.save();

    res.status(201).json({
      success: true,
      message: "Project added",
      projects: user.projects,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const updateProject = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);

    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    const project = user.projects.id(req.params.projectId);

    if (!project) {
      return res.status(404).json({ success: false, message: "Project not found" });
    }

    Object.assign(project, req.body);
    await user.save();

    res.status(200).json({
      success: true,
      message: "Project updated",
      projects: user.projects,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const deleteProject = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);

    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    const project = user.projects.id(req.params.projectId);

    if (!project) {
      return res.status(404).json({ success: false, message: "Project not found" });
    }

    project.deleteOne();
    await user.save();

    res.status(200).json({
      success: true,
      message: "Project deleted",
      projects: user.projects,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
