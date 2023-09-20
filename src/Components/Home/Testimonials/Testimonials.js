import React,{useState} from 'react'
import "./Testimonials.css"
import boy from "../../../Images/raviimg.jpeg"
import {IoIosArrowUp,IoIosArrowDown} from "react-icons/io"
import {BsFillCircleFill} from "react-icons/bs"
const Testimonials = ({slides}) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    console.log(slides,"data")
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
     const updateIndex = (newIndex) =>{
        setCurrentIndex(newIndex);
     }
  return (
    <div className='t-body'>
        <div className='test-left'>
            <div className='test-name' >Testimonials</div>
            <div className='test-title'>{slides[currentIndex].title1}</div>
            <div className='test-title1'>{slides[currentIndex].title2}</div>
            <div className='test-dot-main'>
            <div className={`${currentIndex === 0 ? "test-dot-active": "test-dot"}`} onClick={() =>{
               updateIndex(0)
            }} ><BsFillCircleFill className='test-but-icon'/></div>
            <div className={`${currentIndex === 1 ? "test-dot-active": "test-dot"}`}onClick={() =>{
               updateIndex(1)
            }} ><BsFillCircleFill className='test-but-icon'/></div>
            <div className={`${currentIndex === 2 ? "test-dot-active": "test-dot"}`} onClick={() =>{
               updateIndex(2)
            }} ><BsFillCircleFill className='test-but-icon'/></div>
            </div>
            </div>
            <div className='test-right-main' >
        <div  className='test-right'>
            <img src={boy} height= {50} width= {50}  className='test-card-img'></img>
        <div className='test-card'>
            <div className='test-card-para'>{slides[currentIndex].para}
            </div>
            <div className='test-card-name'>{slides[currentIndex].name1}</div>
            <div className='test-card-name1'>{slides[currentIndex].state1}</div>
        </div>
        <div className='test-card1'>
            <div className='text-card1-name' >{slides[currentIndex].name2}
            </div>
            <div className='text-card1-name1' >{slides[currentIndex].state2}
            </div>
        </div>
       
        </div>
        <div className='test-arrows'>
            <div >
                <IoIosArrowUp className='test-arrow-top'   onClick={goToPrev}/>
                </div>
               <div ><IoIosArrowDown className='test-arrow-bottom'   onClick={goToNext}/></div>
            
        </div>
        </div>
        </div>
  )
}

export default Testimonials