import React,{useState} from 'react'
import "./tour.css"
import {AiOutlineSearch} from "react-icons/ai";
import Footer from '../../Components/Nav/Footer/Footer.js'
import Navbar2 from '../../Components/Nav/Navbar/Navbar2.js'
import TourHome from "../../Image/TourHome1.jpg"
import Trekhome from "../../Image/TrekHome.jpg"
import Trekslider from "../../Components/Trekslider/Trekslider";
import IntTours from '../../Components/Trekslider/IntTours';


const Tour = () => {
    const [searchInput, setSearchInput] = useState("")
    const recommendedtours = [
        {
          id:1,
          imgSrc: Trekhome,
          name: "Wayanad Tour",
          link: "/tour/wayanad",
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
          link: "/tour/chikmagalur",
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
          link: "/tour/ooty",
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
          link: "/tour/coorg",
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
          link: "/tour/kodaikanal",
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
          link: "/tour/gokarnadandeli",
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
            link: "/tour/munar",
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
            link: "/tour/hampi",
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
            link: "/tour/pondicherry",
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
            link: "/tour/gokarnamuru",
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
            link: "/tour/gokarnadandeli",
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
          link: "/tour/wayanad",
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
          link: "/tour/chikmagalur",
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
            link: "/tour/coorg",
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
          link: "/tour/ooty",
          state: "Tamil Nadu",
          day: "2D/1N",
          date: "July 21,2023(Friday)",
          person:"Per Person",
          amount: "5999"
        },
 
        {
          id:10,
          imgSrc: Trekhome,
          name: "kodaikanal Tour",
          link: "/tour/kodaikanal",
          state: "Karnataka",
          day: "2D/1N",
          date: "July 21,2023(Friday)",
          person:"Per Person",
          amount: "6499"
        },
      ]
      const LongWeekends = [
        {
          id:1,
          imgSrc: Trekhome,
          name: "Hampi Tour ",
          link: "/tour/hampi/3days-2nights",
          state: "Karnataka",
          day: "3D/2N",
          date: "July 21,2023(Friday)",
          person:"Per Person",
          amount: "7499"
        },
        {
          id:2,
          imgSrc: Trekhome,
          name: "Munnar Alleppey Tour ",
          link: "/tour/munar/3days-2nights",
          state: "Kerala",
          day: "3D/2N",
          date: "July 21,2023(Friday)",
          person:"Per Person",
          amount: "15000"
        },
        {
          id:3,
          imgSrc: Trekhome,
          name: "Goa Backpacking tour",
          link: "/tour/goa/3days-2nights",
          state: "Goa",
          day: "3D/2N",
          date: "July 21,2023(Friday)",
          person:"Per Person",
          amount: "8499"
        },
        {
          id:4,
          imgSrc: Trekhome,
          name: "Gokarna - Dandeli Tour",
          link: "/tour/gokarnadandeli/3days-2nights",
          state: "Karnataka",
          day: "3D/2N",
          date: "July 21,2023(Friday)",
          person:"Per Person",
          amount: "6999"
        },
        {
          id:5,
          imgSrc: Trekhome,
          name: "Wayanad Tour",
          link: "/tour/wayanad/3days-2nights",
          state: "Kerala",
          day: "3D/2N",
          date: "July 21,2023(Friday)",
          person:"Per Person",
          amount: "7999"
        },
        {
          id:6,
          imgSrc: Trekhome,
          name: "Coorg - Mysore Tour",
          link: "/tour/coorgmysore/3days-2nights",
          state: "Karnataka",
          day: "3D/2N",
          date: "July 21,2023(Friday)",
          person:"Per Person",
          amount: "7699"
        },
        {
          id:7,
          imgSrc: Trekhome,
          name: "Chikmagalur Tour",
          link: "/tour/chikmagalur/3days-2nights",
          state: "Karnataka",
          day: "3D/2N",
          date: "July 21,2023(Friday)",
          person:"Per Person",
          amount: "8499"
        },
      ]
      const internationaltours = [
        {
          id:1,
          imgSrc: Trekhome,
          name: "Best of Vietnam(5D/4N)",
          link: "/internationaltour/vietnam",
          state: "Vietnam ",
          day: "5D/4N"
        },
        {
          id:2,
          imgSrc: Trekhome,
          name: "PHUKET PHI PHI ISLAND TRIP(4D/3N) ",
          link: "/internationaltour/phuket-phi",
          state: "Thailand",
          day: "4D/3N"
        },
        {
          id:3,
          imgSrc: Trekhome,
          name: "PATTAYA - PHUKET TOUR(5D/4N)",
          link: "/internationaltour/pattaya-phuket",
          state: "Thailand",
          day: "5D/4N"
        },
        {
          id:4,
          imgSrc: Trekhome,
          name: "PHUKET - KRABI TOUR(6D/5N)",
          link: "/internationaltour/phuket-krabi/6days-5nights",
          state: "Thailand",
          day: "6D/5N"
        },
        {
          id:5,
          imgSrc: Trekhome,
          name: "PHUKET AND KRABI TOUR(5D/4N)",
          link: "/internationaltour/phuket-krabi/5days-4nights",
          state: "Thailand",
          day: "5D/4N"
        },
        {
          id:6,
          imgSrc: Trekhome,
          name: "BANGKOK - PATTAYA - PHUKET TOUR(6D/5N)",
          link: "/internationaltour/bangkok-pattaya",
          state: "Thailand",
          day: "6D/5N"
        
        },
        {
          id:7,
          imgSrc: Trekhome,
          name: "BEST OF BANGKOK - (4D/3N)",
          link: "/internationaltour/best-of-bangkok",
          state: "Thailand",
          day: "4D/3N"
        },
        {
          id:8,
          imgSrc: Trekhome,
          name: "BANGKOK TEMPLE TOUR - PATTAYA CORAL ISLAND (5D/4N)",
          link: "/internationaltour/bangkok-temple-pattaya-coral-island",
          state: "Thailand",
          day: "5D/4N"
        },
        {
          id:9,
          imgSrc: Trekhome,
          name: "Best Of Phuket And Krabi Tour Package -(6D/5N)",
          link: "/internationaltour/best-of-phuket-krabi",
          state: "Thailand",
          day: "6D/5N"
        },
        {
          id:10,
          imgSrc: Trekhome,
          name: "PATTAYA - BANGKOK TOUR (5D/4N)",
          link: "/internationaltour/pattaya-bangkok",
          state: "Thailand",
          day: "5D/4N"
        },
        {
          id:11,
          imgSrc: Trekhome,
          name: "Thailand Backpacking Tour (4D/3N )",
          link: "/internationaltour/thailand",
          state: "Thailand",
          day: "4D/3N"
        },
      ]
  return (
    <div >
    <div className="tour">
   <div className='tourbody'>
   <img src={TourHome} className="tourimg"/>
   </div>
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

          <Trekslider  slides={LongWeekends} />
      </div>
      <div className='tour-recom'>
          <div className='tour-recom-title'>International Tours</div>
       
          <IntTours slides={internationaltours} />
          
      </div>
      <Footer />
    </div>
    
      )
}

export default Tour
