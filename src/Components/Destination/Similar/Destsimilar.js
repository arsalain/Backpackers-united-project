import React from 'react'
import "./destsimilar.css"
import wayanad from "../../../Images/destwayanad.jpg"
import kodaikanol from "../../../Images/kodaikanol.jpeg"
import Kudremukh from "../../../Images/Kudremukha.png"
import nethravathi from "../../../Images/Nethravathi.png"
import Paithalamala from "../../../Images/paithalamala.jpg"
import dudhsagar from "../../../Images/dudhsagar.jpg"
import kodachadri from "../../../Images/kodachadri.jpg"
import gokarna from "../../../Images/gokarna.jpeg"
import dandeli from "../../../Images/dandeli.jpg"
import chikmangalur from "../../../Images/chikmangalur.jpg"
import coorg from "../../../Images/destcoorg.jpeg"
import {FaClock} from "react-icons/fa"
import {BiRupee} from "react-icons/bi"
import {ImLocation} from "react-icons/im"

import Footer from '../../Nav/Footer/Footer'
import Destsimilarimg from './Destsimilarimg'



const Destsimilar = () => {

const Ddata = [
  {
    name:"Nethravathi Trek",
    Dimg: nethravathi
  },
  {
    name:"Chikmagalur Tour",
    Dimg: chikmangalur
  },
  {
    name:"Paithalamala Trek",
    Dimg: Paithalamala
  },
  {
    name:"Dhudsagar Trek",
    Dimg: dudhsagar
  },
  {
    name:"Dandeli Tour",
    Dimg: dandeli
  }
  ,
  {
    name:"Kodachadri Trek",
    Dimg: kodachadri
  }
  ,
  {
    name:"Coorg Tour",
    Dimg: coorg
  }  
  
]
  return (
    <div >
    <div className='dest-sim'>
      <div className='dest-sim-title' ><h1 >Weekend Gateways</h1></div>
      <div className='dest-sim-cont'>
        <div className='dest-sim-card'>
            <img src={wayanad} className='dest-sim-card-img'/>
            <div className='dest-sim-card-name' >Wayanad Tour</div>
            <div className='dest-sim-card-amount'>
            <div className='dest-sim-card-t'><ImLocation className='dest-sim-card-t-icon'/>Kerala
                </div>
                <div className='dest-sim-card-t1'><FaClock className='dest-sim-card-t-icon'/>2D/1N
                </div>
                <div className='dest-sim-card-t2'><BiRupee />5999
                </div>
              
            </div>
            <div className='dest-sim-card-bt'><button className='dest-sim-card-but'>View Details</button>
            <button className='dest-sim-card-but1'>Book Now</button></div>
        </div>
        <div className='dest-sim-card'>
            <img src={Kudremukh} className='dest-sim-card-img'/>
            <div >
            <div className='dest-sim-card-name' >Kudremukha Trek</div>
            </div>
            <div className='dest-sim-card-amount1'>
            <div className='dest-sim-card-t'><ImLocation className='dest-sim-card-t-icon'/>Karnataka
                </div>
                <div className='dest-sim-card-t1'><FaClock className='dest-sim-card-t-icon' />2D/1N
                </div>
                <div className='dest-sim-card-t2'><BiRupee />3799
                </div>
              
            </div>
            <div className='dest-sim-card-bt'><button className='dest-sim-card-but'>View Details</button>
            <button className='dest-sim-card-but1'>Book Now</button></div>
        </div>
        <div className='dest-sim-card'>
            <img src={kodaikanol} className='dest-sim-card-img'/>
            <div className='dest-sim-card-name' >Kodaikanal Tour</div>
            <div className='dest-sim-card-amount2'>
            <div className='dest-sim-card-t'><ImLocation className='dest-sim-card-t-icon'/>Tamil Nadu
                </div>
                <div className='dest-sim-card-t1'><FaClock className='dest-sim-card-t-icon' />2D/1N
                </div>
                <div className='dest-sim-card-t2'><BiRupee />6499
                </div>
              
            </div>
            <div className='dest-sim-card-bt'><button className='dest-sim-card-but'>View Details</button>
            <button className='dest-sim-card-but1'>Book Now</button></div>
        </div>
      </div>
          <div className='dest-sim-slide'>
          <h1> Plan Your Next Holiday</h1>
          <Destsimilarimg  slides={Ddata} />
         
  
        </div>
        </div>
        <Footer />
        </div >
  
  )
}

export default Destsimilar