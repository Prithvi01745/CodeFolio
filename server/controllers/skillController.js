import User from "../models/User.js";

// ================= GET ALL SKILLS =================
export const getSkills = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("skills");

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found.",
      });
    }

    return res.status(200).json({
      success: true,
      skills: user.skills || [],
    });
  } catch (error) {
    console.error("GET SKILLS ERROR:", error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ================= ADD SKILL =================
export const addSkill = async (req, res) => {
  try {
    const { skillName, technologies, description } = req.body;

    if (!skillName || !description) {
      return res.status(400).json({
        success: false,
        message: "Skill name and description are required.",
      });
    }

    const user = await User.findById(req.user.id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found.",
      });
    }

    const alreadyExists = user.skills.some(
      (skill) =>
        skill.skillName &&
        skill.skillName.toLowerCase() === skillName.toLowerCase()
    );

    if (alreadyExists) {
      return res.status(400).json({
        success: false,
        message: "Skill already exists.",
      });
    }

    user.skills.push({
      skillName,
      technologies: technologies || [],
      description,
    });

    await user.save();

    return res.status(201).json({
      success: true,
      message: "Skill added successfully.",
      skills: user.skills,
    });
  } catch (error) {
    console.error("ADD SKILL ERROR:", error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ================= UPDATE SKILL =================
export const updateSkill = async (req, res) => {
  try {
    const { skillId } = req.params;
    const { skillName, technologies, description } = req.body;

    const user = await User.findById(req.user.id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found.",
      });
    }

    const skill = user.skills.id(skillId);

    if (!skill) {
      return res.status(404).json({
        success: false,
        message: "Skill not found.",
      });
    }

    skill.skillName = skillName;
    skill.technologies = technologies || [];
    skill.description = description;

    await user.save();

    return res.status(200).json({
      success: true,
      message: "Skill updated successfully.",
      skills: user.skills,
    });
  } catch (error) {
    console.error("UPDATE SKILL ERROR:", error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ================= DELETE SKILL =================
export const deleteSkill = async (req, res) => {
  try {
    console.log("========== DELETE SKILL ==========");
    console.log("PARAMS:", req.params);
    console.log("USER:", req.user);

    const { skillId } = req.params;

    const user = await User.findById(req.user.id);

    console.log("FOUND USER:", !!user);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found.",
      });
    }

    console.log(
      "SKILL IDS:",
      user.skills.map((s) => s._id.toString())
    );

    const index = user.skills.findIndex(
      (skill) => skill._id.toString() === skillId
    );

    console.log("FOUND INDEX:", index);

    if (index === -1) {
      return res.status(404).json({
        success: false,
        message: "Skill not found.",
      });
    }

    user.skills.splice(index, 1);

    await user.save();

    console.log("DELETE SUCCESS");

    return res.status(200).json({
      success: true,
      message: "Skill deleted successfully.",
      skills: user.skills,
    });
  } catch (error) {
    console.error("DELETE SKILL ERROR:", error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};