import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 p-6 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <Outlet />{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
