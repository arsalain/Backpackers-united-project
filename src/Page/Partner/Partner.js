import React from 'react'
import Navbar1 from '../../Components/Nav/Navbar/Navbar1'
import "./partner.css"
import {GiPolarStar} from "react-icons/gi"
import cp from "../../Images/contact.jpg"
import Navbar2 from '../../Components/Nav/Navbar/Navbar2'

const Partner = () => {
  return (
    
        <div className='PARTNER WITH US '>
        <Navbar2 />
     <div className='partner-head'>
        
        <div className='partner-head-title'>Partner With Us</div>
        
        
        </div> 
        <div className='partner-body'>
    <div className='partner-body-para1'>Discover the power of partnership with Backpackers United, India's premier platform for unforgettable adventure experiences. We're growing, and we're inviting you to be a part of our journey.
</div>

<div className='partner-body-para3'>Are you a provider of exciting adventure experiences like Trekking, Rafting, Paragliding, Rock-Climbing, Safaris, Camping, or Outdoor Holidays? If so, Backpackers United is your ideal partner. We prioritize guest satisfaction and offer comprehensive scrutiny of your operations to ensure safety, quality, and sustainability.

</div>
<div className='partner-body-para3'>Join hands with us, and let our team of experts evaluate your property or adventure program. We assess operations on crucial factors such as safety standards, excellence in services, and exceptional customer care. Our goal is to ensure that our guests enjoy experiences that meet our stringent parameters for hospitality and sustainability.


</div>
<div className='partner-body-para3'>If you believe your adventure operation aligns with our high standards and commitment to safety and customer satisfaction, we'd love to hear from you.


</div>
<div className='partner-body-para3'>Send your detailed profile to info@backpackersunited.in today. Let's explore the possibilities of adventure together and create unforgettable experiences for our guests. Stand out in the adventure tourism industry with Backpackers United.


</div>

</div>
<div className='partner-form-row'>
<div className='partner-form'>
        <div className='partner-title'>Reach Out to Us</div>
            <div className='partner-form-name'>
                <div className='partner-form-title' >Full Name <GiPolarStar className='partner-form-name-icon'></GiPolarStar></div>
                <input type="text" name="fname" placeholder='Enter Name' ></input>
            </div>
            <div className='partner-form-email'>
                <div className='partner-form-title'  >Email ID <GiPolarStar className='partner-form-email-icon'></GiPolarStar></div>
                <input type="email" name="fname" placeholder='Enter Email'  ></input>
            </div>
            <div className='partner-form-number'>
                <div className='partner-form-title'  >Mobile Number <GiPolarStar className='partner-form-number-icon'></GiPolarStar></div>
                <input type="tel" name="fname" placeholder='Enter Phone Number'  ></input>
            </div>
            <div className='partner-form-area'>
                <div className='partner-form-title1'  >Message</div>
                <textarea className='partner-form-text-area'/>
             </div>
          
             <div className='partner-form-button'><button className='partner-form-but'>Submit</button></div> 
            </div>
             <div >
             <img src={cp} className='partner-image' ></img>
             </div>
       
</div>



        

    </div>

  )
}

export default Partner;