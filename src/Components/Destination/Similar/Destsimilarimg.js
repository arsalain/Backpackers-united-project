import React from 'react'
import "./destsimilar.css"
import {MdKeyboardArrowRight,MdKeyboardArrowLeft} from "react-icons/md"
import Slider from "react-slick";

const Destsimilarimg = ({slides}) => {
    const ArrowLeft = (props) => (
        <button
            {...props}
            className={'dest-sim-prev'}><MdKeyboardArrowLeft style={{color:"black"}}/> </button>
    );
    const ArrowRight = (props) => (
        <button
            {...props}
            className={'dest-sim-next'}><MdKeyboardArrowRight style={{color:"black"}}/> </button>
    )
    const settings = {
        infinite: true,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        swipeToSlide: true,
        nextArrow: <ArrowRight />,
        prevArrow: <ArrowLeft />,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: true
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true
              }
            }
          ]
      };
    return (
    <div >
    <Slider {...settings} >
    {slides.map((index)=>(
        <div  className='dest-sim-slide-item-top'>
    <div className='dest-sim-slide-item-container' >
    <div className='dest-sim-slide-item'>
      <div className='dest-sim-slide-item-front' >
        <img src={index.Dimg} className='dest-sim-slide-item-img'></img>
        </div>
        <div className='dest-sim-slide-item-back'>
      <div className='dest-sim-slide-item-title'>
  {index.name}
      </div>
      </div>
    </div >
    </div>
    </div>
       ))}
    </Slider>
 
  </div>
    )
}

export default Destsimilarimg
