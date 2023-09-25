import React from 'react'
import "./destchoose.css"
import {GiReceiveMoney,GiWavyItinerary} from "react-icons/gi"
import {TbUserStar} from "react-icons/tb"
import {MdHealthAndSafety} from "react-icons/md"
const Destchoose = () => {
  return (
    <div className='dest-ch-body' >
    <div className='dest-ch'>
      <div className='dest-ch-title'> Why Choose Us
      </div>
      <div className='dest-ch-main'>
        <div className='dest-ch-card-main' >
        <div className='dest-ch-card'>
           <div className='dest-ch-card-icon' ><TbUserStar className='dest-ch-card-icon1'/></div>
           <div className='dest-ch-card-name' >Experience and Expertise</div>
           <div className='dest-ch-card-name1'>With years in the travel industry, 
           we've mastered the art of crafting unforgettable adventures for our clients. 
           Our expertise ensures your trip is seamless from start to finish.</div>
        </div>
        <div className='dest-ch-card'>
        <div className='dest-ch-card-icon' ><GiReceiveMoney className='dest-ch-card-icon1'/></div>
           <div className='dest-ch-card-name' >Value for Money</div>
           <div className='dest-ch-card-name1'>We negotiate the best deals and take 
           advantage of our strong industry partnerships, ensuring you get the most 
           bang for your buck.</div>
        </div>
        </div>
        <div  className='dest-ch-card-main'>
        <div className='dest-ch-card'>
        <div className='dest-ch-card-icon' ><MdHealthAndSafety className='dest-ch-card-icon1'/></div>
           <div className='dest-ch-card-name' >Safety First</div>
           <div className='dest-ch-card-name1'>Your safety is our top priority. 
           We keep up-to-date with global travel advisories and are in constant 
           communication with our ground operators in every destination.</div>
        </div>
        <div className='dest-ch-card'>
        <div className='dest-ch-card-icon' ><GiWavyItinerary className='dest-ch-card-icon1'/></div>
           <div className='dest-ch-card-name' >Personalized Itineraries</div>
           <div className='dest-ch-card-name1'>We believe that every traveler is 
           unique. Our dedicated team tailors each itinerary to match your 
           individual interests and preferences.</div>
        </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Destchoose