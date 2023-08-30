import React,{useState} from 'react'
import Slider from "react-slick";
import "./trekslider.css"
import {MdKeyboardArrowRight,MdKeyboardArrowLeft} from "react-icons/md"
import {GrLocation} from "react-icons/gr"
import {CiClock2} from "react-icons/ci"
import {BiRupee} from "react-icons/bi"
import {Link} from "react-router-dom";

const Trekslider = ({slides}) => {
    const [currentIndex, setCurrentIndex] = useState([])
    const ArrowLeft = (props) => (
        <button
            {...props}
            className={'trek-slide-prev'}><MdKeyboardArrowLeft /> </button>
    );
    const ArrowRight = (props) => (
        <button
            {...props}
            className={'trek-slide-next'}><MdKeyboardArrowRight /> </button>
    )
    const sliderRef = React.useRef<Slider>(null);
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      nextArrow: <ArrowRight />,
      prevArrow: <ArrowLeft />,
      responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
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
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }
        ]
    };
  console.log("data",slides)
  return (
    <div>
        
       <Slider {...settings} useRef={sliderRef} >
       {slides.map((index)=>(
        <Link to={index.link} className='trek-card-link' >
 <div className='trek-card'>
     
        <img className='trek-card-img' src={index.imgSrc} ></img>
        <div className='trek-card-body' >
        <div className='trek-card-title'>{index.name} </div>
        <div className='trek-card-loca'>
          <div className='trek-card-loca1'><div className='trek-card-loca-icon' ><GrLocation className='trek-card-loca-icon'/>{index.state}</div>
          <div  className='trek-card-day'><div className='trek-card-loca-icon' ><CiClock2 /></div>{index.day}</div>
          </div>
        </div>
        <div className='trek-card-date'>{index.date}</div>
        </div>
        <div className='trek-card-total' >
          <div className='trek-card-person'>{index.person}</div>
          <div className='trek-card-amount'><div className='trek-card-amount-icon'><BiRupee /></div>{index.amount}</div>
        </div>
      </div>
      </Link>
       ))}
      </Slider>
    </div>
  )
}

export default Trekslider
