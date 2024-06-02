import React, {useEffect, useState, useRef} from "react";
import {motion, useScroll, useTransform} from "framer-motion"; 
import Image from "next/image";
import trees from "../public/Trees.png";
import mountain1 from "../public/Mountain.png";
import cloud from "../public/cloud.png"
import useScrollPosition from "./useScrollPosition";

const ParallaxEffect = () => {

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start start", "end start"],
    });
  
    const backgroundY = useTransform(scrollYProgress, [0,1], ["0%", "150%"]);
    const textY = useTransform(scrollYProgress, [0,1], ["0%", "200%"]);
    const treeY = useTransform(scrollYProgress, [0,1], ["0%", "175%"]);

    //Calculate Mouse Scroll Position
    const scrollPosition = useScrollPosition();
    console.log(scrollPosition);

    return(


        <>
        
        {/*Container to hold parallax animations */}
          <div ref={ref} className="parallax">
            
            <motion.div className="parallax-mountain" style={{

              backgroundPosition: "bottom",
              backgroundSize: "cover",
              backgroundImage: `url(${mountain1.src})`,
              y: backgroundY,
            }}>
            </motion.div>
          
            <motion.div className="parallax-trees" style={{

                            
              backgroundPosition: "top",
              backgroundSize: "cover",
              backgroundImage: `url(${trees.src})`,
              y: treeY,
            }}>
       
            </motion.div>
           
            <motion.div style={{
              y:textY,
            }} className="parallax-text"><span>We Outside</span></motion.div>
          </div>

         <section className="text-2xl p-8 bg-gray-700 text-white">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni doloremque suscipit mollitia atque asperiores error quia ducimus magnam voluptatibus nam dolorum aut quae vero autem fugit eveniet, accusamus dolore deleniti accusantium rerum soluta! Temporibus esse ullam quos, sit amet sapiente commodi, ad quisquam eveniet voluptas eos ex officiis saepe, cumque iure earum enim odit? Id reiciendis fugiat quasi blanditiis soluta corrupti necessitatibus iusto accusantium natus, atque, quidem inventore architecto consequatur, aliquid maiores labore exercitationem expedita ut eveniet sed. Quam saepe quo repellat culpa totam exercitationem inventore, ducimus natus commodi labore velit officiis magni enim facilis nam reprehenderit nemo libero dignissimos!
         </section>
        </>
    );


};

export default ParallaxEffect;