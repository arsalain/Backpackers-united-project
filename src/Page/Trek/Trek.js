import "./trek.css"
import React ,{ useState,useEffect} from 'react'
import {FaSearch} from "react-icons/fa";
import Footer from '../../Components/Nav/Footer/Footer.js'
import Navbar2 from '../../Components/Nav/Navbar/Navbar2.js'
import Trekhome from "../../Image/TrekHome.jpg"
import Trekslider from "../../Components/Trekslider/Trekslider";
import searchResult from  "../../searchdata.json"
import { Link } from "react-router-dom";
import axios from 'axios';

const Trek = () =>{
    const [searchInput, setSearchInput] = useState("")
    const [trekrecom,settrekrecom] = useState([])
    const [treklong,settreklong] = useState([])
    const [trekshort,settrekshort] = useState([])
    const [trekwaterfall,settrekwaterfall] = useState([])
    const getTrekrecom = async() =>{
      const apiUrl = 'http://localhost:4000/trek/gettrekrecom';
      axios.get(apiUrl)
      .then((response) => {
        settrekrecom(response.data)
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
    }
    const getTreklong = async() =>{
       const apiUrl = 'http://localhost:4000/trek/gettreklong';
       axios.get(apiUrl)
       .then((response) => {
        settreklong(response.data)
       })
       .catch((error) => {
         console.error('Error fetching data:', error);
       });
    }
    const getTrekshort = async() =>{
      // const response = await axios.get("http://localhost:4000/trek/gettrekshort")
      // settrekshort(response.data)
      const apiUrl = 'http://localhost:4000/trek/gettrekshort';
      axios.get(apiUrl)
      .then((response) => {
        settrekshort(response.data)
        // console.log("responsedata",response.data)
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
    }
    const getTrekwaterfall = async() =>{
      // const response = await axios.get("http://localhost:4000/trek/gettrekwaterfall")
      // settrekwaterfall(response.data)
      const apiUrl = 'http://localhost:4000/trek/gettrekwaterfall';
      axios.get(apiUrl)
      .then((response) => {
        settrekwaterfall(response.data)
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
    }
   useEffect(()=>{
 getTrekrecom()
 getTreklong()
getTrekshort()
getTrekwaterfall()
 })
  
  return (
    <div className="trek-main">
    <div className="trek">
   <img src={Trekhome} className="trekimg"/>
    <div className='trek-body'>
      
      <Navbar2 />
       </div>
      <div className='trek-search'>
        <div className='trek-search-bar'>
          <div className="trek-search-head"><input type="text" placeholder="Search for amazing treks" className='trek-search-input'   onChange={(e)=>setSearchInput(e.target.value)}
   value={searchInput}/>
          <button  className='trek-search-button'><FaSearch   className="trek-search-icon" /></button>
          </div>
          {searchResult.filter(item =>{
            const searchTerm = searchInput.toLowerCase()
            const fullname = item.name.toLowerCase()
            return searchTerm && fullname.startsWith(searchTerm)
          }).map((list)=>(
               <div className='trek-search-field-name' ><Link to={list.link} className="trek-search-link" >{list.name} </Link></div>
             ))} 
      
          </div>
       
          </div>
          </div>
        <div className='trek-recom'>
          
          <div className='trek-recom-title'>Recommended Treks </div>
    
          <Trekslider  slides={trekrecom} />
      </div>
   
      <div className='trek-recom'>
          <div className='trek-recom-title'>Long Treks </div>
          <Trekslider  slides={treklong} />
      </div>
      <div className='trek-recom'>
          <div className='trek-recom-title'>Short Treks </div>

          <Trekslider  slides={trekshort} />
      </div>
      <div className='trek-recom'>
          <div className='trek-recom-title'>Waterfall Treks </div>
       
          <Trekslider  slides={trekwaterfall} />
      </div>
      <Footer />
    </div>
    
  )
}


export default Trek
