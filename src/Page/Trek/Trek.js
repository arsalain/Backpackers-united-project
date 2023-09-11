import "./trek.css"
import React ,{ useState} from 'react'
import {FaSearch} from "react-icons/fa";
import Footer from '../../Components/Nav/Footer/Footer.js'
import Navbar2 from '../../Components/Nav/Navbar/Navbar2.js'
import Trekhome from "../../Image/TrekHome.jpg"
import Trekslider from "../../Components/Trekslider/Trekslider";
import searchResult from  "../../searchdata.json"
import { Link } from "react-router-dom";

const Trek = () =>{
    const [searchInput, setSearchInput] = useState("")
    
    const recommendedtreks = [
      {
        id:1,
        imgSrc: Trekhome,
        name: "Ethina Bhuja Trek",
        link: "/trek/ethina",
        state: "Karnataka",
        day: "2D/2N",
        date: "July 21,2023(Friday)",
        person:"Per Person",
        amount: "3600"
      },
      {
        id:2,
        imgSrc: Trekhome,
        name: "Skandagiri Trek",
        link: "/trek/skandagiri",
        state: "Karnataka",
        day: "1D/1N",
        date: "July 21,2023(Friday)",
        person:"Per Person",
        amount: "1499"
      },
      {
        id:3,
        imgSrc: Trekhome,
        name: "Gokarna Beach Trek",
        link: "/trek/gokarna",
        state: "Karnataka",
        day: "2D/3N",
        date: "July 21,2023(Friday)",
        person:"Per Person",
        amount: "3499"
      },
      {
        id:4,
        imgSrc: Trekhome,
        name: "Tadiandamol Trek",
        link: "/trek/tadiandamol",
        state: "Karnataka",
        day: "2D/2N",
        date: "July 21,2023(Friday)",
        person:"Per Person",
        amount: "3799"
      },
      {
        id:5,
        imgSrc: Trekhome,
        name: "Dudhsagar Trek and Dandeli Exploration",
        link: "/trek/dudhsagar",
        state: "Karnataka",
        day: "2D/2N",
        date: "July 21,2023(Friday)",
        person:"Per Person",
        amount: "4799"
      },
      {
        id:6,
        imgSrc: Trekhome,
        name: "Kumara Parvatha Trek",
        link: "/trek/kumara",
        state: "Karnataka",
        day: "2D/3N",
        date: "July 21,2023(Friday)",
        person:"Per Person",
        amount: "3900"
      },
    ]
    const longtreks = [
      {
        id:1,
        imgSrc: Trekhome,
        name: "Kudremukha Trek",
        link: "/trek/kudremukha",
        state: "Karnataka",
        day: "2D/2N",
        date: "July 21,2023(Friday)",
        person:"Per Person",
        amount: "3799"
      },
      {
        id:2,
        imgSrc: Trekhome,
        name: "Kumara Parvatha Trek",
        link: "/trek/kumara",
        state: "Karnataka",
        day: "2D/3N",
        date: "July 21,2023(Friday)",
        person:"Per Person",
        amount: "3900"
      },
 
      {
        id:3,
        imgSrc: Trekhome,
        name: "Tadiandamol Trek",
        link: "/trek/tadiandamol",
        state: "Karnataka",
        day: "2D/2N",
        date: "July 21,2023(Friday)",
        person:"Per Person",
        amount: "3799"
      },
      {
        id:4,
        imgSrc: Trekhome,
        name: "Bramagiri Trek",
        link: "/trek/bramagiri",
        state: "Karnataka",
        day: "2D/2N",
        date: "July 21,2023(Friday)",
        person:"Per Person",
        amount: "3799"
      },
      {
        id:5,
        imgSrc: Trekhome,
        name: "Kurinjal Trek",
        link: "/trek/kurinjal",
        state: "Karnataka",
        day: "2D/2N",
        date: "July 21,2023(Friday)",
        person:"Per Person",
        amount: "3799"
      },
  
      {
        id:6,
        imgSrc: Trekhome,
        name: "Narasimha Parvatha Trek",
        link: "/trek/narasimha",
        state: "Karnataka",
        day: "2D/2N",
        date: "July 21,2023(Friday)",
        person:"Per Person",
        amount: "3900"
      },
    ]
    const shorttreks = [
      {
        id:1,
        imgSrc: Trekhome,
        name: "Nethravathi Trek",
        link: "/trek/nethravathi",
        state: "Karnataka",
        day: "2D/2N",
        date: "July 21,2023(Friday)",
        person:"Per Person",
        amount: "3799"
      },
      {
        id:2,
        imgSrc: Trekhome,
        name: "Paithalamala Trek",
        link: "/trek/paithalamala",
        state: "Kerala",
        day: "2D/2N",
        date: "July 21,2023(Friday)",
        person:"Per Person",
        amount: "4999"
      },
      {
        id:3,
        imgSrc: Trekhome,
        name: "Ethina Bhuja Mansoon Trek",
        link: "/trek/ethina",
        state: "Karnataka",
        day: "2D/2N",
        date: "July 21,2023(Friday)",
        person:"Per Person",
        amount: "3600"
      },
      {
        id:4,
        imgSrc: Trekhome,
        name: "Skandagiri Trek",
        link: "/trek/skandagiri",
        state: "Karnataka",
        day: "1D/1N",
        date: "July 21,2023(Friday)",
        person:"Per Person",
        amount: "1499"
      },
   
      {
        id:5,
        imgSrc: Trekhome,
        name: "Gokarna Beach Trek",
        link: "/trek/gokarna",
        state: "Karnataka",
        day: "2D/3N",
        date: "July 21,2023(Friday)",
        person:"Per Person",
        amount: "3799"
      },
      {
        id:6,
        imgSrc: Trekhome,
        name: "Huttari Betta Trek",
        link: "/trek/huttari",
        state: "Karnataka",
        day: "1D/1N",
        date: "July 21,2023(Friday)",
        person:"Per Person",
        amount: "999"
      }
    
    ]
    const waterfalltreks = [
      {
        id:1,
        imgSrc: Trekhome,
        name: "Bandaje Falls Trek",
        link: "/trek/bandaje",
        state: "Karnataka",
        day: "2D/2N",
        date: "July 21,2023(Friday)",
        person:"Per Person",
        amount: "3799"
      },
      {
        id:2,
        imgSrc: Trekhome,
        name: "kodachadri Trek",
        link: "/trek/kodachadri",
        state: "Karnataka",
        day: "2D/2N",
        date: "July 21,2023(Friday)",
        person:"Per Person",
        amount: "3800"
      },
      {
        id:3,
        imgSrc: Trekhome,
        name: "Dudhsagar Trek and Dandeli Exploration",
        link: "/trek/dudhsagar",
        state: "Karnataka",
        day: "2D/2N",
        date: "July 21,2023(Friday)",
        person:"Per Person",
        amount: "4799"
      },
      {
        id:4,
        imgSrc: Trekhome,
        name: "Bilikal Trek",
        link: "/trek/bilikal",
        state: "Kerala",
        day: "2D/2N",
        date: "July 21,2023(Friday)",
        person:"Per Person",
        amount: "3799"
      },
      {
        id:5,
        imgSrc: Trekhome,
        name: "Arisinagundi Falls Trek",
        link: "/trek/arisinagundi",
        state: "Karnataka",
        day: "2D/2N",
        date: "July 21,2023(Friday)",
        person:"Per Person",
        amount: "3799"
      },
    ]
  return (
    <div >
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
               <div className='trek-search-field-name' ><Link to={list.link} className="trek-search-link">{list.name} </Link></div>
             ))} 
      
          </div>
       
          </div>
          </div>
        <div className='trek-recom'>
          
          <div className='trek-recom-title'>Recommended Treks </div>
    
          <Trekslider  slides={recommendedtreks} />
      </div>
   
      <div className='trek-recom'>
          <div className='trek-recom-title'>Long Treks </div>
          <Trekslider  slides={longtreks} />
      </div>
      <div className='trek-recom'>
          <div className='trek-recom-title'>Short Treks </div>

          <Trekslider  slides={shorttreks} />
      </div>
      <div className='trek-recom'>
          <div className='trek-recom-title'>Waterfall Treks </div>
       
          <Trekslider  slides={waterfalltreks} />
      </div>
      <Footer />
    </div>
    
  )
}


export default Trek
