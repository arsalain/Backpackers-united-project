import React from 'react'
import { IoLogoWhatsapp} from "react-icons/io"
import { AiTwotonePhone} from "react-icons/ai"
import { BsInstagram} from "react-icons/bs"
import "./stickywidget.css"

const Stickywidget = () =>{
    return (
        <div className="widget-icons-body">
           <div className="widget-icons">
           <div className="widget-WhatsApp"><IoLogoWhatsapp className="widget-whatsappicon"/></div>
           </div>
           <div className="widget-icons1">
           <div className="widget-Phone"><AiTwotonePhone className="widget-whatsappicon"/></div>
           </div>
           <div className="widget-icons2">
           <div className="widget-Instagram"><BsInstagram className="widget-whatsappicon"/></div>
           </div>       
        </div>
    )
}
export default Stickywidget