import "./trek.css"
import React ,{ useState} from 'react'
import {AiOutlineSearch} from "react-icons/ai";
import {IoIosArrowForward,IoIosArrowBack} from "react-icons/io"
import {MdKeyboardArrowRight,MdKeyboardArrowLeft} from "react-icons/md"
import {GrLocation} from "react-icons/gr"
import {CiClock2} from "react-icons/ci"
import {BiRupee} from "react-icons/bi"
import Footer from '../../Components/Nav/Footer/Footer.js'
import Navbar2 from '../../Components/Nav/Navbar/Navbar2.js'
import Slider from "react-slick";
import Trekhome from "../../Image/TrekHome.jpg"
import Trekslider from "../../Components/Trekslider/Trekslider";
// import 'react-multi-carousel/lib/styles.css';

const Trek = () =>{
    const [searchInput, setSearchInput] = useState("");
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
    // infinite: false,
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
    const recommendedtreks = [
      {
        id:1,
        imgSrc: Trekhome,
        name: "Ethina Bhuja Trek",
        state: "Karnataka",
        day: "2D/1N",
        date: "July 21,2023(Friday)",
        person:"Per Person",
        amount: "3600"
      },
      {
        id:2,
        imgSrc: Trekhome,
        name: "Skandagiri Trek",
        state: "Karnataka",
        day: "1D/1N",
        date: "July 21,2023(Friday)",
        person:"Per Person",
        amount: "1499"
      },
      {
        id:3,
        imgSrc: Trekhome,
        name: "Gokarna Beach Trek",
        state: "Karnataka",
        day: "2D/2N",
        date: "July 21,2023(Friday)",
        person:"Per Person",
        amount: "3499"
      },
      {
        id:4,
        imgSrc: Trekhome,
        name: "Tadiandamol Trek",
        state: "Karnataka",
        day: "2D/2N",
        date: "July 21,2023(Friday)",
        person:"Per Person",
        amount: "3799"
      },
      {
        id:5,
        imgSrc: Trekhome,
        name: "Dudhsagar Trek and Dandeli Exploration",
        state: "Karnataka",
        day: "2D/1N",
        date: "July 21,2023(Friday)",
        person:"Per Person",
        amount: "4799"
      },
    ]


  return (
    <div >
    <div className="trek">
   <img src={Trekhome} className="trekimg"/>
    <div className='trek-body'>
      
      <Navbar2 />
       </div>
      <div className='trek-search'>
        <div className='trek-search-bar'>
          <input type="text" placeholder="Search for amazing treks" className='trek-search-input'   onChange={(e)=>setSearchInput(e.target.value)}
   value={searchInput}/>
          <button  className='trek-search-button'><AiOutlineSearch   className="trek-search-icon" /></button>
         
          {/* {searchResult.map((list,index)=>(
          <div  className='trek-search-field'>
            <img src={`http://localhost:4000/uploads/${list.testimage}`} width={50} height={50} ></img>
            <div className='trek-search-field-name'>{list.name} </div>
          </div>
             ))} */}
          </div>
          </div>
          </div>
        <div className='trek-recom'>
          
          <div className='trek-recom-title'>Recommended Treks </div>
    
          <Trekslider  slides={recommendedtreks} />
      </div>
   
      <div className='trek-recom'>
          <div className='trek-recom-title'>Long Treks </div>
           <Slider {...settings} useRef={sliderRef} >
 <div className='trek-card'>
     
        <img  className='trek-card-img' ></img>
        <div className='trek-card-body' >
        <div className='trek-card-title'>Kudremukha Trek</div>
        <div className='trek-card-loca'>
          <div className='trek-card-loca1'><div className='trek-card-loca-icon' ><GrLocation className='trek-card-loca-icon'/></div>Karnataka
          <div  className='trek-card-day'><div className='trek-card-loca-icon' ><CiClock2 /></div>2D/2N</div>
          </div>
        </div>
        <div className='trek-card-date'>July 21,2023(Friday)</div>
        </div>
        <div className='trek-card-total' >
          <div className='trek-card-person'>Per Person</div>
          <div className='trek-card-amount'><div className='trek-card-amount-icon'><BiRupee /></div>3799</div>
        </div>
      </div>
      <div className='trek-card'>
     
     <img  className='trek-card-img' ></img>
     <div className='trek-card-body' >
     <div className='trek-card-title'>Kurinjal Trek</div>
     <div className='trek-card-loca'>
       <div className='trek-card-loca1'><div className='trek-card-loca-icon' ><GrLocation className='trek-card-loca-icon'/></div>Karnataka
       <div  className='trek-card-day'><div className='trek-card-loca-icon' ><CiClock2 /></div>2D/2N</div>
       </div>
     </div>
     <div className='trek-card-date'>July 21,2023(Friday)</div>
     </div>
     <div className='trek-card-total' >
       <div className='trek-card-person'>Per Person</div>
       <div className='trek-card-amount'><div className='trek-card-amount-icon'><BiRupee /></div>3799</div>
     </div>
   </div>
   <div className='trek-card'>
     
     <img  className='trek-card-img' ></img>
     <div className='trek-card-body' >
     <div className='trek-card-title'>Nethravathi Trek</div>
     <div className='trek-card-loca'>
       <div className='trek-card-loca1'><div className='trek-card-loca-icon' ><GrLocation className='trek-card-loca-icon'/></div>Karnataka
       <div  className='trek-card-day'><div className='trek-card-loca-icon' ><CiClock2 /></div>2D/2N</div>
       </div>
     </div>
     <div className='trek-card-date'>July 21,2023(Friday)</div>
     </div>
     <div className='trek-card-total' >
       <div className='trek-card-person'>Per Person</div>
       <div className='trek-card-amount'><div className='trek-card-amount-icon'><BiRupee /></div>3799</div>
     </div>
   </div>
   <div className='trek-card'>
     
     <img  className='trek-card-img' ></img>
     <div className='trek-card-body' >
     <div className='trek-card-title'>Bramagiri Trek</div>
     <div className='trek-card-loca'>
       <div className='trek-card-loca1'><div className='trek-card-loca-icon' ><GrLocation className='trek-card-loca-icon'/></div>Kerala
       <div  className='trek-card-day'><div className='trek-card-loca-icon' ><CiClock2 /></div>2D/2N</div>
       </div>
     </div>
     <div className='trek-card-date'>July 21,2023(Friday)</div>
     </div>
     <div className='trek-card-total' >
       <div className='trek-card-person'>Per Person</div>
       <div className='trek-card-amount'><div className='trek-card-amount-icon'><BiRupee />3799</div></div>
     </div>
   </div>
   </Slider>
      </div>
      <div className='trek-recom'>
          <div className='trek-recom-title'>Short Treks </div>
          <Slider {...settings} useRef={sliderRef} >
 <div className='trek-card'>
     
        <img className='trek-card-img' ></img>
        <div className='trek-card-body' >
        <div className='trek-card-title'>Tandiandamol Trek</div>
        <div className='trek-card-loca'>
          <div className='trek-card-loca1'><div className='trek-card-loca-icon' ><GrLocation className='trek-card-loca-icon'/></div>Karnataka
          <div  className='trek-card-day'><div className='trek-card-loca-icon' ><CiClock2 /></div>2D/1N</div>
          </div>
        </div>
        <div className='trek-card-date'>July 21,2023(Friday)</div>
        </div>
        <div className='trek-card-total' >
          <div className='trek-card-person'>Per Person</div>
          <div className='trek-card-amount'><div className='trek-card-amount-icon'><BiRupee /></div>3799</div>
        </div>
      </div>
      <div className='trek-card'>
     
     <img className='trek-card-img' ></img>
     <div className='trek-card-body' >
     <div className='trek-card-title'>Ethina Bhuja Mansoon Trek</div>
     <div className='trek-card-loca'>
       <div className='trek-card-loca1'><div className='trek-card-loca-icon' ><GrLocation className='trek-card-loca-icon'/></div>Karnataka
       <div  className='trek-card-day'><div className='trek-card-loca-icon' ><CiClock2 /></div>2D/1N</div>
       </div>
     </div>
     <div className='trek-card-date'>July 21,2023(Friday)</div>
     </div>
     <div className='trek-card-total' >
       <div className='trek-card-person'>Per Person</div>
       <div className='trek-card-amount'><div className='trek-card-amount-icon'><BiRupee /></div>3600</div>
     </div>
   </div>
   <div className='trek-card'>
     
     <img className='trek-card-img' ></img>
     <div className='trek-card-body' >
     <div className='trek-card-title'>Skandagiri Trek</div>
     <div className='trek-card-loca'>
       <div className='trek-card-loca1'><div className='trek-card-loca-icon' ><GrLocation className='trek-card-loca-icon'/></div>Karnataka
       <div  className='trek-card-day'><div className='trek-card-loca-icon' ><CiClock2 /></div>1D/1N</div>
       </div>
     </div>
     <div className='trek-card-date'>July 21,2023(Friday)</div>
     </div>
     <div className='trek-card-total' >
       <div className='trek-card-person'>Per Person</div>
       <div className='trek-card-amount'><div className='trek-card-amount-icon'><BiRupee /></div>1499</div>
     </div>
   </div>
   <div className='trek-card'>
     
     <img className='trek-card-img' ></img>
     <div className='trek-card-body' >
     <div className='trek-card-title'>Huttari Betta Trek</div>
     <div className='trek-card-loca'>
       <div className='trek-card-loca1'><div className='trek-card-loca-icon' ><GrLocation className='trek-card-loca-icon'/></div>Karnataka
       <div  className='trek-card-day'><div className='trek-card-loca-icon' ><CiClock2 /></div>1D/1N</div>
       </div>
     </div>
     <div className='trek-card-date'>July 21,2023(Friday)</div>
     </div>
     <div className='trek-card-total' >
       <div className='trek-card-person'>Per Person</div>
       <div className='trek-card-amount'><div className='trek-card-amount-icon'><BiRupee /></div>999</div>
     </div>
   </div>
   <div className='trek-card'>
     
     <img className='trek-card-img' ></img>
     <div className='trek-card-body' >
     <div className='trek-card-title'>Paithalmala Trek</div>
     <div className='trek-card-loca'>
       <div className='trek-card-loca1'><div className='trek-card-loca-icon' ><GrLocation className='trek-card-loca-icon'/></div>Kerala
       <div  className='trek-card-day'><div className='trek-card-loca-icon' ><CiClock2 /></div>2D/2N</div>
       </div>
     </div>
     <div className='trek-card-date'>July 21,2023(Friday)</div>
     </div>
     <div className='trek-card-total' >
       <div className='trek-card-person'>Per Person</div>
       <div className='trek-card-amount'><div className='trek-card-amount-icon'><BiRupee /></div>4999</div>
     </div>
   </div>
   </Slider>
   {/* </Carousel> */}
{/*   
      </Carousel> */}

      </div>
      <div className='trek-recom'>
          <div className='trek-recom-title'>Waterfall Treks </div>
          {/* <Carousel isRTL={false} itemPadding={[10, 10]} breakPoints={breakPoints}  className=''   showEmptySlots > */}
          {/* <Carousel swipeable={true}
  draggable={true}
  responsive={responsive}
    customLeftArrow={<ArrowLeft />}
          customRightArrow={<ArrowRight />}
        > */}
          <Slider {...settings} useRef={sliderRef} >
 <div className='trek-card'>
     
        <img className='trek-card-img' ></img>
        <div className='trek-card-body' >
        <div className='trek-card-title'>Bandaje Falls Trek</div>
        <div className='trek-card-loca'>
          <div className='trek-card-loca1'><div className='trek-card-loca-icon' ><GrLocation className='trek-card-loca-icon'/></div>Karnataka
          <div  className='trek-card-day'><div className='trek-card-loca-icon' ><CiClock2 /></div>2D/2N</div>
          </div>
        </div>
        <div className='trek-card-date'>July 21,2023(Friday)</div>
        </div>
        <div className='trek-card-total' >
          <div className='trek-card-person'>Per Person</div>
          <div className='trek-card-amount'><div className='trek-card-amount-icon'><BiRupee /></div>3799</div>
        </div>
      </div>
      <div className='trek-card'>
     
     <img className='trek-card-img' ></img>
     <div className='trek-card-body' >
     <div className='trek-card-title'>Kodachadri Trek</div>
     <div className='trek-card-loca'>
       <div className='trek-card-loca1'><div className='trek-card-loca-icon' ><GrLocation className='trek-card-loca-icon'/></div>Karnataka
       <div  className='trek-card-day'><div className='trek-card-loca-icon' ><CiClock2 /></div>2D/2N</div>
       </div>
     </div>
     <div className='trek-card-date'>July 21,2023(Friday)</div>
     </div>
     <div className='trek-card-total' >
       <div className='trek-card-person'>Per Person</div>
       <div className='trek-card-amount'><div className='trek-card-amount-icon'><BiRupee /></div>3800</div>
     </div>
   </div>
   <div className='trek-card'>
     
     <img className='trek-card-img' ></img>
     <div className='trek-card-body' >
     <div className='trek-card-title'>Dudhsagar Trek and Dandeli Exploration</div>
     <div className='trek-card-loca'>
       <div className='trek-card-loca1'><div className='trek-card-loca-icon' ><GrLocation className='trek-card-loca-icon'/></div>Karnataka
       <div  className='trek-card-day'><div className='trek-card-loca-icon' ><CiClock2 /></div>2D/1N</div>
       </div>
     </div>
     <div className='trek-card-date'>July 21,2023(Friday)</div>
     </div>
     <div className='trek-card-total' >
       <div className='trek-card-person'>Per Person</div>
       <div className='trek-card-amount'><div className='trek-card-amount-icon'><BiRupee /></div>4999</div>
     </div>
   </div>
   <div className='trek-card'>
     
     <img className='trek-card-img' ></img>
     <div className='trek-card-body' >
     <div className='trek-card-title'>Bilikal Trek</div>
     <div className='trek-card-loca'>
       <div className='trek-card-loca1'><div className='trek-card-loca-icon' ><GrLocation className='trek-card-loca-icon'/></div>Kerala
       <div  className='trek-card-day'><div className='trek-card-loca-icon' ><CiClock2 /></div>2D/2N</div>
       </div>
     </div>
     <div className='trek-card-date'>July 21,2023(Friday)</div>
     </div>
     <div className='trek-card-total' >
       <div className='trek-card-person'>Per Person</div>
       <div className='trek-card-amount'><div className='trek-card-amount-icon'><BiRupee /></div>3799</div>
     </div>
   </div>
   <div className='trek-card'>
     
     <img className='trek-card-img' ></img>
     <div className='trek-card-body' >
     <div className='trek-card-title'>Arisinagundi Falls Trek</div>
     <div className='trek-card-loca'>
       <div className='trek-card-loca1'><div className='trek-card-loca-icon' ><GrLocation className='trek-card-loca-icon'/></div>Karnataka
       <div  className='trek-card-day'><div className='trek-card-loca-icon' ><CiClock2 /></div>2D/2N</div>
       </div>
     </div>
     <div className='trek-card-date'>July 21,2023(Friday)</div>
     </div>
     <div className='trek-card-total' >
       <div className='trek-card-person'>Per Person</div>
       <div className='trek-card-amount'><div className='trek-card-amount-icon'><BiRupee /></div>3799</div>
     </div>
   </div>
   <div className='trek-card'>
     
     <img className='trek-card-img' ></img>
     <div className='trek-card-body' >
     <div className='trek-card-title'>Agumbe Trek</div>
     <div className='trek-card-loca'>
       <div className='trek-card-loca1'><div className='trek-card-loca-icon' ><GrLocation className='trek-card-loca-icon'/></div>Karnataka
       <div  className='trek-card-day'><div className='trek-card-loca-icon' ><CiClock2 /></div>2D/2N</div>
       </div>
     </div>
     <div className='trek-card-date'>July 21,2023(Friday)</div>
     </div>
     <div className='trek-card-total' >
       <div className='trek-card-person'>Per Person</div>
       <div className='trek-card-amount'><div className='trek-card-amount-icon'><BiRupee /></div>3799</div>
     </div>
   </div>
   </Slider>
 
      </div>
      <Footer />
    </div>
    
  )
}


export default Trek
