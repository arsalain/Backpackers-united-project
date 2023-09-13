import React,{useState } from 'react'
import Navbar2 from '../../Nav/Navbar/Navbar2'
import dest from "../../../Images/destination.jpeg"
import hampi from "../../../Images/Hampi.jpeg"
import coorg from "../../../Images/destcoorg.jpeg"
import kodiakanol from "../../../Images/kodaikanol.jpeg"
import pondichery from "../../../Images/Pondicherry.jpeg"
import ooty from "../../../Images/ooty.jpeg"
import gokarna from "../../../Images/gokarna.jpeg"
import dandeli from "../../../Images/dandeli.jpg"
import munar from "../../../Images/munar.jpg"
import chikmangalur from "../../../Images/chikmangalur.jpg"
import wayanad from "../../../Images/wayanad.jpg"
import "./destdrop.css"
import Gokarna from '../../../Page/TrekPages/Gokarna'
import Destimg from '../Image/Destimg'
const Destdrop = () => {
    const [selectedOption, setSelectedOption] = useState('destdrop1');

    // Function to handle the change of the select element
    const handleSelectChange = (event) => {
      setSelectedOption(event.target.value);
    };
    const karnataka = [ 
        {
        id:1 ,
        name: "Coorg",
        img: coorg
    } ,
    {
        id:2,
        name: "Hampi",
        img: hampi
    } ,
    {
        id:1 ,
        name: "Gokarna",
        img: gokarna
    } ,
    {
        id:1 ,
        name: "chikmangalur",
        img: chikmangalur
    } ,
    {
        id:1 ,
        name: "Dandeli",
        img: dandeli
    } ,
    
]
const TamilNadu = [ 
    {
    id:1 ,
    name: "kodiakanal",
    img: kodiakanol
} ,
{
    id:2,
    name: "ooty",
    img: ooty
} ,
{
    id:1 ,
    name: "pondichery",
    img: pondichery
} ,


]
const Kerala = [ 
    {
    id:1 ,
    name: "wayanad",
    img: wayanad
} ,
{
    id:2,
    name: "munnar",
    img: munar
} ,



]

    return (
      <div>
                 <div className='destdrop'>
        <img src={dest} className='destdrop-main' />
      <div className='destdrop-head'>
      <Navbar2 />
      </div>
      <div className='destdrop-head-title'>Destinations</div>
      </div>
      <div className='destdrop-body'>
        <div className='destdrop-body-title-main' >
        <div className='destdrop-body-title'>Choose From A Range of Destinations:</div>
        
        <div >
        <select value={selectedOption} onChange={handleSelectChange} className='destdrop-select'>
          <option value="destdrop1">All</option>
          <option value="destdrop2">Karnataka</option>
          <option value="destdrop3">Kerala</option>
          <option value="destdrop4">Tamil Nadu</option>
        </select>
        </div>
  </div>
  {selectedOption === 'destdrop1' && (
    <div >
          <div className='destdrop-list'>
           <div className='destdrop-list-title'> Karnataka </div>
            <Destimg slides={karnataka} />
          </div>
           <div  className='destdrop-list'>
           <div className='destdrop-list-title'> Kerala</div>
           <Destimg slides={Kerala} />
         </div>
         <div  className='destdrop-list'>
           <div className='destdrop-list-title'> Tamil Nadu </div>
            <Destimg slides={TamilNadu} />
          </div>
         </div>
        )}
        {selectedOption === 'destdrop2' && (
          <div className='destdrop-list'>
            <div className='destdrop-list-title'> Karnataka </div>
            <Destimg slides={karnataka} />
          </div>
        )}
  
        {selectedOption === 'destdrop3' && (
          <div  className='destdrop-list'>
           <div className='destdrop-list-title'> Kerala</div>
            <Destimg slides={Kerala} />
          </div>
        )}
  
        {selectedOption === 'destdrop4' && (
          <div  className='destdrop-list'>
            <div className='destdrop-list-title'> Tamil Nadu </div>
            <Destimg slides={TamilNadu} />
          </div>
        )}
      </div>
      </div>
      
    //   </div>
    );
}

export default Destdrop
