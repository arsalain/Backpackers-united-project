import React,{useState} from 'react'
import Slider from "react-slick";
import "./inttours.css"
import {MdKeyboardArrowRight,MdKeyboardArrowLeft} from "react-icons/md"
import {GrLocation} from "react-icons/gr"
import {CiClock2} from "react-icons/ci"
import {BiRupee} from "react-icons/bi"
import {Link} from "react-router-dom";

const IntTours = ({slides}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = ((slides.length -2 )* 2) % slides.length
      const ArrowLeft = (props) => (
        <button
            {...props}
            className={currentSlide === 0 ? 'int-slide-prev1' :'int-slide-prev'}>  <MdKeyboardArrowLeft /> </button>
    );
    const ArrowRight = (props) => (
        <button
            {...props}
            className={currentSlide === totalSlides?  'int-slide-next1': 'int-slide-next'}><MdKeyboardArrowRight /> </button>
    )
   
    const settings = {
      infinite: false,
      speed: 500,
      slidesToShow: 4 ,
      slidesToScroll: 1,
      afterChange: (index) => setCurrentSlide(index),
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
    const sliderRef = React.useRef<Slider>(null);
   

  console.log("data",slides)
  return (
    <div>
        
       <Slider {...settings} useRef={sliderRef}    >
       {slides.map((index)=>(
        <Link to={index.link} className='int-card-link' >
 <div className='int-card'>
     
        <img className='int-card-img' src={index.imgSrc} ></img>
        <div className='int-card-body' >
        <div className='int-card-title'>{index.name} </div>
        <div className='int-card-loca'>
          <div className='int-card-loca1'><div className='int-card-loca-icon' ><GrLocation className='int-card-loca-icon'/>{index.state}</div>
          <div  className='int-card-day'><div className='int-card-loca-icon' ><CiClock2 /></div>{index.day}</div>
          </div>
        </div>
        </div>
      </div>
      </Link>
       ))}
      </Slider>
    </div>
  )
}

export default IntTours
