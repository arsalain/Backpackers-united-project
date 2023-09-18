
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
              <Link to="/" style={{ textDecoration: 'none' , color: "white"}} >
                Home
              </Link>
            </li>
            <li className="n-right-drophead">
              <Link to="/destination" style={{ textDecoration: 'none' , color: "white"}} >
                Destination 
              </Link>
            </li>
            <li className="n-right-drophead" >
              <Link to="/trek" style={{ textDecoration: 'none' , color: "white"}} >
                Treks
              </Link>
              <div className="n-right-dropdown">
                <div className="n-right-dropdown-head" >
                <div className={toggleState === 1 ? "n-right-dropdown-tabs active-n-right-dropdown-tabs": "n-right-dropdown-tabs" } onClick={()=> toggleTab(1)}> Karnataka
                </div>
                <div className={toggleState === 2 ? "n-right-dropdown-tabs active-n-right-dropdown-tabs": "n-right-dropdown-tabs" } onClick={()=> toggleTab(2)}> Kerala
                </div>
                </div>
                <div className={toggleState === 1 ? "n-right-dropdown-body active-n-right-dropdown-body": "n-right-dropdown-body" }>
                  <div className="n-right-dropdown-karnataka-summer" >
                  <div className="n-right-dropdown-karnataka-summer-title" >Short Treks</div> 
          
            <div >
              <Link to="/trek/nethravathi" style={{ textDecoration: 'none' , color: "black"}} >
                Nethravathi
              </Link>
            </div>
            <div >
              <Link to="/trek/paithalamala" style={{ textDecoration: 'none' , color: "black"}} >
               Paithalamala 
              </Link>
            </div>
            <div >
              <Link to="/trek/ethina" style={{ textDecoration: 'none' , color: "black"}} >
              Ethina Bhuja 
              </Link>
            </div>
            <div >
              <Link to="/trek/skandagiri" style={{ textDecoration: 'none' , color: "black"}} >
              Skandagiri 
              </Link>
            </div>
            
            <div >
              <Link to="/trek/gokarna" style={{ textDecoration: 'none' , color: "black"}} >
                Gokarna
              </Link>
            </div>
            <div  >
              <Link to="/trek/huttari" style={{ textDecoration: 'none' , color: "black"}} >
               Huttari Betta 
              </Link>
            </div>

            </div>
            <div className="n-right-dropdown-karnataka-summer" >
                  <div className="n-right-dropdown-karnataka-summer-title" > Long Treks</div> 
            <div  >
              <Link to="/trek/kudremukha" style={{ textDecoration: 'none' , color: "black"}} >
              Kudremukha
              </Link>
            </div>
            <div >
              <Link to="/trek/kumara" style={{ textDecoration: 'none' , color: "black"}} >
              Kumara Parvatha
              </Link>
            </div>
            <div >
              <Link to="/trek/tadiandamol" style={{ textDecoration: 'none' , color: "black"}} >
              Tadiandamol
              </Link>
            </div>
            <div >
              <Link to="/trek/bramagiri" style={{ textDecoration: 'none' , color: "black"}} >
              Bramagiri
              </Link>
            </div>
            <div >
              <Link to="/trek/kurinjal" style={{ textDecoration: 'none' , color: "black"}} >
              Kurinjal
              </Link>
            </div>
            <div >
              <Link to="/trek/narasimha" style={{ textDecoration: 'none' , color: "black"}} >
              Narasimha
              </Link>
            </div>
            </div>
            <div className="n-right-dropdown-karnataka-summer" >
                  <div className="n-right-dropdown-karnataka-summer-title" >Waterfall Treks</div> 
            <div  >
              <Link to="/trek/bandaje" style={{ textDecoration: 'none' , color: "black"}} >
              Bandaje Falls
              </Link>
            </div>
            <div >
              <Link to="/trek/kodachadri" style={{ textDecoration: 'none' , color: "black"}} >
              Kodachadri
              </Link>
            </div>
            <div >
              <Link to="/trek/dudhsagar" style={{ textDecoration: 'none' , color: "black"}} >
              Dudhsagar Trek and Dandeli
              </Link>
            </div>
            <div  >
              <Link to="/trek/bilikal" style={{ textDecoration: 'none' , color: "black"}} >
              Bilikal
              </Link>
            </div>
            <div  >
              <Link to="/trek/arisinagundi" style={{ textDecoration: 'none' , color: "black"}} >
              Arisinagundi Falls
              </Link>
            </div>
             <div  >
              <Link to="/trek/arisinagundi" style={{ textDecoration: 'none' , color: "black"}} >
              Arisinagundi Falls
              </Link>
            </div>
            
            </div>
            </div>
            <div className={toggleState === 2 ? "n-right-dropdown-body active-n-right-dropdown-body": "n-right-dropdown-body" }>
            <div className="n-right-dropdown-karnataka-summer" >
                  <div className="n-right-dropdown-karnataka-summer-title" >Short Treks</div> 
          
            <div >
              <Link to="/trek/nethravathi" style={{ textDecoration: 'none' , color: "black"}} >
                Nethravathi
              </Link>
            </div>
            <div >
              <Link to="/trek/paithalamala" style={{ textDecoration: 'none' , color: "black"}} >
               Paithalamala 
              </Link>
            </div>
            <div >
              <Link to="/trek/ethina" style={{ textDecoration: 'none' , color: "black"}} >
              Ethina Bhuja 
              </Link>
            </div>
            <div >
              <Link to="/trek/skandagiri" style={{ textDecoration: 'none' , color: "black"}} >
              Skandagiri 
              </Link>
            </div>
            
            <div >
              <Link to="/trek/gokarna" style={{ textDecoration: 'none' , color: "black"}} >
                Gokarna
              </Link>
            </div>
            <div  >
              <Link to="/trek/huttari" style={{ textDecoration: 'none' , color: "black"}} >
               Huttari Betta 
              </Link>
            </div>

            </div>
            <div className="n-right-dropdown-karnataka-summer" >
                  <div className="n-right-dropdown-karnataka-summer-title" > Long Treks</div> 
            <div  >
              <Link to="/trek/kudremukha" style={{ textDecoration: 'none' , color: "black"}} >
              Kudremukha
              </Link>
            </div>
            <div >
              <Link to="/trek/kumara" style={{ textDecoration: 'none' , color: "black"}} >
              Kumara Parvatha
              </Link>
            </div>
            <div >
              <Link to="/trek/tadiandamol" style={{ textDecoration: 'none' , color: "black"}} >
              Tadiandamol
              </Link>
            </div>
            <div >
              <Link to="/trek/bramagiri" style={{ textDecoration: 'none' , color: "black"}} >
              Bramagiri
              </Link>
            </div>
            <div >
              <Link to="/trek/kurinjal" style={{ textDecoration: 'none' , color: "black"}} >
              Kurinjal
              </Link>
            </div>
            <div >
              <Link to="/trek/narasimha" style={{ textDecoration: 'none' , color: "black"}} >
              Narasimha
              </Link>
            </div>
            </div>
            <div className="n-right-dropdown-karnataka-summer" >
                  <div className="n-right-dropdown-karnataka-summer-title" >Waterfall Treks</div> 
            <div  >
              <Link to="/trek/bandaje" style={{ textDecoration: 'none' , color: "black"}} >
              Bandaje Falls
              </Link>
            </div>
            <div >
              <Link to="/trek/kodachadri" style={{ textDecoration: 'none' , color: "black"}} >
              Kodachadri
              </Link>
            </div>
            <div >
              <Link to="/trek/dudhsagar" style={{ textDecoration: 'none' , color: "black"}} >
              Dudhsagar Trek and Dandeli
              </Link>
            </div>
            <div  >
              <Link to="/trek/bilikal" style={{ textDecoration: 'none' , color: "black"}} >
              Bilikal
              </Link>
            </div>
            <div  >
              <Link to="/trek/arisinagundi" style={{ textDecoration: 'none' , color: "black"}} >
              Arisinagundi Falls
              </Link>
            </div>
             {/* <div  >
              <Link to="/trek/arisinagundi" style={{ textDecoration: 'none' , color: "black"}} >
              Arisinagundi Falls
              </Link>
            </div> */}
            
            </div>
            </div>
            </div>
            </li>
            
            <li className="n-right-drophead"> 
              <Link to="/tour" style={{ textDecoration: 'none' , color: "white"}} >
                Tours
              </Link>
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
