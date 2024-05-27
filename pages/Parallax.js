import React, {useEffect, useState} from "react";

const Parallax = () => {

    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.scrollY)
    useEffect(() => {
        window.addEventListener('scroll', handleScroll )

        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    return(

        <div className="parallax-outer">

            <div className="parallax"></div>

            <div className="hero-box-container">

        <div className="border rounded-md w-80 p-5 shadow-lg bg-gold">
          <p>1. Always keep going</p>
          <p>2. Believe in yourself or nobody will</p>
          <p>3. Embrace your uniqueness</p>
          
          Infomertial One</div>
        <div className="border">Info 2</div>


      </div>

      <div className="parallax-cellphone">
        <img src="./public/cellphone-outline.jpg" alt="Cellphone Here" />
      </div>
        </div>

    );


};

export default Parallax;