import { IoHomeSharp } from "react-icons/io5";
import { AiFillProject } from "react-icons/ai";
import { FaPhoneAlt } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { SiAboutdotme } from "react-icons/si";
import React from "react";




const SideBar = ({open}) => {

    return(

        <nav className={`flex flex-col transition-all ease-in z-40 duration-100 m-0 fixed shadow-lg min-w-36 gap-7 pl-11 pt-5 
        scale-60 top-0 bg-gray-700 h-screen ${open ? "opacity-100" : "opacity-0"}`}>
            <SideBarIcon icon={<IoHomeSharp size="28" />} text={"Home"} />
            <SideBarIcon icon={<SiAboutdotme size="28" />} text={"About Me"}/>
            <SideBarIcon icon={<AiFillProject size="28" />}text={"Portfolio"} />
            <SideBarIcon icon={<FaPhoneAlt size="28" />}text={"Contact Me"} />
            <SideBarIcon icon={<MdWork size="28" />}text={"Work With Me"} />
           
        </nav>
        
    );
};

const SideBarIcon = ({ icon, text }) => {
   
   return (
   <div className="sidebar-icon group">
        {icon}
        <span className="sidebar-tooltip group-hover:scale-100">
            {text}
        </span>
    </div>
  
   );
};

export default SideBar;