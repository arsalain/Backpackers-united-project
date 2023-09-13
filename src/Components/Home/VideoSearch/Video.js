"use client"
import React,{useState,useEffect} from 'react'
import Navbar2 from '../../Nav/Navbar/Navbar2.js'
import {FaRegThumbsUp,FaHandPeace} from "react-icons/fa"
import {HiUserGroup} from "react-icons/hi"
import {IoEarth} from "react-icons/io5"
import {AiOutlinePlus} from "react-icons/ai"
import  "./Video.css"
import video from "./mountain.mp4"
// import searchResult from  "../../../searchdata.json"
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
  const  searchResult = [
    {
      "id": 1,
      "name": "Kudremukha Trek",
      "link": "/trek/kudremukha"
    },
    {
      "id": 2,
      "name": "Bandaje Trek",
      "link": "/trek/bandaje"
    },
    {
        "id": 3,
        "name": "Arisinagundi Trek",
        "link": "/trek/arisinagundi"
      },
      {
        "id": 4,
        "name": "Bilikal Trek",
        "link": "/trek/bilikal"
      },
      {
        "id": 5,
        "name": "Bramagiri Trek",
        "link": "/trek/bramagiri"
      },
  
      {
        "id": 6,
        "name": "Dudhsagar Trek and Dandeli Exploration",
        "link": "/trek/dudhsagar"
      },
      {
        "id": 7,
        "name": "Ethina Bhuja Mansoon Trek",
        "link": "/trek/ethina"
      },
      {
        "id": 8,
        "name": "Gokarna Beach Trek",
        "link": "/trek/gokarna"
      },
      {
        "id": 9,
        "name": "Huttari Beta Trek",
        "link": "/trek/huttari"
      },
      {
        "id": 10,
        "name": "Kodachadri Trek",
        "link": "/trek/kodachadri"
      },
      {
        "id": 11,
        "name": "Kumara Parvatha Trek",
        "link": "/trek/kumara"
      },
      {
        "id": 12,
        "name": "Kurinjal Trek",
        "link": "/trek/kurinjal"
      },
      {
        "id": 13,
        "name": "Narsimha Trek",
        "link": "/trek/narsimha"
      },
      {
        "id": 14,
        "name": "Nethravathi Trek",
        "link": "/trek/nethravathi"
      },
      {
        "id": 15,
        "name": "Paithalamala Trek",
        "link": "/trek/paithalamala"
      },
      {
        "id": 16,
        "name": "Skandagiri Trek",
        "link": "/trek/skandagiri"
      } ,
      {
        "id": 17,
        "name": "Tadiandamol Trek",
        "link": "/trek/tadiandamol"
      },
      {
        "id": 18,
        "name": "Munar Tour",
        "link": "/tour/munar"
      },
      {
        "id": 19,
        "name": "Hampi Tour",
        "link": "/tour/hampi"
      },
      {
        "id": 20,
        "name": "Pondicherry Tour",
        "link": "/tour/pondicherry"
      },
      {
        "id": 21,
        "name": "Gokarna-Murudeshwara Tour",
        "link": "/tour/gokarnamuru"
      },
      {
        "id": 22,
        "name": "Gokarna Dandeli Tour",
        "link": "/tour/gokarnadandeli"
      },
      {
        "id": 23,
        "name": "Wayanad Tour",
        "link": "/tour/wayanad"
      },
      {
        "id": 24,
        "name": "Chikmagalur Tour",
        "link": "/tour/chikmagalur"
      },
      {
        "id": 25,
        "name": "Coorg Tour",
        "link": "/tour/coorg"
      },
      {
        "id": 26,
        "name": "Ooty Tour",
        "link": "/tour/ooty"
      },
      {
        "id": 27,
        "name": "kodaikanal Tour",
        "link": "/tour/kodaikanal"
      },
      {
        "id": 28,
        "name": "Hampi Tour (3D/2N)",
        "link": "/tour/hampi/3days-2nights"
      },
      {
        "id": 29,
        "name": "Munar Allepy Tour (3D/2N)",
        "link": "/tour/munar/3days-2nights"
      },
      {
        "id": 30,
        "name": "Goa Tour (3D/2N)",
        "link": "/tour/goa/3days-2nights"
      },
      {
        "id": 31,
        "name": "Gokarna Dandeli Tour(3D/2N)",
        "link": "/tour/gokarnadandeli/3days-2nights"
      },
      {
        "id": 32,
        "name": "Wayanad Tour(3D/2N)",
        "link": "/tour/wayanad/3days-2nights"
      },
      {
        "id": 33,
        "name": "Coorg - Mysore Tour(3D/2N)",
        "link": "/tour/coorgmysore/3days-2nights"
      },
      {
        "id": 34,
        "name": "Chikmagalur Tour(3D/2N)",
        "link": "/tour/chikmagalur/3days-2nights"
      },
      {
        "id": 35,
        "name": "Best of Vietnam(5Days/4Nights)",
        "link": "/internationaltour/vietnam"
      },
      {
        "id": 36,
        "name": "Phuket Phi Phi Island Trip(4Days/3Night",
        "link": "/internationaltour/phuket-phi"
      },
      {
        "id": 37,
        "name": "Pattaya - Phuket Tour(5Days/4Nights)",
        "link": "/internationaltour/pattaya-phuket"
      },
      {
        "id": 38,
        "name": "Phuket - Krabi Tour(6Days/5Nights)",
        "link": "/internationaltour/phuket-krabi/6days-5nights"
      },
      {
        "id": 39,
        "name": "PHUKET - KRABI TOUR(5D/4N)",
        "link": "/internationaltour/phuket-krabi/6days-5nights"
      },
      {
        "id": 40,
        "name": "PHUKET - KRABI TOUR(5D/4N)",
        "link": "/internationaltour/phuket-krabi/5days-4nights"
      },
      {
        "id": 41,
        "name": "Bangkok - Pattaya - Phuket Tour(6Days/5Nights)",
        "link": "/internationaltour/bangkok-pattaya"
      },
      {
        "id": 42,
        "name": "Best of Bangakok(4Days/3Nights)",
        "link": "/internationaltour/best-of-bangkok"
      },
      {
        "id": 43,
        "name": "Bangkok Temple Tour - Pattaya Coral Island (5Days/4Nights)",
        "link": "/internationaltour/bangkok-temple-pattaya-coral-island"
      },
      {
        "id": 44,
        "name": "Best Of Phuket And Krabi Tour Package (6Days/5Nights)",
        "link": "/internationaltour/best-of-phuket-krabi"
      },
      {
        "id": 45,
        "name": "Pattaya - Bangkok Tour(5Days/4Nights)",
        "link": "/internationaltour/pattaya-bangkok"
      },
      {
        "id": 46,
        "name": "Thailand Backpacking Tour (4Days/3Nights)",
        "link": "/internationaltour/thailand"
      }
    ]
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
          <div className='video-rating-icon'><FaRegThumbsUp /></div>
        <div className='video-rating'>
          4.8
          <div>Google Rating</div>
        </div>
        <div className='video-rating-icon'><HiUserGroup /></div>
        <div className='video-rating'>
      <div className='video-customer'> 1 Lakh <AiOutlinePlus className='video-customer-icon'/></div>
          <div>Happy Customers</div>
        </div><div className='video-rating-icon'><IoEarth /></div>
        <div className='video-rating'>
        <div className='video-customer'> 15<AiOutlinePlus className='video-customer-icon'/></div>
          <div>Tourist Destinations</div>
        </div><div className='video-rating-icon'><FaHandPeace /></div>
        <div className='video-rating'>
        Best Price
          <div>Guaranteed</div>
        </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Video
