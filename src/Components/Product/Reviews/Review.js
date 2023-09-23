import React, { useState } from 'react'
import "./review.css"
import gokarna from "../../../Images/gokarna.jpg"
import {IoIosArrowDropleft,IoIosArrowDropright} from "react-icons/io"
import { Link } from 'react-router-dom'

const Review = ({slides}) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const goToPrev = () =>{
        const isFirst = currentIndex === 0;
        const newIndex = isFirst ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex)
    }
    const goToNext = () =>{
        const isLast = currentIndex === slides.length - 1 ;
        const newIndex = isLast ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex)
    }
    // if (!slides[currentIndex].imgSrc || !slides[currentIndex].title || !slides[currentIndex].para) {
    //   return null;
    // }
  return (
    <div>
            <div className='reviews-left'>
              <img src= {slides[currentIndex].imgSrc} className='reviews-left-img'></img>
            
                <div className='reviews-left-arrows'>
                  <IoIosArrowDropleft  onClick={goToPrev}/>
                  <IoIosArrowDropright  onClick={goToNext} />
                </div>
                <div className='reviews-left-box'>
                  <div className='reviews-left-title' >
                     { slides[currentIndex].title}
                  </div>
                  <div className='reviews-left-para' >
                  { slides[currentIndex].para}....... <div ><Link to={slides[currentIndex].id}><button className='reviews-left-para-read'>Read More</button></Link></div>
                  </div>
                </div>
            </div>
          
    </div>
  )
}

export default Review
