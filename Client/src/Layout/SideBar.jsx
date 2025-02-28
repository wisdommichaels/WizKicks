import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { getNav } from "../Navigation/index";
import { dashboardicon } from '../assets/image.js';

const SideBar = () => {
        const pathName = useLocation();
        const [allNav, setAllNav] = useState([])
        useEffect(() => {
            const navs = getNav('admin')
            setAllNav(navs)
        }, [])
        // console.log(allNav)

    return (
        <div>
            <div></div>

    <div className="{`w-[250px] fixed bg-[#e6e7fb] z-50 top-0 h-screen
    shadow-[0_0_15px_0_rgb(34_41_47_/_5%)] transition-all`}">
        <div className="h-[70px] flex justify-center items-center">
            <Link to='/' className=" w-[180px] h-[50px]">
                <img className="w-18" src="/src/assets/REX4-removebg-preview.png" alt="" />
            </Link>
        </div>
        
    <div className="px-[16px]">
        <ul>
            {
                allNav.map((n, i) => (
                <Link to={n.path} className={`${pathName}`} key={i}>
                   <img src= {dashboardicon} width="30" height="30" />
                    <span>{n.title}</span>
                </Link>
            ))}
        </ul>
    </div>

    </div>
        </div>
    );
};

export default SideBar;