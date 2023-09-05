import "./trek.css"
import React ,{ useState} from 'react'
import {AiOutlineSearch} from "react-icons/ai";
import Footer from '../../Components/Nav/Footer/Footer.js'
import Navbar2 from '../../Components/Nav/Navbar/Navbar2.js'
import Trekhome from "../../Image/TrekHome.jpg"
import Trekslider from "../../Components/Trekslider/Trekslider";
// import 'react-multi-carousel/lib/styles.css';

const Trek = () =>{
    const [searchInput, setSearchInput] = useState("")
    
    const recommendedtreks = [
      {
        id:1,
        imgSrc: Trekhome,
        name: "Ethina Bhuja Trek",
        state: "Karnataka",
        day: "2D/1N",
        date: "July 21,2023(Friday)",
        person:"Per Person",
        amount: "3600"
      },
      {
        id:2,
        imgSrc: Trekhome,
        name: "Skandagiri Trek",
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
        state: "Karnataka",
        day: "2D/2N",
        date: "July 21,2023(Friday)",
        person:"Per Person",
        amount: "3499"
      },
      {
        id:4,
        imgSrc: Trekhome,
        name: "Tadiandamol Trek",
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
        state: "Karnataka",
        day: "2D/1N",
        date: "July 21,2023(Friday)",
        person:"Per Person",
        amount: "4799"
      },
      {
        id:6,
        imgSrc: Trekhome,
        name: "Kumara Parvatha Trek from Kukke",
        link: "/trek/kumara",
        state: "Karnataka",
        day: "2D/2N",
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
        day: "2D/2N",
        date: "July 21,2023(Friday)",
        person:"Per Person",
        amount: "3900"
      },
 
      {
        id:3,
        imgSrc: Trekhome,
        name: "Tadiandamol Trek",
        state: "Karnataka",
        day: "2D/1N",
        date: "July 21,2023(Friday)",
        person:"Per Person",
        amount: "3799"
      },
      {
        id:4,
        imgSrc: Trekhome,
        name: "Bramagiri Trek",
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
        link: "/trek/kumara",
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
        state: "Karnataka",
        day: "2D/1N",
        date: "July 21,2023(Friday)",
        person:"Per Person",
        amount: "3600"
      },
      {
        id:4,
        imgSrc: Trekhome,
        name: "Skandagiri Trek",
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
        state: "Karnataka",
        day: "2D/2N",
        date: "July 21,2023(Friday)",
        person:"Per Person",
        amount: "3799"
      },
      {
        id:6,
        imgSrc: Trekhome,
        name: "Huttari Betta Trek",
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
        state: "Karnataka",
        day: "2D/1N",
        date: "July 21,2023(Friday)",
        person:"Per Person",
        amount: "4799"
      },
      {
        id:4,
        imgSrc: Trekhome,
        name: "Bilikal Trek",
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
          <input type="text" placeholder="Search for amazing treks" className='trek-search-input'   onChange={(e)=>setSearchInput(e.target.value)}
   value={searchInput}/>
          <button  className='trek-search-button'><AiOutlineSearch   className="trek-search-icon" /></button>
         
          {/* {searchResult.map((list,index)=>(
          <div  className='trek-search-field'>
            <img src={`http://localhost:4000/uploads/${list.testimage}`} width={50} height={50} ></img>
            <div className='trek-search-field-name'>{list.name} </div>
          </div>
             ))} */}
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
