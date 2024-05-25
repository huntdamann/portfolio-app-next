import { IoHomeSharp } from "react-icons/io5";
import { AiFillProject } from "react-icons/ai";
import { FaPhoneAlt } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { SiAboutdotme } from "react-icons/si";





const SideBar = () => {

    return(

        <nav className="flex flex-col m-0  fixed shadow-lg min-w-36 gap-7 pl-11 pt-5 top-0 bg-gray-700 h-screen">
            <i className="text-white hidden bg-gray-700 justify-center rounded-md  hover:text-orange-200  hover:bg-blue-300 transition-all ease-out cursor-pointer">Home</i>
            <i className="text-white hidden  bg-gray-700 justify-center hover:text-orange-200 cursor-pointer">About Me</i>
            <i className="text-white hidden  bg-gray-700 justify-center hover:text-orange-200 cursor-pointer">Portfolio</i>
            <i className="text-white hidden  bg-gray-700 justify-center hover:text-orange-200 cursor-pointer">Contact Me</i>
            <i className="text-white hidden  bg-gray-700 justify-center hover:text-orange-200 cursor-pointer">Work With Me</i>
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