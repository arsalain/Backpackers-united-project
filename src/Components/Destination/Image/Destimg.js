import React,{useState} from 'react'
import {BsArrowLeftSquareFill,BsArrowRightSquareFill} from "react-icons/bs"
import Slider from "react-slick";
import "./destimg.css"
const Destimg = ({slides}) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = ((slides.length -2 )* 2) % slides.length
    const ArrowLeft = (props) => (
        <button
            {...props}
            className={currentSlide === 0 ? 'trek-slide-prev1' :'trek-slide-prev'}>  <BsArrowLeftSquareFill /> </button>
    );
    const ArrowRight = (props) => (
        <button
            {...props}
            className={currentSlide === totalSlides ?  'trek-slide-next1': 'trek-slide-next'}><BsArrowRightSquareFill /> </button>
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
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          }
        ]
    };
  return (
    <div>
           <Slider {...settings}     >
          {slides.map((index)=>(
        <div className='destimg-body-top'>
            <div className='destimg-body-img'>
                <img src={index.img} className='destimg-body-i' />
                <div className='destimg-body-name'>Travel to</div>
                <div className='destimg-body-name1' >{index.name}</div>
            </div>
           </div>
          ))}
           </Slider>
      </div>
  )
}

export default Destimg