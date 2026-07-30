import Navbar from "../components/portfolio/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";

function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-100">
      <div className="flex">

        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex flex-col flex-1 min-h-screen">

          {/* Top Navigation */}
          <Navbar />

          {/* Dashboard Content */}
          <main className="flex-1 overflow-y-auto p-6 md:p-8">
            {children}
          </main>

        </div>

      </div>
    </div>
  );
}

export default DashboardLayout;