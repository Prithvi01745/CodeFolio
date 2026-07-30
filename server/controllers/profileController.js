import User from "../models/User.js";

// ==============================
// Get Profile
// ==============================
export const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ==============================
// Update Profile
// ==============================
export const updateProfile = async (req, res) => {
  try {
    const {
      name,
      username,
      title,
      bio,
      resume,
      profileImage,
      socialLinks,
      templateId,
      customDomain,
    } = req.body;

    const user = await User.findById(req.user.id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    // Check if username already exists
    if (
      username &&
      username.toLowerCase() !== user.username
    ) {
      const existingUser = await User.findOne({
        username: username.toLowerCase(),
      });

      if (existingUser) {
        return res.status(400).json({
          success: false,
          message: "Username already exists",
        });
      }
    }

    // Basic Details
    user.name = name?.trim() || user.name;
    user.username = username
      ? username.toLowerCase().trim()
      : user.username;

    user.title = title?.trim() || user.title;

    user.bio = bio ?? user.bio;

    // Media
    user.resume = resume ?? user.resume;
    user.profileImage =
      profileImage ?? user.profileImage;

    // Template
    user.templateId =
      templateId ?? user.templateId;

    // Social Links
    if (socialLinks) {
      user.socialLinks = {
        github:
          socialLinks.github ??
          user.socialLinks.github,

        linkedin:
          socialLinks.linkedin ??
          user.socialLinks.linkedin,

        twitter:
          socialLinks.twitter ??
          user.socialLinks.twitter,

        website:
          socialLinks.website ??
          user.socialLinks.website,
      };
    }

    // Pro Custom Domain
    if (customDomain !== undefined) {
      if (user.isPro) {
        user.customDomain = customDomain
          .toLowerCase()
          .trim();
      } else if (customDomain) {
        return res.status(403).json({
          success: false,
          message:
            "Custom domains require a Pro account",
        });
      }
    }

    await user.save();

    const updatedUser = await User.findById(
      user._id
    ).select("-password");

    res.status(200).json({
      success: true,
      message: "Profile updated successfully",
      user: updatedUser,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ==============================
// Update Portfolio Template
// ==============================
export const updateTemplate = async (req, res) => {
  try {
    const { templateId } = req.body;

    if (!templateId) {
      return res.status(400).json({
        success: false,
        message: "templateId is required",
      });
    }

    const user = await User.findByIdAndUpdate(
      req.user.id,
      { templateId },
      {
        new: true,
        runValidators: true,
      }
    ).select("-password");

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Template updated successfully",
      user,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};