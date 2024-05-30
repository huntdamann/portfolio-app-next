import React, {useEffect, useState, useRef} from "react";
import { ParallaxProvider, useParallax } from "react-scroll-parallax";
import Image from "next/image";
import phone from "../public/cellphone-outline.jpg";
import trees from "../public/trees.jpg";
import mountain1 from "../public/mountain1.png";
import mountain2 from "../public/mountain2.png";
import sun from "../public/sun.png";
import river from "../public/river.png";
import bubbles from "../public/bubbles.jpg.png"
import useScrollPosition from "./useScrollPosition";

const ParallaxEffect = () => {

    const [offsetY, setOffsetY] = useState(0);
    const {ref} = useParallax({ speed: 1});
    const {ref : mountainRef} = useParallax({ speed: 3});
    const scrollPosition = useScrollPosition();
    console.log(scrollPosition);
    
    const handleScroll = () => { console.log(window.scrollY)
    }

    return(

        <ParallaxProvider>

          <div className="parallax">
            
             <div data-speed="0.2" className="parallax-sun translate">
       
              <Image 
                src={sun}
                width={60}
                
                />
            </div>
            <div ref={ref} data-speed="0.2" className="parallax-mountain translate">
       
              <Image 
                src={mountain1}
                />
            </div>
            <div ref={mountainRef} data-speed="0.2" className="parallax-mountain2 translate">
       
              <Image 
                src={mountain2}
                />
            </div>
            <div data-speed="0.2" className="parallax-trees translate">
            
            <Image 
              src={river}
              width={2000}
              height={500}
              
              />
            </div>
            <div data-speed="0.2" className="parallax-bubbles translate">

              <Image 
            
                src={bubbles}
                width={50}
              
              />
            </div>
         </div>

         <div className="parallax-text"><span>We Outside</span></div>

     
        </ParallaxProvider>

    );


};

export default ParallaxEffect;