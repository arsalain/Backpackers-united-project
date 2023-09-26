import React from "react";
import "./Footer.css"
import {ImFacebook2} from "react-icons/im"
import {AiOutlineTwitter,AiFillInstagram} from "react-icons/ai"
import { IoLogoWhatsapp} from "react-icons/io"
import { AiTwotonePhone} from "react-icons/ai"
import { BsInstagram} from "react-icons/bs"
import {GrInstagram} from "react-icons/gr"
import {Link} from "react-router-dom";
import bplog from "../../../Images/bplogo.jpg"
const Footer = () => {
  const phoneNumber = "+91 8310180586"
return (
  <div className="f-body-main" >
    <div className="f-body">

        <div className="f-head">
          <div className="f-bottom">
            <div className="f-logo">
            <Link to='/' className="f-logo-link">  <img className="f-img" src={bplog}></img> </Link>
        <div className="f-left">
      <div className="f-logo-name-main">
      <Link to='/' className="f-logo-link"><div className="f-name">BACKPACKERS</div>
        <div className="f-name1">UNITED</div> </Link>
        </div>
        <div className="f-name2" >Book your trip in minute, get full
            Control for much longer</div>
      </div>
      </div>
      <div className="f-footer">
                <div className="f-dot"><Link to='https://api.whatsapp.com/send/?phone=918310180586&text&type=phone_number&app_absent=0' className="f-dot-icon"><IoLogoWhatsapp /></Link></div>
                <div className="f-dot1"><Link to={`tel:${phoneNumber}`} className="f-dot-icon" ><AiTwotonePhone /></Link></div>
                <div className="f-dot1"><Link to='https://www.instagram.com/backpackers_united_/'className="f-dot-icon1" ><BsInstagram /></Link></div>
                </div>
      </div>
      <div className="f-mid-main">
            <div className="f-mid">
                <div className="f-mid-name">Company</div>
                <div className="f-mid-sub"> <Link to="/about"style={{ textDecoration: 'none' , color: "white"}} >
                About
        </Link></div>
                <div className="f-mid-sub"><Link to='/destination' style={{ textDecoration: 'none' , color: "white"}}  >Destinations</Link></div>
                <div className="f-mid-sub"><Link to='/career' style={{ textDecoration: 'none' , color: "white"}}  >Careers</Link></div>
                </div>
                <div className="f-mid">
                <div className="f-mid-name">Contact</div>
                <div className="f-mid-sub"><Link to='/helpfaq' style={{ textDecoration: 'none' , color: "white"}}  >Help/FAQ</Link></div>
                <div className="f-mid-sub"><Link to='/contact' style={{ textDecoration: 'none' , color: "white"}} >Contact Us</Link></div>
                <div className="f-mid-sub"><Link to='/partner' style={{ textDecoration: 'none' , color: "white"}}  >Partner With Us</Link></div>
                </div>
                <div className="f-mid">
                <div className="f-mid-name">More</div>
                <div className="f-mid-sub"><Link to='/privacypolicy' style={{ textDecoration: 'none' , color: "white"}} >Privacy Policy</Link></div>
                <div className="f-mid-sub"><Link to='/terms&condition' style={{ textDecoration: 'none' , color: "white"}} >Terms and Condition</Link></div>
                <div className="f-mid-sub"><Link to='/copyrightpolicy' style={{ textDecoration: 'none' , color: "white"}}  >Copyright Policy</Link></div>
                </div>
                </div>
                <div className="f-form">
                  <form >
                    <div className="f-form-title">Get in Touch</div>
                    <div className="f-form-input-body" >
                      <input className="f-form-input" name="name" placeholder="Enter your Name"/>
                    </div>
                    <div className="f-form-input-body" >
                      <input className="f-form-input" name="name" placeholder="Enter your Phone No."/>
                    </div>
                    <div className="f-form-input-body" >
                      <input className="f-form-input" name="name" placeholder="Where you want to go"/>
                    </div>
                    <div className="f-form-but-body" >
                      <button className="f-form-but" type="submit">Submit</button>
                      </div>
                  </form>
                </div>
                
              
      </div>
     
        </div>
        <div className="f-end"> All rights reserved@backpackersunited.in</div>
        </div>
)
    
}

export default Footer;