import React from "react";
import banner from "../assets/images/banner.jpg";

function Banner() {
  return (
    <div className="bannerarea">
          <img src={banner} className="wallpaper" alt="banner" />
          <div className="firstText">
           <span>Nemt </span>
          <span>og </span>
          <span>hurtigt!</span> 
          <span> Aflevering  </span>
          <span>morgen,  </span>
          <span>afhentning  </span>
          <span>aften..  </span>
           <span>Sådan! </span>
        
        </div>
    </div>
  );
}

export default Banner;