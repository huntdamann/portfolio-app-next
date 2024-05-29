import Head from 'next/head';
import styles from '../styles/Home.module.css';
import SideBar from './SideBar';
import TopBar from './TopBar';
import Parallax from './Parallax';
import 'tailwindcss/tailwind.css';
import { IoHomeSharp } from "react-icons/io5";




export default function Home() {
  return (
   

      <>
      
      
      



      <TopBar/>
      <body className="bg-gradient-to-t flex flex-col from-water-blue from-5% min-h-screen via-yellow-300 via-30% to-sky-blue">

      
      <Parallax />


      </body>
      
      
      </>
  );
}
