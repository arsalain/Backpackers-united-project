import React from "react";
import "./Points.css"
import  dest from "../../../Images/dest.jpg"
import {BiPlusMedical} from "react-icons/bi"
import {MdOutlineRouter} from "react-icons/md"
import {BiSolidLocationPlus} from "react-icons/bi"

const Points = () => {
    return (
        <div className="p">
        <div className="p-left"   
>
<div className="p-card-log">
<div className="p-card-nam"><BiSolidLocationPlus className="p-card-nam-icon"/></div>
                    <div className="p-num-log">50<BiPlusMedical   className="p-num-icon-dest"/></div>
    
    <div className="p-card-nam-dest">Destinations</div>
                </div>
<div className="p-left-box1" >
<div className="p-card-nam1">
    <div className="p-card-logo"><MdOutlineRouter  className="p-num-icon"/></div>
                    <div className="p-num-log1">200<BiPlusMedical   className="p-num-icon1"/></div>
                    </div> 
    <div className="p-card-nam-emp">Employees</div>
              
</div>
            {/* <Image src={dest} width={400} height={600}/>  */}
        </div>
        <div className="p-right">
            <div className="p-head">
            <div className="p-name">Destination Points</div>
            <div className="p-title1">Our Stories Have</div>
            <div className="p-title2">Adventures</div>
            <div className="p-para1">We are experienced in bringing adventures to stay their
            journy with all outdoor destinations in the world as our
            specialities. Start  your adventure now! Nature has already
            called you!</div>
            </div>
            <div className="p-body">
                <div className="p-card">
                    <div className="p-num">10<BiPlusMedical className="p-num-right-icon" /></div>
    <div className="p-card-name">Travel</div>
    <div className="p-card-name1">Destination</div>
                </div>
                <div className="p-card">
                    <div className="p-num">40<BiPlusMedical className="p-num-right-icon" /></div>
    <div className="p-card-name">Trek</div>
    <div className="p-card-name1">Guides</div>
                </div>
                <div className="p-card">
                    <div className="p-num">20K<BiPlusMedical className="p-num-right-icon"/></div>
    <div className="p-card-name">Happy</div>
    <div className="p-card-name1">Customers</div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Points;