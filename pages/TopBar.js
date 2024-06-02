import { RxHamburgerMenu } from "react-icons/rx";
import React, {useEffect, useState, useRef} from "react";
import SideBar from "./SideBar";

const TopBar = () => {


    const [open, showNav] = useState(false);

    let menuRef = useRef();
    useEffect(() => {
        let handler = (e) => {
            if(e.target) {
            showNav(false);
            }
        }

        document.addEventListener("mousedown", handler);
    })

    const openNav = (open) => {
      showNav(!open);  
    };

    const handleClick = () => {
        showNav
        console.log('clicked');

    }
    return(
    <>
    <header className={`flex justify-evenly sm:gap-[28rem] xs:gap-[18rem] smd:gap-[20rem] lgmd:gap-[24rem] md:gap-[36rem] gap-56 w-screen bg-gray-700 transition-all duration-200 ease-out min-h-16 items-center ${open ? "opacity-0" : "opacity-100"}`}>

        
        <div className="logo">Logo Here</div>
        <button onClick={() =>{showNav(!open)}} className="flex relative items-center w-9 rounded-md cursor-pointer text-gold hover:bg-gold hover:text-black transition-all ease-linear duration-75 
                            shadow-sm">
            <RxHamburgerMenu size="32" />
        </button>
        

    </header>
    <SideBar open={open} /></>

);



};


export default TopBar;