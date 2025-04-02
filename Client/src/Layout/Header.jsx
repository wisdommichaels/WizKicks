import PropTypes from "prop-types";

const Header = ({ showSidebar, setShowSidebar, isSidebarHovered }) => {
  return (
    <div className="fixed top-0 left-0 w-full py-3 px-4 lg:px-7 z-40 lg:bg-none transition-all duration-300">
      <div className="flex justify-between items-center h-[65px]">

        {/* User Profile (Moves to the left ONLY on small screens) */}
        <div className="flex items-center gap-4 lg:order-2">
             {/* Notification Bell (Before Menu on Mobile, Before Profile on lg) */}
        <div className="relative lg:flex justify-center hidden items-center pb-2 cursor-pointer">
          <span className="material-symbols-rounded text-black">notifications</span>
          {/* Notification Badge */}
          {/* <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">3</span> */}
        </div>
          <div>
            <h1 className="text-sm hidden lg:block font-bold text-black">wisdom michael</h1>
            <p className="text-[12px] hidden font-normal lg:flex justify-end text-[#9ca2ac]">Admin</p>
          </div>
          <div className="flex justify-start items-start">
            <img className="w-9 h-9 rounded-full overflow-hidden" src="http://localhost:5173/public/assets/react.svg" alt="" />
          </div>
        </div>

        {/* Search Bar (Moves when sidebar expands) */}
        <div
          className={`hidden md:block transition-all duration-300 
            ${isSidebarHovered ? "ml-62 w-[45%]" : "ml-16 w-[50%]"}`}
        >
          <div className="flex items-center shadow-md pl-3 rounded-xl bg-[#ffffff] border border-[#ffffff] overflow-hidden">
            <span className="material-symbols-rounded text-black">search</span>
            <input
              className="px-3 w-full text-black rounded-xl py-2 outline-none"
              type="text"
              name="search"
              placeholder="Search Product"
            />
          </div>
        </div>

       <div className="flex items-center gap-2 lg:order-1">
        <div className="relative lg:hidden flex justify-center items-center rounded-full bg-[#ffffff] p-2 cursor-pointer">
          <span className="material-symbols-rounded text-black">notifications</span>
          {/* Notification Badge */}
          {/* <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">3</span> */}
        </div>
        {/* Menu Button (Only Visible on Mobile, Always on the Right) */}
        <div
          onClick={() => setShowSidebar(!showSidebar)}
          className="cursor-pointer flex justify-center items-center w-[40px] h-[40px] bg-[#ffffff] rounded-lg lg:hidden"
        >
          <span className="material-symbols-rounded text-black">
            {showSidebar ? "close" : "menu"}
          </span>
        </div>
        </div>

      </div>
    </div>
  );
};

Header.propTypes = {
  showSidebar: PropTypes.bool.isRequired,
  setShowSidebar: PropTypes.func.isRequired,
  isSidebarHovered: PropTypes.bool.isRequired,
};

export default Header;
