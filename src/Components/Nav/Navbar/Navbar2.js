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
                  <div className="n-right-south">
                    <div className="n-right-south-name">South Indian Treks</div>
                  <div className="n-right-dropdown-karnataka-summer" >
                  <div className="n-right-dropdown-karnataka-summer-title" >Karnataka</div> 
                    <div className="n-short"  >
              <Link to="/trek/kudremukha" className="n-short-link" >
              Kudremukha
              </Link>
            </div>
            <div className="n-short" >
              <Link to="/trek/nethravathi" className="n-short-link" >
                Nethravathi
              </Link>
            </div>
            <div className="n-short" >
              <Link to="/trek/kodachadri" className="n-short-link" >
              Kodachadri
              </Link>
            </div>
            <div className="n-short">
              <Link to="/trek/ethina" className="n-short-link" >
              Ethina Bhuja 
              </Link>
            </div>
            <div className="n-short" >
              <Link to="/trek/tadiandamol" className="n-short-link">
              Tadiandamol
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
            <div className="n-short" >
              <Link to="/trek/bandaje"className="n-short-link" >
              Bandaje Falls
              </Link>
            </div>
            <div className="n-short" >
              <Link to="/trek/kumara" className="n-short-link" >
             Ermai
              </Link>
            </div>
  
            </div>
            </div>
            <div className="n-vertical-line"></div>
            <div className="n-right-south">
                    <div className="n-right-dropdown-karnataka-summer" >
                 <div className="n-short"  >
              <Link to="/trek/kudremukha" className="n-short-link" >
         
              </Link>
            </div>
            <div className="n-short"  >
              <Link to="/trek/kudremukha" className="n-short-link" >
              
              </Link>
            </div>
            <div className="n-short"  >
              <Link to="/trek/kudremukha" className="n-short-link" >
              
              </Link>
            </div>
            <div className="n-short"  >
              <Link to="/trek/kudremukha" className="n-short-link" >
              
              </Link>
            </div>
                  <div className="n-short"  >
              <Link to="/trek/kudremukha" className="n-short-link" >
         
              </Link>
            </div>
            <div className="n-short"  >
              <Link to="/trek/kudremukha" className="n-short-link" >
              
              </Link>
            </div>
            <div className="n-short"  >
              <Link to="/trek/kudremukha" className="n-short-link" >
              
              </Link>
            </div>
            <div className="n-short">
              <Link to="/trek/skandagiri" className="n-short-link" >
              Skandagiri 
              </Link>
            </div>
                    <div className="n-short"  >
              <Link to="/trek/kumara" className="n-short-link" >
              Kumara Parvatha
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
            <div className="n-short" >
              <Link to="/trek/kodachadri" className="n-short-link" >
            
              </Link>
            </div>
            <div className="n-right-dropdown-karnataka-summer-title" > Kerala</div>
            <div className="n-short">
              <Link to="/trek/paithalamala" className="n-short-link" >
               Paithalamala 
              </Link>
            </div>
         
        
            <div className="n-short" >
              <Link to="/trek/bramagiri" className="n-short-link">
              Brahmagiri
              </Link>
            </div>
            <div className="n-short" >
              <Link to="/trek/bramagiri" className="n-short-link">
              Banasura
              </Link>
            </div>
            
            <div className="n-short" >
              <Link to="/trek/bramagiri" className="n-short-link">
              Meesapulimala
              </Link>
            </div>
            
            </div>
            </div>
            <div className="n-vertical-line"></div>
            <div className="n-right-south">
                   
                  <div className="n-right-dropdown-karnataka-summer" >
                
                  <div className="n-short"  >
              <Link to="/trek/kudremukha" className="n-short-link" >
         
              </Link>
            </div>
            <div className="n-short"  >
              <Link to="/trek/kudremukha" className="n-short-link" >
              
              </Link>
            </div>
            <div className="n-short"  >
              <Link to="/trek/kudremukha" className="n-short-link" >
         
              </Link>
            </div>
            <div className="n-short"  >
              <Link to="/trek/kudremukha" className="n-short-link" >
              
              </Link>
            </div>
            <div className="n-short"  >
              <Link to="/trek/kudremukha" className="n-short-link" >
              
              </Link>
            </div>
            <div className="n-short"  >
              <Link to="/trek/kudremukha" className="n-short-link" >
              
              </Link>
            </div>
            <div className="n-right-dropdown-karnataka-summer-title" >Tamil Nadu</div> 
            <div className="n-short" >
              <Link to="/trek/dudhsagar" className="n-short-link" >
              Kotagiri
              </Link>
            </div>  
                    <div className="n-short"  >
              <Link to="/trek/kudremukha" className="n-short-link" >
              Vattakanal
              </Link>
            </div>
            <div className="n-short" >
              <Link to="/trek/nethravathi" className="n-short-link" >
              Agasthyamalai
              </Link>
            </div>
            

            </div>
            </div>
           
                      
                       <div className="n-vertical-line"></div>
                       <div className="n-right-south">
                    <div className="n-right-south-name">North Indian Treks</div>
                  <div className="n-right-dropdown-karnataka-summer" >
                 <div className="n-short"  >
              <Link to="/trek/kudremukha" className="n-short-link" >
              Kedarkanta
              </Link>
            </div>
            <div className="n-short" >
              <Link to="/trek/nethravathi" className="n-short-link" >
              Kheerganga
              </Link>
            </div>
            <div className="n-short" >
              <Link to="/trek/kodachadri" className="n-short-link" >
              Brahma Tal
              </Link>
            </div>
            <div className="n-short">
              <Link to="/trek/ethina" className="n-short-link" >
              Kuari Pass
              </Link>
            </div>
            <div className="n-short" >
              <Link to="/trek/tadiandamol" className="n-short-link">
              Chopta Chandrashila
              </Link>
            </div>
            <div className="n-short">
              <Link to="/trek/gokarna" className="n-short-link">
              Nag Tibba
              </Link>
            </div>
            <div  className="n-short">
              <Link to="/trek/huttari" className="n-short-link" >
              Dayara Bugyal
              </Link>
            </div>

            </div>
            </div>
       
            </div>
            
            ..
            
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
                <div className="n-right-dropdown-head" >
                <div className={toggleState === 1 ? "n-right-dropdown-body active-n-right-dropdown-body": "n-right-dropdown-body" }>
                <div className="n-right-south1">
                  <div className="n-right-dropdown-karnataka-summer" >
                  <div className="n-right-dropdown-karnataka-summer-title" >Karnataka</div> 
                    <div className="n-short"  >
              <Link to="/tour/chikmagalur" className="n-short-link" >
              Chikmagalur
              </Link>
            </div>
            <div className="n-short" >
              <Link to="/tour/coorg" className="n-short-link" >
              Coorg
              </Link>
            </div>
            <div className="n-short" >
              <Link to="/tour/gokarnadandeli" className="n-short-link" >
              Gokarna Dandeli
              </Link>
            </div>
            <div className="n-short">
              <Link to="/tour/gokarnamuru" className="n-short-link" >
              Gokarna-Murudeshwara
              </Link>
            </div>
            <div className="n-short">
              <Link to="/tour/hampi" className="n-short-link" >
              Hampi
              </Link>
            </div>
            <div className="n-short">
              <Link to="/tour/coorgmysore/3days-2nights" className="n-short-link" >
              Coorg - Mysore Tour
              </Link>
            </div>
            <div className="n-short">
              <Link to="/tour/coorgmysore/3days-2nights" className="n-short-link" >
              
              </Link>
            </div>
            
            <div className="n-right-dropdown-karnataka-summer-title" >Goa</div>
            <div className="n-short">
              <Link to="/tour/goa/3days-2night" className="n-short-link" >
              Goa
              </Link>
            </div>
           
  
     
  
            </div>
            </div>
            <div className="n-vertical-line1"></div>
            <div className="n-right-south">
                   <div className="n-right-dropdown-karnataka-summer" >
                  <div className="n-right-dropdown-karnataka-summer-title" >Kerala</div> 
                    <div className="n-short"  >
              <Link to="/tour/wayanad" className="n-short-link" >
              Wayanad
              </Link>
            </div>
            <div className="n-short" >
              <Link to="/tour/munar" className="n-short-link" >
              Munnar
              </Link>
            </div>
            <div className="n-short" >
              <Link to="/tour/munar/3days-2nights" className="n-short-link" >
              Munnar Allepy
              </Link>
            </div>
            <div className="n-short" >
              <Link to="/tour/munar/3days-2nights" className="n-short-link" >
            
              </Link>
            </div>
            <div className="n-right-dropdown-karnataka-summer-title" >TamilNadu</div>
            <div className="n-short">
              <Link to="/tour/ooty" className="n-short-link" >
              Ooty
              </Link>
            </div>
            <div className="n-short" >
              <Link to="/tour/kodaikanal" className="n-short-link">
              Kodaikanal
              </Link>
            </div>
            <div className="n-short">
              <Link to="/tour/pondicherry" className="n-short-link">
              Pondicherry
              </Link>
            </div>
         
  
            </div>
            </div>
  
        
              
           
            </div>
            <div className={toggleState === 2 ? "n-right-dropdown-body active-n-right-dropdown-body": "n-right-dropdown-body" }>
            <div className="n-right-south">
                   <div className="n-right-dropdown-karnataka-summer" >
                  <div className="n-right-dropdown-karnataka-summer-title" >Thailand</div> 
                    <div className="n-short"  >
              <Link to="/internationaltour/bangkok-pattaya" className="n-short-link" >
              Bangkok - Pattaya - Phuket
              </Link>
            </div>
            <div className="n-short" >
              <Link to="/internationaltour/pattaya-phuket" className="n-short-link" >
              Phuket - Krabi Tour
              </Link>
            </div>
            <div className="n-short" >
              <Link to="/internationaltour/pattaya-phuket" className="n-short-link" >
              Pattaya - Phuket
              </Link>
            </div>
            <div className="n-short">
              <Link to="/internationaltour/phuket-phi" className="n-short-link" >
              Phuket Phi Phi Island
              </Link>
            </div>
            <div className="n-short" >
              <Link to="/internationaltour/best-of-bangkok" className="n-short-link">
              Best of Bangakok
              </Link>
            </div>
            <div className="n-short">
              <Link to="/internationaltour/bangkok-temple-pattaya-coral-island" className="n-short-link">
              Bangkok Temple Tour - Pattaya Coral Island
              </Link>
            </div>
         
  
            </div>
            </div>
            <div className="n-right-dropdown-karnataka-summer" >
            
           <div className="n-vertical-line1"></div>
            </div>
            <div className="n-right-dropdown-karnataka-summer" >
                  <div className="n-right-dropdown-karnataka-summer-title" >Vietnam</div> 
            <div className="n-short">
              <Link to="/internationaltour/vietnam" className="n-short-link">
              Best of Vietnam
              </Link>
            </div>
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