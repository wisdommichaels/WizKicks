import { Outlet } from "react-router-dom";
import Header from "./Header";
import SideBar from "./SideBar";
import { useState } from "react";

const MainLayout = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [isSidebarHovered, setIsSidebarHovered] = useState(false);

  return (
    <div className="bg-gradient-to-br from-purple-200 to-gray-100 backdrop-blur-2xl w-full min-h-screen pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)]">
      <Header 
        showSidebar={showSidebar} 
        setShowSidebar={setShowSidebar} 
        isSidebarHovered={isSidebarHovered}
      />
      
      <SideBar 
        showSidebar={showSidebar} 
        setShowSidebar={setShowSidebar} 
        setIsSidebarHovered={setIsSidebarHovered}
      />

      {/* Adjust Outlet margin based on sidebar hover */}
      <div 
        className={`pt-[95px] transition-all duration-300 
          ${isSidebarHovered ? "md:ml-64" : "md:ml-19"}`}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
