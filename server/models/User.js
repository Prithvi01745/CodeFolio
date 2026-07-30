import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
    },

    description: {
      type: String,
      default: "",
      trim: true,
      maxlength: 1000,
    },

    techStack: [
      {
        type: String,
        trim: true,
      },
    ],

    repoLink: {
      type: String,
      default: "",
    },

    liveLink: {
      type: String,
      default: "",
    },

    screenshot: {
      type: String,
      default: "",
    },

    featured: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

// Skill Schema
const skillSchema = new mongoose.Schema(
  {
    skillName: {
      type: String,
      required: true,
      trim: true,
      maxlength: 50,
    },

    technologies: [
      {
        type: String,
        trim: true,
      },
    ],

    description: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

// Experience Schema
const experienceSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
    },

    jobTitle: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
    },

    employmentType: {
      type: String,
      default: "Internship",
    },

    location: {
      type: String,
      default: "",
      trim: true,
    },

    startDate: {
      type: String,
      required: true,
    },

    endDate: {
      type: String,
      default: "",
    },

    currentlyWorking: {
      type: Boolean,
      default: false,
    },

    technologies: [
      {
        type: String,
        trim: true,
      },
    ],

    description: {
      type: String,
      default: "",
      trim: true,
    },
  },
  { timestamps: true }
);

// Education Schema
const educationSchema = new mongoose.Schema(
  {
    institution: {
      type: String,
      required: true,
      trim: true,
    },

    degree: {
      type: String,
      required: true,
      trim: true,
    },

    fieldOfStudy: {
      type: String,
      default: "",
      trim: true,
    },

    location: {
      type: String,
      default: "",
      trim: true,
    },

    startYear: {
      type: String,
      required: true,
    },

    endYear: {
      type: String,
      required: true,
    },

    grade: {
      type: String,
      default: "",
      trim: true,
    },

    description: {
      type: String,
      default: "",
      trim: true,
    },
  },
  { timestamps: true }
);

// User Schema
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 50,
    },

    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      minlength: 3,
      maxlength: 20,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
    },

    bio: {
      type: String,
      default: "",
      trim: true,
      maxlength: 300,
    },

    title: {
      type: String,
      trim: true,
      default: "Full Stack Developer",
    },

    profileImage: {
      type: String,
      default: "",
      trim: true,
    },

    resume: {
      type: String,
      default: "",
    },

    socialLinks: {
    github: {
      type: String,
      default: "",
      trim: true,
    },

    linkedin: {
      type: String,
      default: "",
      trim: true,
    },

    twitter: {
      type: String,
      default: "",
      trim: true,
    },

    website: {
      type: String,
      default: "",
      trim: true,
    },
  },

    projects: [projectSchema],

    skills: [skillSchema],

    education: [educationSchema],

    experience: [experienceSchema],

    templateId: {
      type: String,
      default: "developer",
    },

    isPro: {
      type: Boolean,
      default: false,
    },

    customDomain: {
      type: String,
      default: "",
      trim: true,
      lowercase: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", userSchema);
