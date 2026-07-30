import User from "../models/User.js";

// Get Experience
export const getExperience = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("experience");

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.json({
      success: true,
      experience: user.experience,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Add Experience
export const addExperience = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);

    user.experience.push(req.body);

    await user.save();

    res.status(201).json({
      success: true,
      experience: user.experience,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Update Experience
export const updateExperience = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);

    const experience = user.experience.id(req.params.experienceId);

    Object.assign(experience, req.body);

    await user.save();

    res.json({
      success: true,
      experience: user.experience,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete Experience
export const deleteExperience = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);

    const experience = user.experience.id(req.params.experienceId);

    experience.deleteOne();

    await user.save();

    res.json({
      success: true,
      experience: user.experience,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};