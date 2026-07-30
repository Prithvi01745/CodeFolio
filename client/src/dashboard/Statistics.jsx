import { useEffect, useState, useCallback } from "react";
import {
  FaFolderOpen,
  FaCode,
  FaBriefcase,
  FaGraduationCap,
} from "react-icons/fa";

import api from "../services/api";
import DashboardCard from "../components/DashboardCard";

function Statistics() {
  const [stats, setStats] = useState({
    projects: 0,
    skills: 0,
    experience: 0,
    education: 0,
  });

  const [loading, setLoading] = useState(true);

  const fetchStatistics = useCallback(async () => {
    try {
      // Fetch logged-in user's profile
      const { data } = await api.get("/profile");

      const user = data.user;

      setStats({
        projects: user?.projects?.length || 0,
        skills: user?.skills?.length || 0,
        experience: user?.experience?.length || 0,
        education: user?.education?.length || 0,
      });
    } catch (err) {
      console.error("Failed to fetch statistics:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchStatistics();
  }, [fetchStatistics]);

  if (loading) {
    return (
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="h-36 animate-pulse rounded-3xl bg-slate-200 dark:bg-slate-800"
          />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
      <DashboardCard
        title="Projects"
        value={stats.projects}
        icon={<FaFolderOpen />}
        bg="from-blue-500 to-indigo-600"
      />

      <DashboardCard
        title="Skills"
        value={stats.skills}
        icon={<FaCode />}
        bg="from-green-500 to-emerald-600"
      />

      <DashboardCard
        title="Experience"
        value={stats.experience}
        icon={<FaBriefcase />}
        bg="from-purple-500 to-violet-600"
      />

      <DashboardCard
        title="Education"
        value={stats.education}
        icon={<FaGraduationCap />}
        bg="from-orange-500 to-red-500"
      />
    </div>
  );
}

export default Statistics;