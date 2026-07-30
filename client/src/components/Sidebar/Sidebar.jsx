import { NavLink } from "react-router-dom";
import {
  FiHome,
  FiUser,
  FiFolder,
  FiCode,
  FiBriefcase,
  FiBookOpen,
  FiLogOut,
} from "react-icons/fi";
import { FaCode } from "react-icons/fa";

const menus = [
  { name: "Dashboard", path: "/dashboard", icon: <FiHome /> },
  { name: "Profile", path: "/dashboard/profile", icon: <FiUser /> },
  { name: "Projects", path: "/dashboard/projects", icon: <FiFolder /> },
  { name: "Skills", path: "/dashboard/skills", icon: <FiCode /> },
  { name: "Experience", path: "/dashboard/experience", icon: <FiBriefcase /> },
  { name: "Education", path: "/dashboard/education", icon: <FiBookOpen /> },
];

function Sidebar() {
  return (
    <aside className="w-72 min-h-screen bg-slate-950 text-white border-r border-white/10 shadow-2xl flex flex-col">

      {/* Logo */}

      <div className="px-8 py-7 border-b border-white/10">

        <div className="flex items-center gap-3">

          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg">

            <FaCode className="text-white text-lg" />

          </div>

          <div>

            <h1 className="text-3xl font-black tracking-tight">
              Code
              <span className="text-blue-500">
                Folio
              </span>
            </h1>

            <p className="text-slate-400 text-sm">
              Portfolio Builder
            </p>

          </div>

        </div>

      </div>

      {/* Menu */}

      <nav className="flex-1 px-5 py-6 space-y-2">

        {menus.map((menu) => (

          <NavLink
            key={menu.path}
            to={menu.path}
            end={menu.path === "/dashboard"}
            className={({ isActive }) =>
              `group flex items-center gap-4 rounded-2xl px-5 py-3 transition-all duration-300
              ${
                isActive
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-900/30"
                  : "text-slate-300 hover:bg-slate-800 hover:translate-x-1"
              }`
            }
          >

            <span className="text-xl group-hover:scale-110 transition-transform">
              {menu.icon}
            </span>

            <span className="font-medium">
              {menu.name}
            </span>

          </NavLink>

        ))}

      </nav>

      {/* User Card */}

      <div className="p-5 border-t border-white/10">

        <div className="rounded-2xl bg-slate-900 p-4 border border-white/5">

          <div className="flex items-center gap-3">

            <img
              src="https://ui-avatars.com/api/?name=Prithviraj&background=2563eb&color=fff"
              alt="profile"
              className="w-12 h-12 rounded-full border-2 border-blue-500"
            />

            <div>

              <h3 className="font-semibold">
                Prithviraj
              </h3>

              <p className="text-xs text-slate-400">
                Full Stack Developer
              </p>

            </div>

          </div>

          <button
            className="mt-4 w-full flex items-center justify-center gap-2 rounded-xl bg-red-500/10 py-3 text-red-400 transition hover:bg-red-600 hover:text-white"
          >
            <FiLogOut />

            Logout

          </button>

        </div>

      </div>

    </aside>
  );
}

export default Sidebar;