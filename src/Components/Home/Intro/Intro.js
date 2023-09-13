import React, { useContext } from "react";
import "./Intro.css";
import homea from "../../../Images/homeimg.jpg"
const Intro = () => {
  

  return (
  
    <div className="Intro" >
     <div className="i-left">
        <div className="i-name">
          Best Destinations Around The World
          </div>
          <div className="i-title">
          Our Stories Have </div>
          <div className="i-title1">
          Adventures</div>
          <div className="i-discrip1">
          We are experienced in bringing Adventures to stay their journey, with all outdoor 
          destinations in the world as our specialties. Start your adenture now! Nature has already 
          already called you!
          </div>
        <div className="i-bot"> <button className="i-button">Explore</button>
        </div>
        <div>
        </div>
        </div>
     <div className="i-right">
        <img src={homea} className="i-right-img"  />
    </div>
    </div>

  );
};

export default Intro;
