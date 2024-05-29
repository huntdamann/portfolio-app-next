import React, {useEffect, useState} from "react";
import Image from "next/image";
import phone from "../public/cellphone-outline.jpg";
import trees from "../public/trees.jpg";
import mountain1 from "../public/mountain1.png";
import mountain2 from "../public/mountain2.png";
import sky from "../public/sky.png";
import river from "../public/river.png";

const Parallax = () => {

    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.scrollY)
    useEffect(() => {
        window.addEventListener('scroll', handleScroll )

        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    return(

        <div className="parallax-outer">

          <div className="parallax">

            <div className="hero-box-container">

               <div className="border rounded-md w-80 p-5 shadow-lg bg-gold">
                <p>1. Always keep going</p>
                <p>2. Believe in yourself or nobody will</p>
                <p>3. Embrace your uniqueness</p>
          
                </div>
                <div className="border">Info 2</div>


             </div>
             
            
             <div className="parallax-sky">
       
              <Image 
                src={sky}
                width={1500}
                
                />
            </div>
            <div className="parallax-mountain">
       
              <Image 
                src={mountain1}
                />
            </div>
            <div className="parallax-mountain2">
       
              <Image 
                src={mountain2}
                />
            </div>
            <div className="parallax-trees">
            
            <Image 
              src={river}
              width={2000}
              height={500}
              
              />
            </div>
         </div>

      <div className="parallax-cellphone">
       
       <Image 
        src={phone}
        />
      </div>
        </div>

    );


};

export default Parallax;