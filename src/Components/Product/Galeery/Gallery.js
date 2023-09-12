import React,{useState} from 'react'
import jeepride from "../../../Images/kudremukhjeep.jpg"
import {BsFillArrowLeftCircleFill,BsFillArrowRightCircleFill} from "react-icons/bs"
import Slider from "react-slick"
import "./gallery.css"
const Gallery = ({slides}) => {
    
    const settings = {
      infinite: true,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        swipeToSlide: true,
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
              infinite: true
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true
            }
          }
        ]
    };
    const sliderRef = React.useRef<Slider>(null);
  
  return (
    <div className='product-gal-body'>
    <Slider {...settings} useRef={sliderRef}    >
    {slides.map((index)=>(
   <div className='product-gal-body-top'>
      
      <div className='product-gal-body-container'>
    <div  className= 'product-gal-body-card'>
    <div className='product-gal-body-front'>
    <img src={index.Gimg} className='product-gal-body-top-img'></img></div>
  <div className='product-gal-body-back'>
  <div className='product-gal-body-top-title' >  {index.Gname}</div>
  <div className='product-gal-body-line'></div>
   <div className='product-gal-body-back-para' >{index.Gpara}</div> 
    
    </div>
  </div>
  </div>
  </div>
    ))}
    </Slider>
  </div>
  )
}

export default Gallery
