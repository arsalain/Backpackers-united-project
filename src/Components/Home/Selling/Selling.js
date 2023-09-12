import React from "react";
import "./Selling.css"
import Slider from "react-slick";
import {MdKeyboardArrowRight,MdKeyboardArrowLeft} from "react-icons/md"
import hampi from "../../../Images/hampi.jpg"
import wayanad from "../../../Images/wayanad.jpg"
import kumara from "../../../Images/kumara.jpg"
// import { BiDollar } from "react-icons/bi" ; 
import { BiDollar } from "react-icons/bi";
import {IoNavigateSharp} from "react-icons/io5"
const Selling = () => {
    const ArrowLeft = (props) => (
        <button
            {...props}
            className={'i-dest-prev'}><MdKeyboardArrowLeft style={{color:"white"}}/> </button>
    );
    const ArrowRight = (props) => (
        <button
            {...props}
            className={'i-dest-next'}><MdKeyboardArrowRight style={{color:"white"}}/> </button>
    )
    const sliderRef = React.useRef<Slider>(null);
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        
        nextArrow: <ArrowRight />,
        prevArrow: <ArrowLeft />,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 1,
                dots: true
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
      const sell = [ {
        name: "Hampi",
        amount: "6,000",
        img: hampi
      } ,
      {
        name: "Wayanad",
        amount: "3,600",
        img: wayanad
      } ,
      {
        name: "Kumara parvatha",
        amount: "3,200",
        img: kumara
      } 
      ]
    return (
        <div className="i-dest-body">
<div className="i-dest">
    <div className="i-dest1">
        <div className="i-dest-t1">Top Selling</div>
        <div className="i-dest-t2">Top Destinations</div>
    </div>
    <div className="i-destt">
    <Slider {...settings} useRef={sliderRef}>
    {sell.map((index)=>(
        <div className="i-dest-card">
            <img src={index.img}></img>
            <div className="card-name">
                <div className="card-name1">{index.name}</div>
                <div className="card-name2"><BiDollar />{index.amount}</div>
    </div>
            <div className="card-name3"><IoNavigateSharp  />April 2023</div>
        </div>
))}
        </Slider>
        </div>
    </div>
    </div>
    );
}

export default Selling;