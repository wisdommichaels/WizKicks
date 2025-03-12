import { Outlet } from "react-router-dom"
import Header from './Header';
import SideBar from './SideBar';
import { useState } from "react";


const MainLayout = () => {

  const [showSidebar, setShowSidebar] = useState(false)
  
  return (
    <div className="bg-gradient-to-br from-purple-200 to-gray-100 backdrop-blur-2xl w-full min-h-screen">
      <Header showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
      <SideBar showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
     <div className="ml-0 lg:ml-[260px] pt-[95px] transition-all">
      <Outlet/>
     </div>
      </div>
  )
}

export default MainLayout