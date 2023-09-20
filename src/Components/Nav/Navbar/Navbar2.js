
import React , {useState, useEffect} from "react";
import "./Navbar2.css";
import {CgCloseR, CgMenu} from "react-icons/cg";
import {Link} from "react-router-dom"
import bplog from "../../../Images/bplogo.jpg"


const Navbar2 = () =>{
  const [navbar,setNavbar] = useState(false)
  const [isOpen,setIsOpen] = useState(false)
  const [toggleState,setToggleState] = useState(1)
  const toggleTab=(index)=>{
    setToggleState(index);
  }
  useEffect(() => {
    window.addEventListener('scroll',changeBackground)
  }, [])
  const changeBackground = () =>{
    if(window.scrollY >= 50){
        setNavbar(true)
    }else{
        setNavbar(false)
    }
      
  }
  const [toggle, setToggle]=useState(false);

  const handleToggle=()=>{
    setToggle(!toggle);
  }
 
  
  return (
    <>
    <div className= {navbar ? "n-wrapper2 active" : "n-wrapper2"}  >
      <div className="n-left12">
      <div ><img  className="n-img2" src={bplog}></img></div>
      <div className="n-left2">
        
        <div className="n-name2">BACKPACKERS</div>
        <div className="n-name12">UNITED</div>
      </div>
      </div>
      <div className="n-right2">
        <div className={toggle ? "n-list2 active": "n-list2 "}>
          <ul  style={{ listStyleType: "none" }}>
            <li className="n-right-drophead">
              <Link to="/" className="n-link" >
                Home
              </Link>
            </li>
            <li className="n-right-drophead">
              <Link to="/destination" className="n-link" >
                Destination 
              </Link>
            </li>
            <li className="n-right-drophead" >
              <Link to="/trek" className="n-link" >
                Treks
              </Link>
              <div className="n-right-dropdown">
                <div className="n-right-dropdown-head" >
                  <div className="n-right-dropdown-karnataka-summer" >
                  <div className="n-right-dropdown-karnataka-summer-title" >Short Treks</div> 
            <div className="n-short" >
              <Link to="/trek/nethravathi" className="n-short-link" >
                Nethravathi
              </Link>
            </div>
            <div className="n-short">
              <Link to="/trek/paithalamala" className="n-short-link" >
               Paithalamala 
              </Link>
            </div>
            <div className="n-short">
              <Link to="/trek/ethina" className="n-short-link" >
              Ethina Bhuja 
              </Link>
            </div>
            <div className="n-short">
              <Link to="/trek/skandagiri" className="n-short-link" >
              Skandagiri 
              </Link>
            </div>
            
            <div className="n-short">
              <Link to="/trek/gokarna" className="n-short-link">
                Gokarna
              </Link>
            </div>
            <div  className="n-short">
              <Link to="/trek/huttari" className="n-short-link" >
               Huttari Betta 
              </Link>
            </div>

            </div>
            <div className="n-right-dropdown-karnataka-summer" >
                  <div className="n-right-dropdown-karnataka-summer-title" > Long Treks</div> 
            <div className="n-short"  >
              <Link to="/trek/kudremukha" className="n-short-link" >
              Kudremukha
              </Link>
            </div>
            <div className="n-short" >
              <Link to="/trek/kumara" className="n-short-link" >
              Kumara Parvatha
              </Link>
            </div>
            <div className="n-short" >
              <Link to="/trek/tadiandamol" className="n-short-link">
              Tadiandamol
              </Link>
            </div>
            <div className="n-short" >
              <Link to="/trek/bramagiri" className="n-short-link">
              Bramagiri
              </Link>
            </div>
            <div className="n-short" >
              <Link to="/trek/kurinjal" className="n-short-link" >
              Kurinjal
              </Link>
            </div>
            <div className="n-short" >
              <Link to="/trek/narasimha" className="n-short-link" >
              Narasimha
              </Link>
            </div>
            </div>
            <div className="n-right-dropdown-karnataka-summer" >
                  <div className="n-right-dropdown-karnataka-summer-title" >Waterfall Treks</div> 
            <div className="n-short" >
              <Link to="/trek/bandaje"className="n-short-link" >
              Bandaje Falls
              </Link>
            </div>
            <div className="n-short" >
              <Link to="/trek/kodachadri" className="n-short-link" >
              Kodachadri
              </Link>
            </div>
            <div className="n-short" >
              <Link to="/trek/dudhsagar" className="n-short-link" >
              Dudhsagar Trek and Dandeli
              </Link>
            </div>
            <div  className="n-short" >
              <Link to="/trek/bilikal" className="n-short-link">
              Bilikal
              </Link>
            </div>
            <div className="n-short" >
              <Link to="/trek/arisinagundi" className="n-short-link" >
              Arisinagundi Falls
              </Link>
            </div>
            
            </div>
            </div>
            </div>
            </li>
            
            <li className="n-right-drophead" >
              <Link to="/tour" style={{ textDecoration: 'none' , color: "white"}} >
                Tours
              </Link>
              <div className="n-right-dropdown">
                <div className="n-right-dropdown-head" >
                <div className={toggleState === 1 ? "n-right-dropdown-tabs active-n-right-dropdown-tabs": "n-right-dropdown-tabs" } onClick={()=> toggleTab(1)}> National
                </div>
                <div className={toggleState === 2 ? "n-right-dropdown-tabs active-n-right-dropdown-tabs": "n-right-dropdown-tabs" } onClick={()=> toggleTab(2)}> International
                </div>
                </div>
                <div className={toggleState === 1 ? "n-right-dropdown-body active-n-right-dropdown-body": "n-right-dropdown-body" }>
                  <div className="n-right-dropdown-karnataka-summer" >
                  <div className="n-right-dropdown-karnataka-summer-title" >Karnataka</div> 
          
            <div >
              <Link to="/tour/chikmagalur" style={{ textDecoration: 'none' , color: "black"}} >
                Chikmagalur
              </Link>
            </div>
            <div >
              <Link to="/tour/coorg" style={{ textDecoration: 'none' , color: "black"}} >
              Coorg
              </Link>
            </div>
            <div >
              <Link to="/tour/gokarnadandeli" style={{ textDecoration: 'none' , color: "black"}} >
              Gokarna Dandeli
              </Link>
            </div>
            <div >
              <Link to="/tour/gokarnamuru" style={{ textDecoration: 'none' , color: "black"}} >
              Gokarna-Murudeshwara
              </Link>
            </div>  
            
            <div >
              <Link to="/tour/hampi" style={{ textDecoration: 'none' , color: "black"}} >
              Hampi
              </Link>
            </div>
            <div  >
              <Link to="/tour/coorgmysore/3days-2nights" style={{ textDecoration: 'none' , color: "black"}} >
              Coorg - Mysore Tour
              </Link>
            </div>

            </div>
            <div className="n-right-dropdown-karnataka-summer" >
                  <div className="n-right-dropdown-karnataka-summer-title" >Kerala</div> 
            <div  >
              <Link to="/tour/wayanad" style={{ textDecoration: 'none' , color: "black"}} >
              Wayanad
              </Link>
            </div>
            <div >
              <Link to="/tour/munar" style={{ textDecoration: 'none' , color: "black"}} >
              Munnar
              </Link>
            </div>
            <div >
              <Link to="/tour/munar/3days-2nights" style={{ textDecoration: 'none' , color: "black"}} >
              Munnar Allepy 
              </Link>
            </div>
            </div>
            <div className="n-right-dropdown-karnataka-summer" >
                  <div className="n-right-dropdown-karnataka-summer-title" >TamilNadu</div> 
            <div  >
              <Link to="/tour/ooty" style={{ textDecoration: 'none' , color: "black"}} >
              Ooty 
              </Link>
            </div>
            <div >
              <Link to="/tour/kodaikanal" style={{ textDecoration: 'none' , color: "black"}} >
              Kodaikanal
              </Link>
            </div>
            <div >
              <Link to="/tour/pondicherry" style={{ textDecoration: 'none' , color: "black"}} >
              Pondicherry
              </Link>
            </div>
            
            </div>
            <div className="n-right-dropdown-karnataka-summer" >
                  <div className="n-right-dropdown-karnataka-summer-title" >Goa</div> 
            <div  >
              <Link to="/tour/goa/3days-2nights" style={{ textDecoration: 'none' , color: "black"}} >
              Goa 
              </Link>
            </div>
           
           
            
            </div>
            </div>
            <div className={toggleState === 2 ? "n-right-dropdown-body active-n-right-dropdown-body": "n-right-dropdown-body" }>
            <div className="n-right-dropdown-karnataka-summer" >
                  <div className="n-right-dropdown-karnataka-summer-title" >Thailand</div> 
          
            <div >
              <Link to="/internationaltour/bangkok-pattaya" style={{ textDecoration: 'none' , color: "black"}} >
              Bangkok - Pattaya - Phuket
              </Link>
            </div>
            <div >
              <Link to="/internationaltour/phuket-krabi/6days-5nights" style={{ textDecoration: 'none' , color: "black"}} >
              Phuket - Krabi Tour
              </Link>
            </div>
            <div >
              <Link to="/internationaltour/pattaya-phuket" style={{ textDecoration: 'none' , color: "black"}} >
              Pattaya - Phuket
              </Link>
            </div>
            <div >
              <Link to="/internationaltour/phuket-phi" style={{ textDecoration: 'none' , color: "black"}} >
              Phuket Phi Phi Island
              </Link>
            </div>
            
            <div >
              <Link to="/internationaltour/best-of-bangkok" style={{ textDecoration: 'none' , color: "black"}} >
              Best of Bangakok
              </Link>
            </div>
            <div  >
              <Link to="/internationaltour/bangkok-temple-pattaya-coral-island" style={{ textDecoration: 'none' , color: "black"}} >
              Bangkok Temple Tour - Pattaya Coral Island
              </Link>
            </div>

            </div>
            <div className="n-right-dropdown-karnataka-summer" >
                  <div className="n-right-dropdown-karnataka-summer-title" >Vietnam</div> 
            <div  >
              <Link to="/internationaltour/vietnam" style={{ textDecoration: 'none' , color: "black"}} >
              Best of Vietnam
              </Link>
            </div>  
            </div>
            </div>
            </div>
            </li>
          
        </ul>
      
        </div>
        </div>
         
        <div className="mobile-navbar2" onClick={handleToggle}>
              {toggle? <CgCloseR  className='mobile-nav-icon2' />:   <CgMenu className='mobile-nav-icon2' /> }

        </div>
        </div> 
      </>
    
  );

}
export default Navbar2;
