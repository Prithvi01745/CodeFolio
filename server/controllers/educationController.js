import User from "../models/User.js";

// Get Education
export const getEducation = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("education");

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.json({
      success: true,
      education: user.education,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Add Education
export const addEducation = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);

    user.education.push(req.body);

    await user.save();

    res.status(201).json({
      success: true,
      education: user.education,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Update Education
export const updateEducation = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);

    const education = user.education.id(req.params.educationId);

    if (!education) {
      return res.status(404).json({
        success: false,
        message: "Education not found",
      });
    }

    Object.assign(education, req.body);

    await user.save();

    res.json({
      success: true,
      education: user.education,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete Education
export const deleteEducation = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);

    const education = user.education.id(req.params.educationId);

    if (!education) {
      return res.status(404).json({
        success: false,
        message: "Education not found",
      });
    }

    education.deleteOne();

    await user.save();

    res.json({
      success: true,
      education: user.education,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};