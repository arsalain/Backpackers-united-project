    import React,{useState,useEffect} from 'react'
    import Slider from "react-slick";
    import "./trekslider.css"
    import {MdKeyboardArrowRight,MdKeyboardArrowLeft} from "react-icons/md"
    import {GrLocation} from "react-icons/gr"
    import {CiClock2} from "react-icons/ci"
    import {BiRupee} from "react-icons/bi"
    import {Link} from "react-router-dom";

    const Trekslider = ({slides}) => {
      const [currentSlide, setCurrentSlide] = useState(0);
      const totalSlides = ((slides.length -2 )* 2) % slides.length

    
      const [nextFriday, setNextFriday] = useState('');

      useEffect(() => {
        const today = new Date();
   
        const currentDay = today.getDay(); // 0: Sunday, 1: Monday, ..., 6: Saturday
        
        if (currentDay === 5) {
          // If today is Monday, calculate the date of the next Friday
          const daysUntilFriday = 5; // Friday is 5 days ahead of Monday
          const nextFridayDate = new Date(today);
          nextFridayDate.setDate(today.getDate() + daysUntilFriday);
          const istDate = new Date(nextFridayDate);
  
          const options = {
                   timeZone: 'Asia/Kolkata',
                   month: 'long', // 'short' for abbreviated month, 'long' for full month name
                   day: 'numeric',
              };
  
          const istMonthDay = istDate.toLocaleString('en-US', options)
          // const formattedNextFriday = nextFridayDate
          // Format the date as desired (e.g., "YYYY-MM-DD") 
          setNextFriday(istMonthDay);
  
        }
      }, []);
          const ArrowLeft = (props) => (
            <button
                {...props}
                className={currentSlide === 0 ? 'trek-slide-prev1' :'trek-slide-prev'}>  <MdKeyboardArrowLeft /> </button>
        );
        const ArrowRight = (props) => (
            <button
                {...props}
                className={currentSlide === totalSlides ?  'trek-slide-next1': 'trek-slide-next'}><MdKeyboardArrowRight /> </button>
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
      

    
      return (
        <div>
            
          <Slider {...settings} useRef={sliderRef}    >
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
