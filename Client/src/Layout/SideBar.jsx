import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { getNav } from "../Navigation/index";
import PropTypes from "prop-types";

const SideBar = ({ showSidebar, setShowSidebar, setIsSidebarHovered }) => {
  const location = useLocation();
  const pathName = location.pathname;
  const [allNav, setAllNav] = useState([]);

  useEffect(() => {
    const navs = getNav("admin");
    setAllNav(navs);
  }, []);

  return (
    <div>
      {/* Overlay when sidebar is open on mobile */}
      {showSidebar && (
        <div
          onClick={() => setShowSidebar(false)}
          className="fixed duration-200 w-screen h-screen bg-[#dfc8f980] top-0 left-0 z-10"
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-purple-900 shadow-lg transition-all duration-300 z-50 
          rounded-tr-2xl rounded-br-2xl overflow-hidden 
          ${showSidebar ? "w-64 translate-x-0" : "w-16 -translate-x-full"} 
          md:translate-x-0 hover:bg-red-700 hover:w-64`}
        onMouseEnter={() => setIsSidebarHovered(true)}
        onMouseLeave={() => setIsSidebarHovered(false)}
      >
        {/* Logo */}
        <div className="h-[70px] flex justify-center items-center">
          <Link to="/" className="w-10 h-10">
            <img className="w-10" src="/assets/logo.png" alt="" />
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="px-2">
          <ul>
            {allNav.map((n, i) => (
              <li key={i}>
                <Link
                  to={n.path}
                  className={`flex items-center px-3 py-2 rounded-xl h-[48px] transition-all gap-5 mb-2 
                    ${pathName === n.path ? "bg-purple-500 shadow-lg text-white" : "text-white hover:bg-purple-500 hover:py-2"}`}
                >
                  <span className="material-symbols-rounded  flex justify-center items-center text-xl">{n.icon}</span>
                  {/* Show title only on large screens and when hovered */}
                  <span className="opacity-100 md:group-hover:opacity-100 transition-opacity duration-300">
                    {n.title} 
                  </span>
                </Link>
              </li>
            ))}

            {/* Logout Button */}
            <li>
              <button className="flex items-center px-3 py-2 rounded-lg text-white hover:bg-purple-500 transition-all w-full gap-5">
                <span className="material-symbols-rounded text-xl">logout</span>
                <span className="opacity-100 md:group-hover:opacity-100 transition-opacity duration-300">
                  Logout
                </span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

SideBar.propTypes = {
  showSidebar: PropTypes.bool.isRequired,
  setShowSidebar: PropTypes.func.isRequired,
  setIsSidebarHovered: PropTypes.func.isRequired,
};

export default SideBar;
