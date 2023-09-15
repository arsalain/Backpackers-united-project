import React,{useState,useRef} from 'react'
import "./trekpage.css"
import Navbar2 from '../../Components/Nav/Navbar/Navbar2'
import {LuClock9} from "react-icons/lu"
import {GiLevelThree} from "react-icons/gi"
import {IoMdArrowDropdown,IoMdArrowDropup} from "react-icons/io"
import {FaLocationDot} from "react-icons/fa6"
import {TbPointFilled,TbPoint} from "react-icons/tb"
import kudremukh from "../../Images/Kudremukha.png"
import kud from "../../Image/kudremukhmain.jpeg"
import stay from "../../Images/satishmullodistay.jpg"
import KudremukhSight from "../../Images/KudremukhSight.jpg"
import jeepride from "../../Images/kudremukhjeep.jpg"
import view from "../../Images/Bhamikonda.jpg"
import somawathi from "../../Images/somawathifalls.JPG"
import netravathi from "../../Images/Nethravathi.png"
import tandiamol from "../../Images/thandiamol.jpg"
import gokarna from "../../Images/gokarna.jpg"
import Review from '../../Components/Product/Reviews/Review'
import Footer from "../../Components/Nav/Footer/Footer"

import Gallery from '../../Components/Product/Galeery/Gallery'
import Productfaq from '../../Components/Product/Faq/Productfaq'
const Huttari = () => {
    const [toggleState, setToggleState] = useState(1);
    const [show,setShow] = useState(false)
    const [show1,setShow1] = useState(false)
    const [show2,setShow2] = useState(false)
    const ref = useRef(null);

    const handleScroll = () => {
      ref.current?.scrollIntoView({ behavior: 'smooth' });
    };
    const data = [
      {
        id:"/blogs/22",
        imgSrc: view,
        title: "dolor sit amet",
        para: "Suspendisse semper felis et massa feugiat, sed scelerisque velit cursus"
      },
      {
        id:"/blogs/23",
        imgSrc: KudremukhSight,
        title: "consectetur ",
        para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      },
      {
        id:"/blogs/24",
        imgSrc: jeepride,
        title: "adipiscing",
        para: "Donec sed tellus nec metus consequat pharetra. "
      },
      
    ]
    const Gdata = [
      {
        id:1,
        Gimg: jeepride,
        Gname: "deserunt mollit ",
        Gpara: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo"
      },
      {
        id:2,
        Gimg: jeepride,
        Gname: "Jeep Ride",
        Gpara: "laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae"
      },
      {
        id:3,
        Gimg: jeepride,
        Gname: "deserunt mollit ",
        Gpara: "dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit "
      },
      {
        id:4,
        Gimg: jeepride,
        Gname: "deserunt mollit ",
        Gpara: "sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro"
      },
      {
        id:5,
        Gimg: jeepride,
        Gname: "deserunt mollit ",
        Gpara: "quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed "
      },
      {
        id:6,
        Gimg: jeepride,
        Gname: "deserunt mollit ",
        Gpara: "quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, "
      },
      {
        id:7,
        Gimg: jeepride,
        Gname: "deserunt mollit ",
        Gpara: "quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea "
      },
      {
        id:8,
        Gimg: jeepride,
        Gname: "deserunt mollit",
        Gpara: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque"
      },
    ]
    const toggleTab = (index) => {
        setToggleState(index);
      };
      const handleShow = () =>{
        setShow(!show)
      }
      const handleShow1 = () =>{
        setShow1(!show1)
      }
      const handleShow2 = () =>{
        setShow2(!show2)
      }
  return (
    <>
    
    <div >
    
    <div className='product-img'>
        <img src={kud} className='product-img-main' />
      <div className='product-img-body'>
        <Navbar2 />
        <div className='product-title-body' >
          <div className='product-body-contain'>
        <div className='product-img-title' >Huttari Betta Trek</div>
        <div className='product-title-time' ><FaLocationDot className='product-title-icon' ></FaLocationDot><div >Karnataka</div>
        <LuClock9 className='product-title-icon1'></LuClock9><div >1 Day 1 Night</div>
        <GiLevelThree className='product-title-icon1'></GiLevelThree><div >Difficulty - Easy</div></div>
        <div className='prodeuct-title-para' >"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
        sunt in culpa qui officia deserunt mollit anim id est laborum."</div>
          <div className='product-iternary-left-but'><button className='product-iternary-left-but-bt'>Dowload PDF</button></div>
          </div>
        </div>
        </div>
        </div>
        <div className='product-iternary' >
            <div className='product-iternary-left' >
                <div className='product-iternary-left-line' ></div>
                <div className='product-iternary-left-title'>Itinerary</div>
                <div className='product-iternary-left-day'>
                <div className='product-iternary-left-day0' onClick={handleShow}><div >Day 0 - Bangalore to Kudremukh</div>
                <div  className='product-iternary-left-day0-but'>
                  {show ? <IoMdArrowDropup className='product-iternary-left-day0-icon' />: 
                  <IoMdArrowDropdown className='product-iternary-left-day0-icon' />}
                  </div></div>
               

                {
                  show ?  <div className='product-iternary-left-day0-body' >
                  <div className='product-iternary-left-day0-title'>
                <div >Transfers from bangalore to Kudremukh via Bus</div></div> 
                  <div className='product-iternary-left-day0-point'>
                 <TbPointFilled className='product-iternary-left-day0-point-icon'>
                  </TbPointFilled> <div className='product-iternary-left-day0-point-text'>On Friday, Get picked up in Bangalore from the following points and start your Kudremukh trekking tour.</div></div> 
                  <div className='product-iternary-left-day0-point'>
                 <TbPointFilled className='product-iternary-left-day0-point-icon' >
                  </TbPointFilled> <div className='product-iternary-left-day0-point-text' >The exact pick-up location and time will be confirmed after the booking.</div></div> 
                  <div className='product-iternary-left-day0-point'>
                 <TbPointFilled className='product-iternary-left-day0-point-icon' >
                  </TbPointFilled> <div className='product-iternary-left-day0-point-text'>Pickup locations are:-</div></div> 
                  <div className='product-iternary-left-day0-point-loc'>
                 <TbPoint className='product-iternary-left-day0-point-icon' >
                  </TbPoint> <div >Indiranagar</div></div> 
                  <div className='product-iternary-left-day0-point-loc'>
                 <TbPoint className='product-iternary-left-day0-point-icon' >
                  </TbPoint> <div >Domlur</div></div> 
                  <div className='product-iternary-left-day0-point-loc'>
                 <TbPoint className='product-iternary-left-day0-point-icon' >
                  </TbPoint> <div >Yeshwantpur</div></div> 
                  <div className='product-iternary-left-day0-point-loc'>
                 <TbPoint className='product-iternary-left-day0-point-icon' >
                  </TbPoint> <div >Gorgunte Playa</div></div> 
  
                  </div> :null
                }
                </div>
             
                   
                
            </div>
            <div className='product-iternary-right'></div>
        </div>
        <div className='product-list'>
        <div className="bloc-tabs1" onClick={handleScroll}>
        <button
          className={toggleState === 1 ? "tabs1 active-tabs1" : "tabs1"}
          onClick={() => toggleTab(1) }
        >
           Inclusions/
           <br />Exclusions
       
        </button>
        <button
          className={toggleState === 2 ? "tabs1 active-tabs1" : "tabs1"}
          onClick={() => toggleTab(2)}
        >
           Things to Carry
        </button>
        <button
          className={toggleState === 3 ? "tabs1 active-tabs1" : "tabs1"}
          onClick={() => toggleTab(3)}
        >
           Policy and terms
        </button>
        <button
          className={toggleState === 4 ? "tabs1 active-tabs1" : "tabs1"}
          onClick={() => toggleTab(4)}
        >
            Frequent Questions
        </button>
      </div>

      <div className="content-tabs1" ref={ref}>
        <div
         className={toggleState === 1 ? "content1  active-content1" : "content1"}
        >
            <div className='product-detail-ie1'>
            
            <div  className='product-detail-inclusions' > 
            <div className='product-detail-inclusions1' >Inclusions</div>
            <div className='product-detail-point'>
                 <TbPointFilled className='product-detail-point-icon' >
                  </TbPointFilled> <div className='product-detail-point-text'>Transportation from Bangalore to Bangalore.(non A/C)
                    </div></div> 
                    <div className='product-detail-point'>
                 <TbPointFilled className='product-detail-point-icon' >
                  </TbPointFilled> <div className='product-detail-point-text'>Forest Permits.
                    </div></div> 
                    <div className='product-detail-point'>
                 <TbPointFilled className='product-detail-point-icon' >
                  </TbPointFilled> <div className='product-detail-point-text'>Trek leads from Backpackers United
                    </div></div> 
                    <div className='product-detail-point'>
                 <TbPointFilled className='product-detail-point-icon' >
                  </TbPointFilled> <div className='product-detail-point-text'>Local Guides
                    </div></div> 
                    <div className='product-detail-point'>
                 <TbPointFilled className='product-detail-point-icon' >
                  </TbPointFilled> <div className='product-detail-point-text'>2 Breakfast, 1 Packed Lunch, 1 Dinner
                    </div></div> 
                    <div className='product-detail-point'>
                 <TbPointFilled className='product-detail-point-icon' >
                  </TbPointFilled> <div className='product-detail-point-text'>Local Malnad Food
                    </div></div> 
                    <div className='product-detail-point'>
                 <TbPointFilled className='product-detail-point-icon' >
                  </TbPointFilled> <div className='product-detail-point-text'>Jeep Ride
                    </div></div> 
            </div>
               <div className='product-detail-exclusions'><div className='product-detail-exclusions1'>Exclusions</div>
               <div className='product-detail-point'>
                 <TbPointFilled className='product-detail-point-icon' >
                  </TbPointFilled> <div className='product-detail-point-text'>Lunch on Day 3
                    </div></div> 
                    <div className='product-detail-point'>
                 <TbPointFilled className='product-detail-point-icon' >
                  </TbPointFilled> <div className='product-detail-point-text'>Lunch on Day 3Personal Expenses
                    </div></div> 
                    <div className='product-detail-point'>
                 <TbPointFilled className='product-detail-point-icon' >
                  </TbPointFilled> <div className='product-detail-point-text'>Anything not mentioned in the Inclusions.
                    </div></div> 
          
                 </div>
                </div>
                </div>
                <div
         className={toggleState === 2 ? "content1  active-content1" : "content1"}
        >
                <div className='product-detail-ie1' >
                <div className='product-detail-things'><div className='product-detail-things1'>Things to Carry</div>
                <div className='product-detail-point'>
                 <TbPointFilled className='product-detail-point-icon' >
                  </TbPointFilled> <div className='product-detail-point-text1'>Xerox ID proof (Aadhar or other Gov. ID) 
                    </div></div> 
                    <div className='product-detail-point'>
                 <TbPointFilled className='product-detail-point-icon' >
                  </TbPointFilled> <div className='product-detail-point-text1'>Good trekking shoes 
                    </div></div> 
                    <div className='product-detail-point'>
                 <TbPointFilled className='product-detail-point-icon' >
                  </TbPointFilled> <div className='product-detail-point-text1'>Strong backpack for trekking  
                    </div></div> 
                    <div className='product-detail-point'>
                 <TbPointFilled className='product-detail-point-icon' >
                  </TbPointFilled> <div className='product-detail-point-text1'>Reusable water bottles
                    </div></div> 
                    <div className='product-detail-point'>
                 <TbPointFilled className='product-detail-point-icon' >
                  </TbPointFilled> <div className='product-detail-point-text1'>Clothes for two days
                    </div></div> 
                    <div className='product-detail-point'>
                 <TbPointFilled className='product-detail-point-icon' >
                  </TbPointFilled> <div className='product-detail-point-text1'>Sunscreen,Sunglasses Cap/hat
                    </div></div> 
                    <div className='product-detail-point'>
                 <TbPointFilled className='product-detail-point-icon' >
                  </TbPointFilled> <div className='product-detail-point-text1'>Toiletries
                    </div></div> 
                    <div className='product-detail-point'>
                 <TbPointFilled className='product-detail-point-icon' >
                  </TbPointFilled> <div className='product-detail-point-text1'>Juice packs,Glucon-D,Energy bars
                    </div></div> 
                    <div className='product-detail-point'>
                 <TbPointFilled className='product-detail-point-icon' >
                  </TbPointFilled> <div className='product-detail-point-text1'>A Polybag to carry  wet clothes 
                    </div></div> 
                    <div className='product-detail-point'>
                 <TbPointFilled className='product-detail-point-icon' >
                  </TbPointFilled> <div className='product-detail-point-text1'>Raincoat or a poncho  
                    </div></div> 
                    <div className='product-detail-point'>
                 <TbPointFilled className='product-detail-point-icon' >
                  </TbPointFilled> <div className='product-detail-point-text1'>Personal medication if any.
                    </div></div>   <div className='product-detail-point'>
                 <TbPointFilled className='product-detail-point-icon' >
                  </TbPointFilled> <div className='product-detail-point-text1'>Torch with new batteries.
                    </div></div>   <div className='product-detail-point'>
                 <TbPointFilled className='product-detail-point-icon' >
                  </TbPointFilled> <div className='product-detail-point-text1'>Camera (optional).  
                    </div></div>   <div className='product-detail-point'>
                 <TbPointFilled className='product-detail-point-icon' >
                  </TbPointFilled> <div className='product-detail-point-text1'>Long socks. 
                    </div></div>   <div className='product-detail-point'>
                 <TbPointFilled className='product-detail-point-icon' >
                  </TbPointFilled> <div className='product-detail-point-text1'>Sandals.  
                    </div></div>   <div className='product-detail-point'>
                 <TbPointFilled className='product-detail-point-icon' >
                  </TbPointFilled> <div className='product-detail-point-text1'>Power Bank.  
                    </div></div> 
          </div>
            </div>
            </div>
            <div
         className={toggleState === 3 ? "content1  active-content1" : "content1"}
        >
           <div  className='product-detail-policy' > 
            <div className='product-detail-policy1' >Policy and Terms</div>
            <div className='product-detail-policy-point'>
                 <TbPointFilled className='product-detail-policy-point-icon' >
                  </TbPointFilled> <div className='product-detail-policy-point-text'>If cancellation are made 15 days 
                  before the date of travel then 50.0% of total tour cost will be charged as cancellation fees
                    </div></div> 
                    <div className='product-detail-policy-point'>
                 <TbPointFilled className='product-detail-policy-point-icon' >
                  </TbPointFilled> <div className='product-detail-policy-point-text'>If cancellation are made 7 days 
                  to 15 days before the date of travel then 75.0% of total tour cost will be charged as 
                  cancellation fees
                    </div></div> 
                    <div className='product-detail-policy-point'>
                 <TbPointFilled className='product-detail-policy-point-icon' >
                  </TbPointFilled> <div className='product-detail-policy-point-text'>If cancellation are made 0 days 
                  to 7 days before the date of travel then 100.0% of total tour cost will be charged as 
                  cancellation fees
                    </div></div> 
                    </div>
                    
            </div>
            <div
         className={toggleState === 4 ? "content1  active-content1" : "content1"}
        >  <div className='product-detail-question' >
            <div className='product-detail-question-title'>Frequently Asked Questions</div>
           <div className='product-detail-question-faq' >
      <Productfaq title="How can I reserve my slot ?" content="You can directly reserve your slots by booking on the website, please ensure proper dates are selected before confirming your booking." />
      <Productfaq title="Is it safe for Women travellers ?" content="Safety and Security Guidelines are followed at all times, and it is our topmost priority.
We have certified trek leads (Male/Female) accompanying the participants at all times and our stay follows well-rounded safety measures." />
      <Productfaq title="What payment options do I have ?" content="We have multiple payment options on the website, you can also contact us and pay directly via UPI to avoid payment gateway charges." />
      <Productfaq title="I am a Solo Traveller, can I join the Group ?" content="Yes, our trips are designed to ensure that every traveler gets to experience the Nature, Culture, Heritage, and beauty of the place.
       We are one of the best community travel groups in India." />
      </div> 
            </div>
            </div>
            </div>
        </div>
        <div className='product-gal'>
          <div className='product-gal-head-title'>Travel Plan</div>
          <div className='product-gal-head-title1'>A weekend in Huttari Betta</div>
      
          
        <Gallery  slides={Gdata} />
        </div>
       
        <div className='similar-body'>
        <div className='similar-body-intro-line'></div>
            <div className='similar-intro'>
              <div className='similar-intro-title' >
              Huttari Betta Inspiration
              </div>
              <div className='similar-intro-line'></div>
              <div className='similar-intro-para'>Everyone likes to travel in their own way and we brace it but 
                Travel enriches the mind and educates us far beyond any textbook or 
                travel guide.See below some suggestions we have crafted for you.
</div>
            </div>
            <div className='similar-card-body'>
              <div className='similar-card-left' >
                <img src={netravathi} className='similar-card-left-img'></img>
                <div className='similar-card-left-line'></div>
                <div className='similar-card-left-title' >Nethravathi Trek</div>
                <div className='similar-card-left-para' >Nethravathi Peak is in between the districts of Chikmagalur 
                in Karnataka and Belthangadi Taluk in Dakshina Kannada
                at a height of 1520-meter.Due to its biodiversity, it is a part of the Western Ghat range.</div>
                <div ><button className='similar-card-left-but'>Explore</button></div>
              </div>
              <div className='similar-card-center' >
                <img src={tandiamol} className='similar-card-center-img'></img>
                <div className='similar-card-center-line'></div>
                <div className='similar-card-center-title' >Tadiandamol Trek</div>
                <div className='similar-card-center-para' >Tadiandamol is a trekker's paradise.
                 Located at an elevation of 1,748 m, the gentle slopes and grassy terrain lure you with 
                 their scenic charm and serene ambience.</div>
                <div ><button className='similar-card-center-but'>Explore</button></div>
              </div>
              <div className='similar-card-right' >
                <img src={gokarna} className='similar-card-right-img'></img>
                <div className='similar-card-right-line'></div>
                <div className='similar-card-right-title' >Gokarna beach trek</div>
                <div className='similar-card-right-para' >It has five major beaches which have clean water, 
                gentle waves and amazing views. There are lush green hills in between these 
                beaches which makes Gokarna an even more interesting place to visit.
                </div>
                <div ><button className='similar-card-right-but'>Explore</button></div>
              </div>
    
            </div>
        </div>
        <div className='reviews-body'>
          <Review  slides={data} />
            <div className='reviews-right'>
            <div className='reviews-right-line'></div>
                <div className='reviews-right-title' >Epic Stories</div>
                <div className='reviews-right-para' >Read our journal of eclectic stories, journeys and discoveries. 
                If you have any of your own, let us know!</div>
            </div>
        </div>
        <Footer />
        </div>
    
        </>
  )
}

export default Huttari 
