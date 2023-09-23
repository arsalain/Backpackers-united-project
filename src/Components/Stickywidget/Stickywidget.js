import React from 'react'
import { IoLogoWhatsapp} from "react-icons/io"
import { AiTwotonePhone} from "react-icons/ai"
import { BsInstagram} from "react-icons/bs"
import {Link} from "react-router-dom"
import "./stickywidget.css"

const Stickywidget = () =>{
    const phoneNumber = "+91 8310180586"
    return (
        <div className="widget-icons-body">
           <div className="widget-icons">
           <div className="widget-WhatsApp"><Link to='https://api.whatsapp.com/send/?phone=918310180586&text&type=phone_number&app_absent=0' className='w-link-whatsapp'><IoLogoWhatsapp className="widget-whatsappicon"/></Link></div>
           </div>
           <div className="widget-icons1">
           <div className="widget-Phone"><Link to={`tel:${phoneNumber}`} className='w-link-phone' ><AiTwotonePhone className="widget-whatsappicon"/></Link></div>
           </div>
           <div className="widget-icons2">
           <div className="widget-Instagram" ><Link to='https://www.instagram.com/backpackers_united_/'className='w-link-insta' ><BsInstagram className="widget-whatsappicon"/></Link></div>
           </div>       
        </div>
    )
}
export default Stickywidget