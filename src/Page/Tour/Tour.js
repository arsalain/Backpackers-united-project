import React,{useState} from 'react'
import "./tour.css"
import {AiOutlineSearch} from "react-icons/ai";
import Footer from '../../Components/Nav/Footer/Footer.js'
import Navbar2 from '../../Components/Nav/Navbar/Navbar2.js'
import Trekhome from "../../Image/TrekHome.jpg"
import Trekslider from "../../Components/Trekslider/Trekslider";

const Tour = () => {
    const [searchInput, setSearchInput] = useState("")
    const recommendedtours = [
        {
          id:1,
          imgSrc: Trekhome,
          name: "Wayanad Tour",
          state: "Kerala",
          day: "2D/1N",
          date: "July 21,2023(Friday)",
          person:"Per Person",
          amount: "5999"
        },
        {
          id:2,
          imgSrc: Trekhome,
          name: "Chikmagalur Trek",
          state: "Karnataka",
          day: "2D/1N",
          date: "July 21,2023(Friday)",
          person:"Per Person",
          amount: "5999"
        },
        {
          id:3,
          imgSrc: Trekhome,
          name: "Ooty Tour",
          state: "Tamil Nadu",
          day: "2D/1N",
          date: "July 21,2023(Friday)",
          person:"Per Person",
          amount: "5999"
        },
        {
          id:4,
          imgSrc: Trekhome,
          name: "Coorg Tour",
          state: "Karnataka",
          day: "2D/1N",
          date: "July 21,2023(Friday)",
          person:"Per Person",
          amount: "5999"
        },
        {
          id:5,
          imgSrc: Trekhome,
          name: "kodaikanol Tour",
          state: "Karnataka",
          day: "2D/1N",
          date: "July 21,2023(Friday)",
          person:"Per Person",
          amount: "6499"
        },
        {
          id:6,
          imgSrc: Trekhome,
          name: "Gokarna Dandeli Tour",
          link: "/trek/kumara",
          state: "Karnataka",
          day: "2D/1N",
          date: "July 21,2023(Friday)",
          person:"Per Person",
          amount: "4499"
        },
      ]
      const backpackingtours = [
        {
            id:1,
            imgSrc: Trekhome,
            name: "Munnar Tour",
            state: "Kerala",
            day: "2D/1N",
            date: "July 21,2023(Friday)",
            person:"Per Person",
            amount: "6499"
          },
          {
            id:2,
            imgSrc: Trekhome,
            name: "Hampi Tour",
            state: "Karnataka",
            day: "2D/1N",
            date: "July 21,2023(Friday)",
            person:"Per Person",
            amount: "5999"
          },
          {
            id:3,
            imgSrc: Trekhome,
            name: "Pondicherry Tour",
            state: "Puducherry",
            day: "2D/1N",
            date: "July 21,2023(Friday)",
            person:"Per Person",
            amount: "5999"
          },
          {
            id:4,
            imgSrc: Trekhome,
            name: "Gokarna-Murudeshwara Tour",
            link: "/trek/kumara",
            state: "Karnataka",
            day: "2D/1N",
            date: "July 21,2023(Friday)",
            person:"Per Person",
            amount: "5499"
          },
          {
            id:5,
            imgSrc: Trekhome,
            name: "Gokarna Dandeli Tour",
            link: "/trek/kumara",
            state: "Karnataka",
            day: "2D/1N",
            date: "July 21,2023(Friday)",
            person:"Per Person",
            amount: "4499"
          },
        {
          id:6,
          imgSrc: Trekhome,
          name: "Wayanad Tour",
          state: "Kerala",
          day: "2D/1N",
          date: "July 21,2023(Friday)",
          person:"Per Person",
          amount: "5999"
        },
        {
          id:7,
          imgSrc: Trekhome,
          name: "Chikmagalur Trek",
          state: "Karnataka",
          day: "2D/1N",
          date: "July 21,2023(Friday)",
          person:"Per Person",
          amount: "5999"
        },
        {
            id:8,
            imgSrc: Trekhome,
            name: "Coorg Tour",
            state: "Karnataka",
            day: "2D/1N",
            date: "July 21,2023(Friday)",
            person:"Per Person",
            amount: "5999"
          },
        {
          id:9,
          imgSrc: Trekhome,
          name: "Ooty Tour",
          state: "Tamil Nadu",
          day: "2D/1N",
          date: "July 21,2023(Friday)",
          person:"Per Person",
          amount: "5999"
        },
 
        {
          id:10,
          imgSrc: Trekhome,
          name: "kodaikanol Tour",
          state: "Karnataka",
          day: "2D/1N",
          date: "July 21,2023(Friday)",
          person:"Per Person",
          amount: "6499"
        },
   
      ]
  return (
    <div >
    <div className="tour">
   <img src={Trekhome} className="tourimg"/>
    <div className='tour-body'>
      
      <Navbar2 />
       </div>
      <div className='tour-search'>
        <div className='tour-search-bar'>
          <input type="text" placeholder="Search for amazing treks" className='tour-search-input'   onChange={(e)=>setSearchInput(e.target.value)}
   value={searchInput}/>
          <button  className='tour-search-button'><AiOutlineSearch   className="tour-search-icon" /></button>
         
          {/* {searchResult.map((list,index)=>(
          <div  className='trek-search-field'>
            <img src={`http://localhost:4000/uploads/${list.testimage}`} width={50} height={50} ></img>
            <div className='trek-search-field-name'>{list.name} </div>
          </div>
             ))} */}
          </div>
          </div>
          </div>
        <div className='tour-recom'>
          
          <div className='tour-recom-title'>Recommended Tours </div>
    
          <Trekslider  slides={recommendedtours} />
      </div>
   
      <div className='tour-recom'>
          <div className='tour-recom-title'>Backpacking Tours </div>
          <Trekslider  slides={backpackingtours} />
      </div>
      <div className='trek-recom'>
          <div className='tour-recom-title'>Long Weekend Tours </div>

          <Trekslider  slides={recommendedtours} />
      </div>
      <div className='tour-recom'>
          <div className='tour-recom-title'>International Tours</div>
       
          <Trekslider  slides={recommendedtours} />
      </div>
      <Footer />
    </div>
    
      )
}

export default Tour
