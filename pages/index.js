import Head from 'next/head';
import styles from '../styles/Home.module.css';
import SideBar from './SideBar';
import 'tailwindcss/tailwind.css';
import { IoHomeSharp } from "react-icons/io5";




export default function Home() {
  return (
   

      <>
      <div className="bg-red-500"> Hello World! </div>
      
      <SideBar />
      
      
      </>
  );
}
