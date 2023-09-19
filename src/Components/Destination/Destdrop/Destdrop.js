import React,{useState } from 'react'
import Select from 'react-select';
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
const options = [
  { value: 'destdrop1', label: 'All' },
  { value: 'destdrop2', label: 'Karnataka' },
  { value: 'destdrop3', label: 'Kerala' },
  { value: 'destdrop4', label: 'Tamil Nadu' }
];
const Destdrop = () => {

    const [selectedOption, setSelectedOption] = useState(options[0]);

    // Function to handle the change of the select element
    const handleSelectChange = (selectedOption) => {
      setSelectedOption(selectedOption);
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
        name: "Chikmangalur",
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
    name: "Kodiakanal",
    img: kodiakanol
} ,
{
    id:2,
    name: "Ooty",
    img: ooty
} ,
{
    id:1 ,
    name: "Pondichery",
    img: pondichery
} ,


]
const Kerala = [ 
    {
    id:1 ,
    name: "Wayanad",
    img: wayanad
} ,
{
    id:2,
    name: "Munnar",
    img: munar
} ,
{
  id:3,
  name: "Munar-Allerpy",
  img: munar
} ,


]

  const isMobileView = window.innerWidth <= 767;
  const isTabletView = window.innerWidth > 767 && window.innerWidth <= 1024;

  const customStyles = {
  control: (provided, state) => ({
    ...provided,
    border: '1px solid black',
    borderRadius: '5px',
    padding:  isMobileView ? '0px' : (isTabletView ? '0' :'10px'),
    width: isMobileView ? '80px' : (isTabletView ? '100px' : '150px'),
    boxShadow: state.isFocused ? '0 0 5px rgba(0, 0, 0, 0.2)' : 'none',
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? '#FCB418 ' : 'white',
    ':hover': {
      backgroundColor: '#FCB418',
    },
   
  }),
  menu: (provided) => ({
    ...provided,
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    borderRadius: '5px',
    width: isMobileView ? '80px' : (isTabletView ? '100px' : '150px'),
  }),
};
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
        
        <div className='destdrop-select-main' >
        <Select
      options={options}
      value= {selectedOption}
      onChange={handleSelectChange} 
      styles={customStyles}
    />
        </div>
  </div>
  {selectedOption && ( 
    <div >
  {selectedOption.value === 'destdrop1' && (
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
        {selectedOption.value === 'destdrop2' && (
          <div className='destdrop-list'>
            <div className='destdrop-list-title'> Karnataka </div>
            <Destimg slides={karnataka} />
          </div>
        )}
  
        {selectedOption.value === 'destdrop3' && (
          <div  className='destdrop-list'>
           <div className='destdrop-list-title'> Kerala</div>
            <Destimg slides={Kerala} />
          </div>
        )}
  
        {selectedOption.value === 'destdrop4' && (
          <div  className='destdrop-list'>
            <div className='destdrop-list-title'> Tamil Nadu </div>
            <Destimg slides={TamilNadu} />
          </div>
        )}
      </div>
    
  )}
    </div>
      </div>
      
    //   </div>
    );
}

export default Destdrop