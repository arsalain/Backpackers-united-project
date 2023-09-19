import React,{useState,useEffect} from 'react'
import Navbar2 from '../../Nav/Navbar/Navbar2.js'
import {PiHandshakeDuotone} from "react-icons/pi"
import {AiOutlineGoogle} from "react-icons/ai"
import {HiUserGroup} from "react-icons/hi"
import {IoEarth} from "react-icons/io5"
import {AiOutlinePlus} from "react-icons/ai"
import  "./Video.css"
import video from "./Video.mp4"
import searchResult from  "../../../searchdata.json"
import { Link } from "react-router-dom";
// import video from "../../../public/mountain.mp4"

const Video = () => {
  const [name,setName] = useState(0)
  const names = ["View Treks","View Tours","Book Treks","Book Tours","book tours"];
  const [searchInput, setSearchInput] = useState("")
  const onSearch = (searchTerm) =>{
    setSearchInput(searchTerm)
  }
  useEffect(() => {
    if (name === names.length - 1) {
      const data = name - 4;
      setName(data)
    }
    const interval = setInterval(() => {
      const updatedData = name + 1;
      setName(updatedData);
    }, 3000);

    return () => clearInterval(interval);
  }, [name]);
 
  const search = searchResult.find(item => item.name == searchInput );
  
  return (
    <div className='video-main'>
        <video src={video} autoPlay muted loop  >
        </video>
    
      <div className='video-body'>
        <Navbar2 />
        <div className='video-title' >Explore Now </div>
        <div className='video-title1' >{names[name]}</div>
        
        <div className='video-search'>  
       
        <div className='video-search-bar'>
        <input type="text" placeholder="Search" className='video-search-input'  onChange={(e)=>setSearchInput(e.target.value)}
   value={searchInput} />
       {searchResult.filter(item =>{
            const searchTerm = searchInput.toLowerCase()
            const fullname = item.name.toLowerCase()
            return searchTerm && fullname.startsWith(searchTerm) && fullname !== searchTerm
          }).map((list)=>(
               <div className='video-search-field-name' onClick={() => onSearch(list.name)} >{list.name}</div>
           
               ))} 
        </div>
          <button  className='video-search-button'>{search ? (<Link to={search.link}className="tour-search-link">Explore </Link> ) : (<div >Explore</div>)}</button>
        
        </div>

        <div className='video-footer-main'>
        <div className='video-footer'>
          <div ><AiOutlineGoogle className='video-rating-icon'/></div>
        <div className='video-rating'>
          4.8
          <div>Rating on Google</div>
        </div>
        <div className='video-rating-icon'><HiUserGroup /></div>
        <div className='video-rating'>
      <div className='video-customer'> 1 Lakh <AiOutlinePlus className='video-customer-icon'/></div>
          <div>Satisfied Customers</div>
        </div><div className='video-rating-icon'><IoEarth /></div>
        <div className='video-rating'>
        <div className='video-customer'> 100<AiOutlinePlus className='video-customer-icon'/></div>
          <div>Adventure Locations</div>
        </div><div className='video-rating-icon'><PiHandshakeDuotone /></div>
        <div className='video-rating'>
        Guaranteed 
          <div>Best Value</div>
        </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Video
