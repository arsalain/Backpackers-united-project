import React from 'react'
import Slider from "react-slick";
import {MdKeyboardArrowRight,MdKeyboardArrowLeft} from "react-icons/md"
import wayanad from "../../../Images/destwayanad.jpg"
import kodaikanol from "../../../Images/kodaikanol.jpeg"
import Kudremukh from "../../../Images/Kudremukha.png"
import nethravathi from "../../../Images/Nethravathi.png"
import Paithalamala from "../../../Images/paithalamala.jpg"
import dudhsagar from "../../../Images/dudhsagar.jpg"
import kodachadri from "../../../Images/kodachadri.jpg"
import gokarna from "../../../Images/gokarna.jpeg"
import dandeli from "../../../Images/dandeli.jpg"
import chikmangalur from "../../../Images/chikmangalur.jpg"
import coorg from "../../../Images/destcoorg.jpeg"
import "./topslider.css"
const Topslider = () => {
    const ArrowLeft = (props) => (
        <button
            {...props}
            className={'topslide-prev'}><MdKeyboardArrowLeft style={{color:"black"}}/> </button>
    );
    const ArrowRight = (props) => (
        <button
            {...props}
            className={'topslide-next'}><MdKeyboardArrowRight style={{color:"black"}}/> </button>
    )
    const sliderRef = React.useRef<Slider>(null);
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1,
        rows: 2,
        nextArrow: <ArrowRight />,
        prevArrow: <ArrowLeft />,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                dots: true
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: true
              }
            }
          ]
      };
  return (
    <div className='topslide'>
      <div className='topslide-title'>Upcoming  Weekend Treks and Tours</div>
      <Slider {...settings} useRef={sliderRef}>
        <div className='topslide-contain'>
            <img src={nethravathi} className='topslide-contain-img' /> 
          <div className='topslide-contain-name'>Nethravathi</div>
          <div className='topslide-contain-name1'>Trek</div>
        </div>
        <div className='topslide-contain'>
            <img src={wayanad} className='topslide-contain-img' /> 
          <div className='topslide-contain-name'>Wayanad</div>
          <div className='topslide-contain-name1'>Tour(3D/2N)</div>
        </div>
        <div className='topslide-contain'>
            <img src={gokarna} className='topslide-contain-img' /> 
          <div className='topslide-contain-name'>Kudremukha</div>
          <div className='topslide-contain-name1'>Trek</div>
        </div>
        <div className='topslide-contain'>
            <img src={Kudremukh} className='topslide-contain-img' /> 
          <div className='topslide-contain-name'>Gokarna-Dandeli</div>
          <div className='topslide-contain-name1'>Tour(3D/2N)</div>
        </div>
      
        <div className='topslide-contain'>
            <img src={Paithalamala} className='topslide-contain-img' /> 
          <div className='topslide-contain-name'>Paithalamala</div>
          <div className='topslide-contain-name1'>Trek</div>
        </div>
        <div className='topslide-contain'>
            <img src={coorg} className='topslide-contain-img' /> 
          <div className='topslide-contain-name'>Coorg</div>
          <div className='topslide-contain-name1'>Tour(3D/2N)</div>
        </div>
        <div className='topslide-contain'>
            <img src={kodaikanol} className='topslide-contain-img' /> 
          <div className='topslide-contain-name'>Kodachadri</div>
          <div className='topslide-contain-name1'>Trek</div>
        </div>
        <div className='topslide-contain'>
            <img src={dudhsagar} className='topslide-contain-img' /> 
          <div className='topslide-contain-name'>Kodaikanol</div>
          <div className='topslide-contain-name1'>Tour(3D/2N)</div>
        </div>
        <div className='topslide-contain'>
            <img src={chikmangalur} className='topslide-contain-img' /> 
          <div className='topslide-contain-name'>Bandje</div>
          <div className='topslide-contain-name1'>Trek</div>
        </div>
        <div className='topslide-contain'>
            <img src={kodachadri} className='topslide-contain-img' /> 
          <div className='topslide-contain-name'>Chikmagulur</div>
          <div className='topslide-contain-name1'>Tour(3D/2N)</div>
        </div>
        <div className='topslide-contain'>
            <img src={chikmangalur} className='topslide-contain-img' /> 
          <div className='topslide-contain-name'>Gokarna Beach</div>
          <div className='topslide-contain-name1'>Trek</div>
        </div>
        <div className='topslide-contain'>
            <img src={kodachadri} className='topslide-contain-img' /> 
          <div className='topslide-contain-name'>Goa</div>
          <div className='topslide-contain-name1'>Tour(3D/2N)</div>
        </div>
        <div className='topslide-contain'>
            <img src={kodachadri} className='topslide-contain-img' /> 
          <div className='topslide-contain-name'>Kumara Parvatha</div>
          <div className='topslide-contain-name1'>Trek</div>
        </div>
        <div className='topslide-contain'>
            <img src={kodachadri} className='topslide-contain-img' /> 
          <div className='topslide-contain-name'>Ooty</div>
          <div className='topslide-contain-name1'>Tour(3D/2N)</div>
        </div>
      </Slider>
    </div>
  )
}

export default Topslider
