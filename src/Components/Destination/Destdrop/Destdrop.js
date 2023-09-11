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
const Destdrop = () => {
    const [selectedOption, setSelectedOption] = useState('destdrop1');

    // Function to handle the change of the select element
    const handleSelectChange = (event) => {
      setSelectedOption(event.target.value);
    };
  
    return (
      <div>
                 <div className='destdrop'>
        <img src={dest} className='destdrop-main' />
      <div className='destdrop-head'>
      <Navbar2 />
      </div>
      <div className='destdrop-head-title'><h1 >Destinations</h1></div>
      
      <div className='destdrop-body'>
        <div className='destdrop-body-title'><h1>Tours</h1></div>
        <select value={selectedOption} onChange={handleSelectChange}>
          <option value="destdrop1">Div 1</option>
          <option value="destdrop2">Div 2</option>
          <option value="destdrop3">Div 3</option>
        </select>
  
        {selectedOption === 'destdrop1' && (
          <div>
            {/* Content for Div 1 */}
            <h2>Div 1</h2>
            <p>This is the content for Div 1.</p>
          </div>
        )}
  
        {selectedOption === 'destdrop2' && (
          <div>
            {/* Content for Div 2 */}
            <h2>Div 2</h2>
            <p>This is the content for Div 2.</p>
          </div>
        )}
  
        {selectedOption === 'destdrop3' && (
          <div>
            {/* Content for Div 3 */}
            <h2>Div 3</h2>
            <p>This is the content for Div 3.</p>
          </div>
        )}
      </div>
      </div>
      </div>
    );
}

export default Destdrop
