import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Portfolio from "./pages/Portfolio";
import ProjectsPage from "./pages/ProjectsPage";

import DashboardHome from "./dashboard/DashboardHome";
import ProfileForm from "./dashboard/ProfileForm";
import SkillsForm from "./dashboard/SkillsForm";
import ExperienceForm from "./dashboard/ExperienceForm";
import EducationForm from "./dashboard/EducationForm";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Portfolio Route */}
      <Route path="/portfolio/:username" element={<Portfolio />} />

      {/* Protected Dashboard */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      >
        <Route index element={<DashboardHome />} />
        <Route path="profile" element={<ProfileForm />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="skills" element={<SkillsForm />} />
        <Route path="experience" element={<ExperienceForm />} />
        <Route path="education" element={<EducationForm />} />
      </Route>
    </Routes>
  );
}

export default App;