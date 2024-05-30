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
      <ParallaxProvider>
      <div className="bg-gradient-to-t flex flex-col from-water-blue from-5% min-h-screen via-yellow-300 via-30% to-sky-blue">

      
      <ParallaxEffect />


      </div>
      </ParallaxProvider>
      <div className="h-48 bg-water-blue">

        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ab soluta, cupiditate a, earum accusantium optio incidunt culpa, nemo porro recusandae repellat doloremque. Eius aspernatur deleniti soluta autem iste id quisquam quia necessitatibus excepturi quod odit vero nemo voluptatibus rem, magnam dolores consectetur enim ipsum maiores natus officia omnis perferendis? Ducimus labore, aut dicta eius laborum omnis voluptatibus sunt explicabo id illo dolor, minus dolores cumque, aperiam nam obcaecati sequi voluptatum voluptate ut blanditiis maxime suscipit facilis aliquid ab! Dignissimos, repellendus, hic repellat molestias repudiandae ex libero ratione ipsum sit animi ab, voluptatum nostrum nihil aut! Saepe reprehenderit at quasi sint aspernatur expedita in molestiae possimus deserunt minima voluptatem porro eveniet nulla, ad quod atque? Voluptatibus dolore excepturi repellendus provident repellat, aut perspiciatis possimus, natus voluptatum odio dignissimos quisquam veritatis magnam. Rem, omnis tenetur nobis quidem suscipit quisquam doloremque enim modi architecto maxime recusandae molestiae perspiciatis alias obcaecati perferendis dolores quia aperiam fugit? Nihil quidem voluptate molestiae ducimus reprehenderit. Adipisci nulla repellendus laboriosam numquam alias harum repellat vitae amet! Numquam nemo, eligendi aut nihil odit atque repellendus reiciendis porro error odio facere architecto sed ex accusamus ea dolores unde corporis delectus commodi ducimus et? Eos tempora optio facilis sit maxime.</span>

      </div>
      
      
      </>
  );
}
