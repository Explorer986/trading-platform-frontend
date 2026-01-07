import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex h-screen w-screen bg-gray-100">

      {/* Sidebar */}
      <Sidebar />

      {/* Right Side */}
      <div className="flex flex-col flex-1">

        {/* Top Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-1 overflow-auto">
          <div className="h-full w-full p-6">
            {children}
          </div>
        </main>

      </div>
    </div>
  );
}
