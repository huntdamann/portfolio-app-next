import Head from 'next/head';
import styles from '../styles/Home.module.css';
import SideBar from './SideBar';
import TopBar from './TopBar';
import ParallaxEffect from './Parallax';
import 'tailwindcss/tailwind.css';
import { IoHomeSharp } from "react-icons/io5";
import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';




export default function Home() {
  return (
   

      <>
      
      
      



      <TopBar/>
      <ParallaxEffect />

    
      
      
      
      </>
  );
}
