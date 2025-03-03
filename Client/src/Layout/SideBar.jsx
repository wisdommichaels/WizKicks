import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { getNav } from "../Navigation/index";
import PropTypes from "prop-types";

const SideBar = ({showSidebar, setShowSidebar}) => {


        const location = useLocation();
        const pathName = location.pathname;
        const [allNav, setAllNav] = useState([])
        useEffect(() => {
            const navs = getNav('admin')
            setAllNav(navs)
        }, [])
        // console.log(allNav)

    return (
        <div>
            <div onClick={() => setShowSidebar(!showSidebar)} className={`cursor-pointer flex duration-200 ${!showSidebar ? 'invisible' : 'visible'} w-screen h-screen bg-[#45515b80] top-0 left-0 z-10`}>

            </div>

    <div className={`w-[250px] fixed bg-[#e6e7fb] z-50 top-0 h-screen shadow-[0_0_15px_0_rgb(34_41_47_/_5%)] transition-all ${showSidebar ? 'left-0' : '-left-[260px] lg:left-0'}`}>
        <div className="h-[70px] flex justify-center items-center">
            <Link to='/' className=" w-[180px] h-[50px]">
                <img className="w-18" src="/src/assets/REX4-removebg-preview.png" alt="" />
            </Link>
        </div>
        
    <div className="px-[16px]">
        <ul>
            {
                allNav.map((n, i) =>
                    <li className="" key={i}>
                <Link to={n.path} className={`${
                    pathName === n.path ? `bg-blue-600 shadow-indigo-500/50 text-white duration-500` : 'text-[#030811] font-bold duration-200'} px-[12px] py-[7px] flex justify-start items-center rounded-sm gap-[8px] hover:pl-4 transition-all w-full mb-1`}>
                   {/* <img src= {n.icon} alt={n.title} width="20" height="20" /> */}
                    <span className="material-symbols-rounded">{n.icon}</span>
                    <span>{n.title}</span>
                </Link>
                </li> )
            }

        <li> 
            <button  className="'text-[#030811] font-bold duration-200'} px-[12px] py-[7px] flex justify-start items-center rounded-sm gap-[8px] hover:pl-4 transition-all w-full mb-1">
                <span className="material-symbols-rounded">logout</span>
                <span>Logout</span>
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
};

export default SideBar;