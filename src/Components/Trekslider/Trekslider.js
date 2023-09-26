import React,{useState,useEffect} from 'react'
import Slider from "react-slick";
import "./trekslider.css"
import {MdKeyboardArrowRight,MdKeyboardArrowLeft} from "react-icons/md"
import {GrLocation} from "react-icons/gr"
import {CiClock2} from "react-icons/ci"
import {BiRupee} from "react-icons/bi"
import {Link} from "react-router-dom";


const Trekslider = ({slides}) => {

  const sliderRef = React.useRef();
          const ArrowLeft = (props) => (
            <button 
                onClick={props.onClick}
                className={'trek-slide-prev'}>  <MdKeyboardArrowLeft /> </button>
        );
        const ArrowRight = (props) => (
            <button
                onClick={props.onClick}
                className={ 'trek-slide-next'}><MdKeyboardArrowRight /> </button>
        )
      
        const settings = {
          infinite: true,
          speed: 500,
          slidesToShow: 4 ,
          slidesToScroll: 1,
          nextArrow: <ArrowRight />,
          prevArrow: <ArrowLeft />,
          swipeToSlide: true,
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
        <div >
            
          <Slider {...settings}   >
          {slides.map((index)=>(
            <Link to={`/trek/${index._id}`} className='trek-card-link' >
    <div className='trek-card' key={index._id}>
        
            <img className='trek-card-img' src={`http://localhost:4000/uploads/${index.testimage}`} ></img>
            <div className='trek-card-body' >
            <div className='trek-card-title'>{index.name} </div>
            <div className='trek-card-loca'>
              <div className='trek-card-loca1'><div className='trek-card-loca-icon' ><GrLocation className='trek-card-loca-icon'/>{index.state}</div>
              <div  className='trek-card-day'><div className='trek-card-loca-icon' ><CiClock2 /></div>{index.daynight}</div>
              </div>
            </div>
            <div className='trek-card-date'>{index.date}{index.day}</div>
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
