import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import axios from "axios"
import "./trekpage.css"
import Navbar2 from '../../Components/Nav/Navbar/Navbar2'
import {LuClock9} from "react-icons/lu"
import {GiLevelThree} from "react-icons/gi"
import {IoMdArrowDropdown,IoMdArrowDropup} from "react-icons/io"
import {FaLocationDot} from "react-icons/fa6"
import {TbPointFilled,TbPoint} from "react-icons/tb"
import kudremukh from "../../Images/Kudremukha.png"
import kud from "../../Image/kudremukhmain.jpeg"
import stay from "../../Images/satishmullodistay.jpg"
import KudremukhSight from "../../Images/KudremukhSight.jpg"
import jeepride from "../../Images/kudremukhjeep.jpg"
import view from "../../Images/Bhamikonda.jpg"
import somawathi from "../../Images/somawathifalls.JPG"
import netravathi from "../../Images/Nethravathi.png"
import tandiamol from "../../Images/thandiamol.jpg"
import gokarna from "../../Images/gokarna.jpg"
import Review from '../../Components/Product/Reviews/Review'
import Footer from "../../Components/Nav/Footer/Footer"
import Gallery from '../../Components/Product/Galeery/Gallery'
import Productfaq from '../../Components/Product/Faq/Productfaq'
const Trekpage = () => {
    const { id } = useParams();
    const [toggleState, setToggleState] = useState(1);
    const [show,setShow] = useState(false)
    const [show1,setShow1] = useState(false)
    const [show2,setShow2] = useState(false)
    const [show3,setShow3] = useState(false)
    const [show4,setShow4] = useState(false)
    const [activeTab, setActiveTab] = useState(1);
    const [productData, setProductData] = useState({});
    let fetchedData = null;
    const handleTabClick = (tabNumber) => {
      setActiveTab(tabNumber);
    };
    const events = [
      { eventSlug: productData.eventSlug, placement:  productData.placement }
      // ... any other events
    ];
  
      useEffect(() => {
    const fetchData = async () => {
 
        const apiUrl = `http://localhost:4000/trek/get/${id}`;

        axios.get(apiUrl)
        .then((response) => {
          fetchedData= response.data.eventSlug
        
          setProductData(response.data)
          
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        }); 
      }
      
    
        fetchData()
      }, [id]);
      const initWidget = () => {
        if (window.logout && window.logout.widget && productData?.eventSlug ) {
                window.logout.widget.setConfig({
                    eventSlug: productData.eventSlug,
                    placement:'#book-container-kudremukh',
                    customClass: 'btn-custom',
                    btnId: 'logout-bnb',
                    downloadBtnId: 'logout-download-button',
                    enquiryBtnId: 'logout-enquiry-button',
                    showEverything: true,
                    onlyButton: false,
                    showItineraryButton: true,
                    showEnquiryButton: true,
                    bookNowButtonColor: '#28a745',
                    itineraryButtonColor: '#dc3545',
                });
                window.logout.widget.init();
        }
      }
  
    useEffect(() => {
 
        const script = document.createElement('script');
        script.src = 'https://logout.world/static/widget/logout-booking.js';
        script.async = false;
        script.onload = initWidget;
        document.body.appendChild(script);
  
      return () => {
        document.body.removeChild(script);
      };
    }, [id,initWidget])
    // "kudremukh-trek-t4to"
    
    console.log(productData.eventSlug,"Slug")
    // console.log(fetchedData,"Slug1")
   

  const data = [
    {
      id: `/blogs/${productData.reviewid1}`,
      imgSrc:`http://localhost:4000/uploads/${productData.reviewimg1}`,
      imgalt: productData.reviewalt1,
      title: productData.reviewtitle1,
      para: productData.reviewpara1,
    },
    {
      id: `/blogs/${productData.reviewid2}`,
      imgSrc:`http://localhost:4000/uploads/${ productData.reviewimg2}`,
      imgalt: productData.reviewalt2,
      title: productData.reviewtitle2,
      para: productData.reviewpara2,
    },
    {
      id: `/blogs/${productData.reviewid3}`,
      imgSrc:`http://localhost:4000/uploads/${productData.reviewimg3}` ,
      imgalt: productData.reviewalt3,
      title: productData.reviewtitle3,
      para: productData.reviewpara3,
    }
  ]
  const Gdata = [
    {
      id: productData.planid1,
      Gimg: `http://localhost:4000/uploads/${productData.planimg1}`,
      Gname: productData.planname1,
      Gpara: productData.planpara1,
    },
    {
      id: productData.planid2,
      Gimg: `http://localhost:4000/uploads/${productData.planimg2}`,
      Gname: productData.planname2,
      Gpara: productData.planpara2,
     },
    {
      id: productData.planid3,
      Gimg: `http://localhost:4000/uploads/${productData.planimg3}`,
      Gname: productData.planname3,
      Gpara: productData.planpara3,
    },
    {
      id: productData.planid4,
      Gimg: `http://localhost:4000/uploads/${productData.planimg4}`,
      Gname: productData.planname4,
      Gpara: productData.planpara4,
      },
    {
      id: productData.planid5,
      Gimg: `http://localhost:4000/uploads/${productData.planimg5}`,
      Gname: productData.planname5,
      Gpara: productData.planpara5,
    },
    {
      id: productData.planid6,
      Gimg: `http://localhost:4000/uploads/${productData.planimg6}`,
      Gname: productData.planname6,
      Gpara: productData.planpara6,
      },
    {
      id: productData.planid7,
      Gimg: `http://localhost:4000/uploads/${productData.planimg7}`,
      Gname: productData.planname7,
      Gpara: productData.planpara7,
    },
    {
      id: productData.planid8,
      Gimg:`http://localhost:4000/uploads/${productData.planimg8}`,
      Gname: productData.planname8,
      Gpara: productData.planpara8,
    },
    {
      id: productData.planid9,
      Gimg:`http://localhost:4000/uploads/${productData.planimg9}`,
      Gname: productData.planname9,
      Gpara: productData.planpara9,
    },
    {
      id: productData.planid10,
      Gimg:`http://localhost:4000/uploads/${productData.planimg10}`,
      Gname: productData.planname10,
      Gpara: productData.planpara10,
    },
  ]
    const toggleTab = (index) => {
        setToggleState(index);
      };
      const handleShow = () =>{
        setShow(!show)
      }
      const handleShow1 = () =>{
        setShow1(!show1)
      }
      const handleShow2 = () =>{
        setShow2(!show2)
      }
      const handleShow3 = () =>{
        setShow3(!show3)
      }
      const handleShow4 = () =>{
        setShow4(!show4)
      }
  return (
    <>
     
     <div className='product'>
    
    <div className='product-img'>
        <img src={`http://localhost:4000/uploads/${productData.testimage}`}  className='product-img-main' />
      <div className='product-img-body'>
        <Navbar2 />
        <div className='product-title-body' >
          <div className='product-body-contain'>
        <div className='product-img-title' >{productData.covername}</div> 
       <div className='product-title-time' >{productData.state  && <div ><FaLocationDot className='product-title-icon' ></FaLocationDot>{productData.state}</div>  }
       {productData.coverdaynight && <div ><LuClock9 className='product-title-icon1'></LuClock9>{productData.coverdaynight}</div> }
       {productData.coverdifficulty &&<div ><GiLevelThree className='product-title-icon1'></GiLevelThree>{productData.coverdifficulty }</div> }</div>
       {productData.coverpara && <div className='prodeuct-title-para' >{productData.coverpara}</div>}
          <div className='product-iternary-left-but'><button className='product-iternary-left-but-bt'>Dowload PDF</button></div>
          </div>
        </div>
        </div>
        </div>
        <div className='product-iternary' >
            <div className='product-iternary-left' >
                <div className='product-iternary-left-line' ></div>
                <div className='product-iternary-left-title'>Itinerary</div>
                {productData.iternaryday0title && <div className='product-iternary-left-day'>
              <div className='product-iternary-left-day0' onClick={handleShow}><div > {productData.iternaryday0title}</div>
                <div  className='product-iternary-left-day0-but'>
                  {show ? <IoMdArrowDropup className='product-iternary-left-day0-icon' />: 
                  <IoMdArrowDropdown className='product-iternary-left-day0-icon' />}
                  </div></div>
               

  {
                  show ?  <div className='product-iternary-left-day0-body' >
                   {productData.iternaryday0pointH1 && <div className='product-iternary-left-day0-title'>
               <div >  {productData.iternaryday0pointH1 }</div></div> }
               {productData.iternaryday0point1 && <div className='product-iternary-left-day0-point'>
                 <div className='product-iternary-left-day0-point-icon'><TbPointFilled >
                  </TbPointFilled> </div> <div className='product-iternary-left-day0-point-text'>  {productData.iternaryday0point1 }</div></div> }
                  {productData.iternaryday0point2 &&  <div className='product-iternary-left-day0-point'>
                 <div className='product-iternary-left-day0-point-icon' ><TbPointFilled  >
                  </TbPointFilled> </div> <div className='product-iternary-left-day0-point-text' >{productData.iternaryday0point2  }</div></div> }
                  {productData.iternaryday0point3 &&   <div className='product-iternary-left-day0-point'>
                <div className='product-iternary-left-day0-point-icon'> <TbPointFilled  >
                  </TbPointFilled> </div> <div className='product-iternary-left-day0-point-text'>{productData.iternaryday0point3 }</div></div> }
                  {productData.iternaryday0point4 &&   <div className='product-iternary-left-day0-point'>
                <div className='product-iternary-left-day0-point-icon'> <TbPointFilled  >
                  </TbPointFilled> </div> <div className='product-iternary-left-day0-point-text'>{productData.iternaryday0point4 }</div></div> }
                  {productData.iternaryday0point5 &&   <div className='product-iternary-left-day0-point'>
                <div className='product-iternary-left-day0-point-icon'> <TbPointFilled  >
                  </TbPointFilled> </div> <div className='product-iternary-left-day0-point-text'>{productData.iternaryday0point5 }</div></div> }
                {productData.iternaryday0pickup1 && <div className='product-iternary-left-day0-point-loc'>
               <div className='product-iternary-left-day0-point-icon'><TbPoint  >
                </TbPoint> </div> <div >{productData.iternaryday0pickup1}</div> </div> }
                {productData.iternaryday0pickup2 &&   <div className='product-iternary-left-day0-point-loc'>
              <div className='product-iternary-left-day0-point-icon' > <TbPoint >
                </TbPoint> </div><div >{productData.iternaryday0pickup2}</div></div> }
                {productData.iternaryday0pickup3 &&   <div className='product-iternary-left-day0-point-loc'>
               <div className='product-iternary-left-day0-point-icon'><TbPoint  > 
                </TbPoint></div><div >{productData.iternaryday0pickup3}</div></div>}
                {productData.iternaryday0pickup4 && <div className='product-iternary-left-day0-point-loc'>
               <div className='product-iternary-left-day0-point-icon'><TbPoint  >
                </TbPoint> </div><div >{productData.iternaryday0pickup4}</div></div> }
                {productData.iternaryday0pickup5 && <div className='product-iternary-left-day0-point-loc'>
               <div className='product-iternary-left-day0-point-icon'><TbPoint  >
                </TbPoint> </div><div >{productData.iternaryday0pickup5}</div></div> }
                 </div> :null
              }
              </div>
} {productData.iternaryday1title && 
              <div className='product-iternary-left-day'>
              <div className='product-iternary-left-day0' onClick={handleShow1}><div >{productData.iternaryday1title}</div>
              <div  className='product-iternary-left-day0-but'>
                {show1 ? <IoMdArrowDropup className='product-iternary-left-day0-icon' />:
                <IoMdArrowDropdown className='product-iternary-left-day0-icon' />}
                </div></div>
                {
                show1 ?  <div className='product-iternary-left-day0-body'>
                {productData.iternaryday1pointH1 &&      <div className='product-iternary-left-day0-title'>
                    {productData.iternaryday1pointH1}
                    </div>
                    }
               {productData.iternaryday1point1 &&     <div className='product-iternary-left-day0-point'>
               <div  className='product-iternary-left-day0-point-icon'><TbPointFilled >
                </TbPointFilled> </div> <div className='product-iternary-left-day0-point-text' >{productData.iternaryday1point1}</div></div> }
                {productData.iternaryday1point2 && <div className='product-iternary-left-day0-point'>
                <div className='product-iternary-left-day0-point-icon'> <TbPointFilled  >
                </TbPointFilled> </div> <div className='product-iternary-left-day0-point-text' >{productData.iternaryday1point2}</div></div>}
                {productData.iternaryday1pointH2 &&  <div className='product-iternary-left-day0-title'>
                   {productData.iternaryday1pointH2}
                    </div> 
                      }
                  {productData.iternaryday1point3 &&  <div className='product-iternary-left-day0-point'>
               <div  className='product-iternary-left-day0-point-icon'><TbPointFilled >
                </TbPointFilled> </div><div  className='product-iternary-left-day0-point-text'>{productData.iternaryday1point3} </div></div>}
                {productData.iternaryday1point4 &&  <div className='product-iternary-left-day0-point'>
              <div className='product-iternary-left-day0-point-icon'> <TbPointFilled  >
                </TbPointFilled> </div><div  className='product-iternary-left-day0-point-text'>{productData.iternaryday1point4}</div></div> }
                {productData.iternaryday1pointH3 &&    <div className='product-iternary-left-day0-title'>
                  {productData.iternaryday1pointH3}
                    </div> }
                    {productData.iternaryday1point5 &&  <div className='product-iternary-left-day0-point'>
                   <div className='product-iternary-left-day0-point-icon'><TbPointFilled  >
                </TbPointFilled></div><div className='product-iternary-left-day0-point-text' >{productData.iternaryday1point5} </div></div> }
                {productData.iternaryday1point6 &&   <div className='product-iternary-left-day0-point'>
              <div  className='product-iternary-left-day0-point-icon' > <TbPointFilled >
                </TbPointFilled> </div><div  className='product-iternary-left-day0-point-text'>{productData.iternaryday1point6}</div></div> }
                {productData.iternaryday1pointH4 &&     <div className='product-iternary-left-day0-title'>
                  {productData.iternaryday1pointH4}
                    </div> }
                    {productData.iternaryday1point7 &&   <div className='product-iternary-left-day0-point'>
               <div className='product-iternary-left-day0-point-icon'><TbPointFilled  >
                </TbPointFilled> </div><div  className='product-iternary-left-day0-point-text'>{productData.iternaryday1point7}</div></div> }
                {productData.iternaryday1point8 &&   <div className='product-iternary-left-day0-point'>
               <div className='product-iternary-left-day0-point-icon'><TbPointFilled  >
                </TbPointFilled> </div><div  className='product-iternary-left-day0-point-text'>{productData.iternaryday1point8}</div></div> }
                {productData.iternaryday1pointH5 &&     <div className='product-iternary-left-day0-title'>
                  {productData.iternaryday1pointH5}
                    </div> }
                    {productData.iternaryday1point9 &&   <div className='product-iternary-left-day0-point'>
               <div className='product-iternary-left-day0-point-icon'><TbPointFilled  >
                </TbPointFilled> </div><div  className='product-iternary-left-day0-point-text'>{productData.iternaryday1point9}</div></div> }
                {productData.iternaryday1point9 &&   <div className='product-iternary-left-day0-point'>
               <div className='product-iternary-left-day0-point-icon'><TbPointFilled  >
                </TbPointFilled> </div><div  className='product-iternary-left-day0-point-text'>{productData.iternaryday1point9}</div></div> }
                </div> : null
}
</div>
}
{productData.iternaryday2title && <div className='product-iternary-left-day'>
<div className='product-iternary-left-day0' onClick={handleShow2}><div >{productData.iternaryday2title}</div>
              <div  className='product-iternary-left-day0-but'>
                {show2 ? <IoMdArrowDropup className='product-iternary-left-day0-icon' />:
                <IoMdArrowDropdown className='product-iternary-left-day0-icon' />}
                </div>
</div>
                { show2 ?  <div className='product-iternary-left-day0-body'>
                {productData.iternaryday2pointH1 && <div className='product-iternary-left-day0-title'>
                   {productData.iternaryday2pointH1}
                    </div> }

{productData.iternaryday2point1 &&        <div className='product-iternary-left-day0-point'>
              <div className='product-iternary-left-day0-point-icon' > <TbPointFilled  >
                </TbPointFilled> </div><div className='product-iternary-left-day0-point-text'>{productData.iternaryday2point1}</div></div> }
    {productData.iternaryday2point2 &&          <div className='product-iternary-left-day0-point'>
                <div className='product-iternary-left-day0-point-icon' >  <TbPointFilled  >
                </TbPointFilled> </div><div className='product-iternary-left-day0-point-text' >{productData.iternaryday2point2}</div></div> }
  {productData.iternaryday2point3 && <div className='product-iternary-left-day0-point'>
                  <div className='product-iternary-left-day0-point-icon' > <TbPointFilled className='product-iternary-left-day0-point-icon' >
                </TbPointFilled> </div><div className='product-iternary-left-day0-point-text' >{productData.iternaryday2point3}</div></div> }
                {productData.iternaryday2pointH2 && <div className='product-iternary-left-day0-title'>
                   {productData.iternaryday2pointH2}
                    </div> }
                {productData.iternaryday2point4 && <div className='product-iternary-left-day0-point'>
                <div className='product-iternary-left-day0-point-icon' >  <TbPointFilled className='product-iternary-left-day0-point-icon' >
                </TbPointFilled> </div><div  className='product-iternary-left-day0-point-text'>{productData.iternaryday2point4}</div></div> }
                {productData.iternaryday2point5 &&        <div className='product-iternary-left-day0-point'>
                <div className='product-iternary-left-day0-point-icon' >  <TbPointFilled className='product-iternary-left-day0-point-icon' >
                </TbPointFilled> </div><div  className='product-iternary-left-day0-point-text'>{productData.iternaryday2point5} </div></div> }
                {productData.iternaryday2point6 &&       <div className='product-iternary-left-day0-point'>
                <div className='product-iternary-left-day0-point-icon' > <TbPointFilled className='product-iternary-left-day0-point-icon' >
                {productData.iternaryday2pointH3 && <div className='product-iternary-left-day0-title'>
                   {productData.iternaryday2pointH3}
                    </div> }
                </TbPointFilled> </div><div  className='product-iternary-left-day0-point-text'>{productData.iternaryday2point6} </div></div> }
                {productData.iternaryday2point7 &&       <div className='product-iternary-left-day0-point'>
                <div className='product-iternary-left-day0-point-icon' >  <TbPointFilled className='product-iternary-left-day0-point-icon' >
                </TbPointFilled></div> <div  className='product-iternary-left-day0-point-text'>{productData.iternaryday2point7}</div></div> }
                {productData.iternaryday2point8 &&       <div className='product-iternary-left-day0-point'>
                <div className='product-iternary-left-day0-point-icon' >  <TbPointFilled className='product-iternary-left-day0-point-icon' >
                </TbPointFilled></div> <div  className='product-iternary-left-day0-point-text'>{productData.iternaryday2point8}</div></div> }
                </div>
              


                : null }
                </div>
}
            
{productData.iternaryday3title && <div className='product-iternary-left-day'>
<div className='product-iternary-left-day0' onClick={handleShow3}><div >{productData.iternaryday3title}</div>
              <div  className='product-iternary-left-day0-but'>
                {show3 ? <IoMdArrowDropup className='product-iternary-left-day0-icon' />:
                <IoMdArrowDropdown className='product-iternary-left-day0-icon' />}
                </div>
</div>
                { show3 ?  <div className='product-iternary-left-day0-body'>
                {productData.iternaryday3pointH1 && <div className='product-iternary-left-day0-title'>
                   {productData.iternaryday3pointH1}
                    </div>}

{productData.iternaryday3point1 &&        <div className='product-iternary-left-day0-point'>
              <div className='product-iternary-left-day0-point-icon' > <TbPointFilled  >
                </TbPointFilled> </div><div className='product-iternary-left-day0-point-text'>{productData.iternaryday3point1}</div></div> }
    {productData.iternaryday3point2 &&          <div className='product-iternary-left-day0-point'>
                <div className='product-iternary-left-day0-point-icon' >  <TbPointFilled  >
                </TbPointFilled> </div><div className='product-iternary-left-day0-point-text' >{productData.iternaryday3point2}</div></div> }
  {productData.iternaryday3point3 && <div className='product-iternary-left-day0-point'>
                  <div className='product-iternary-left-day0-point-icon' > <TbPointFilled className='product-iternary-left-day0-point-icon' >
                </TbPointFilled> </div><div className='product-iternary-left-day0-point-text' >{productData.iternaryday3point3}</div></div> }
                {productData.iternaryday3pointH2 && <div className='product-iternary-left-day0-title'>
                   {productData.iternaryday3pointH2}
                    </div>}
                {productData.iternaryday3point4 && <div className='product-iternary-left-day0-point'>
                <div className='product-iternary-left-day0-point-icon' >  <TbPointFilled className='product-iternary-left-day0-point-icon' >
                </TbPointFilled> </div><div  className='product-iternary-left-day0-point-text'>{productData.iternaryday3point4}</div></div> }
                {productData.iternaryday3point5 &&        <div className='product-iternary-left-day0-point'>
                <div className='product-iternary-left-day0-point-icon' >  <TbPointFilled className='product-iternary-left-day0-point-icon' >
                </TbPointFilled> </div><div  className='product-iternary-left-day0-point-text'>{productData.iternaryday3point5} </div></div> }
                {productData.iternaryday3pointH3 && <div className='product-iternary-left-day0-title'>
                   {productData.iternaryday3pointH3}
                    </div>}
                {productData.iternaryday3point6 &&       <div className='product-iternary-left-day0-point'>
                <div className='product-iternary-left-day0-point-icon' > <TbPointFilled className='product-iternary-left-day0-point-icon' >
                </TbPointFilled> </div><div  className='product-iternary-left-day0-point-text'>{productData.iternaryday3point6} </div></div> }
                {productData.iternaryday3point7 &&       <div className='product-iternary-left-day0-point'>
                <div className='product-iternary-left-day0-point-icon' >  <TbPointFilled className='product-iternary-left-day0-point-icon' >
                </TbPointFilled></div> <div  className='product-iternary-left-day0-point-text'>{productData.iternaryday3point7}</div></div> }
                {productData.iternaryday3point8 &&       <div className='product-iternary-left-day0-point'>
                <div className='product-iternary-left-day0-point-icon' >  <TbPointFilled className='product-iternary-left-day0-point-icon' >
                </TbPointFilled></div> <div  className='product-iternary-left-day0-point-text'>{productData.iternaryday3point8}</div></div> }
                </div>
              


                : null }
                </div>
} 

{productData.iternaryday4title && <div className='product-iternary-left-day'>
<div className='product-iternary-left-day0' onClick={handleShow4}><div >{productData.iternaryday4title}</div>
              <div  className='product-iternary-left-day0-but'>
                {show4 ? <IoMdArrowDropup className='product-iternary-left-day0-icon' />:
                <IoMdArrowDropdown className='product-iternary-left-day0-icon' />}
                </div>
</div>
                { show4 ?  <div className='product-iternary-left-day0-body'>
                {productData.iternaryday4pointH1 && <div className='product-iternary-left-day0-title'>
                   {productData.iternaryday4pointH1}
                    </div>
}
{productData.iternaryday4point1 &&        <div className='product-iternary-left-day0-point'>
              <div className='product-iternary-left-day0-point-icon' > <TbPointFilled  >
                </TbPointFilled> </div><div className='product-iternary-left-day0-point-text'>{productData.iternaryday4point1}</div></div> }
    {productData.iternaryday4point2 &&          <div className='product-iternary-left-day0-point'>
                <div className='product-iternary-left-day0-point-icon' >  <TbPointFilled  >
                </TbPointFilled> </div><div className='product-iternary-left-day0-point-text' >{productData.iternaryday4point2}</div></div> }
  {productData.iternaryday4point3 && <div className='product-iternary-left-day0-point'>
  {productData.iternaryday4pointH2 && <div className='product-iternary-left-day0-title'>
                   {productData.iternaryday4pointH2}
                    </div>
}
                  <div className='product-iternary-left-day0-point-icon' > <TbPointFilled className='product-iternary-left-day0-point-icon' >
                </TbPointFilled> </div><div className='product-iternary-left-day0-point-text' >{productData.iternaryday4point3}</div></div> }
                {productData.iternaryday4point4 && <div className='product-iternary-left-day0-point'>
                <div className='product-iternary-left-day0-point-icon' >  <TbPointFilled className='product-iternary-left-day0-point-icon' >
                </TbPointFilled> </div><div  className='product-iternary-left-day0-point-text'>{productData.iternaryday4point4}</div></div> }
                {productData.iternaryday4point5 &&        <div className='product-iternary-left-day0-point'>
                <div className='product-iternary-left-day0-point-icon' >  <TbPointFilled className='product-iternary-left-day0-point-icon' >
                </TbPointFilled> </div><div  className='product-iternary-left-day0-point-text'>{productData.iternaryday4point5} </div></div> }
                {productData.iternaryday4point6 &&       <div className='product-iternary-left-day0-point'>
                <div className='product-iternary-left-day0-point-icon' > <TbPointFilled className='product-iternary-left-day0-point-icon' >
                </TbPointFilled> </div><div  className='product-iternary-left-day0-point-text'>{productData.iternaryday4point6} </div></div> }
                {productData.iternaryday4pointH3 && <div className='product-iternary-left-day0-title'>
                   {productData.iternaryday4pointH3}
                    </div>
}
                {productData.iternaryday4point7 &&       <div className='product-iternary-left-day0-point'>
                <div className='product-iternary-left-day0-point-icon' >  <TbPointFilled className='product-iternary-left-day0-point-icon' >
                </TbPointFilled></div> <div  className='product-iternary-left-day0-point-text'>{productData.iternaryday4point7}</div></div> }
                {productData.iternaryday4point8 &&       <div className='product-iternary-left-day0-point'>
                <div className='product-iternary-left-day0-point-icon' >  <TbPointFilled className='product-iternary-left-day0-point-icon' >
                </TbPointFilled></div> <div  className='product-iternary-left-day0-point-text'>{productData.iternaryday4point8}</div></div> }
                </div>
              


                : null }
                </div>
}
          </div>

          <div className='product-iternary-right'></div>
      </div>
      <div className='product-list'>
      <div className="bloc-tabs1" >
      <button
        className={toggleState === 1 ? "tabs1 active-tabs1" : "tabs1"}
        onClick={() => toggleTab(1) }
      >
         Inclusions/
         <br />Exclusions
    
      </button>
      <button
        className={toggleState === 2 ? "tabs1 active-tabs1" : "tabs1"}
        onClick={() => toggleTab(2)}
      >
         Things to Carry
      </button>
      <button
        className={toggleState === 3 ? "tabs1 active-tabs1" : "tabs1"}
        onClick={() => toggleTab(3)}
      >
         Policy and terms
      </button>
      <button
        className={toggleState === 4 ? "tabs1 active-tabs1" : "tabs1"}
        onClick={() => toggleTab(4)}
      >
          Frequent Questions
      </button>
    </div>


    <div className="content-tabs1" >
      <div
       className={toggleState === 1 ? "content1  active-content1" : "content1"}
      >
          <div className='product-detail-ie1'>
         
          <div  className='product-detail-inclusions' >
          <div className='product-detail-inclusions1' >Inclusions</div>
          {productData.inclusionspoint1 &&   <div className='product-detail-point'>
             <div className='product-detail-point-icon'>  <TbPointFilled  >
                </TbPointFilled></div> <div className='product-detail-point-text'>{productData.inclusionspoint1}
                  </div></div> }
                  {productData.inclusionspoint2 &&    <div className='product-detail-point'>
                  <div className='product-detail-point-icon'>  <TbPointFilled >
                </TbPointFilled> </div><div className='product-detail-point-text'>{productData.inclusionspoint2}
                  </div></div> }
                  {productData.inclusionspoint3 &&   <div className='product-detail-point'>
                  <div className='product-detail-point-icon'>  <TbPointFilled  >
                </TbPointFilled> </div><div className='product-detail-point-text'>{productData.inclusionspoint3}
                  </div></div> }
                  {productData.inclusionspoint4 &&   <div className='product-detail-point'>
                  <div className='product-detail-point-icon'>   <TbPointFilled  >
                </TbPointFilled> </div><div className='product-detail-point-text'>{productData.inclusionspoint4}
                  </div></div> }
                  {productData.inclusionspoint5 &&   <div className='product-detail-point'>
                  <div className='product-detail-point-icon'>   <TbPointFilled  >
                </TbPointFilled></div> <div className='product-detail-point-text'>{productData.inclusionspoint5}
                  </div></div> }
                  {productData.inclusionspoint6 &&  <div className='product-detail-point'>
                  <div className='product-detail-point-icon'>   <TbPointFilled  >
                </TbPointFilled> </div><div className='product-detail-point-text'>{productData.inclusionspoint6}
                  </div></div> }
                  {productData.inclusionspoint7 &&   <div className='product-detail-point'>
                  <div className='product-detail-point-icon'>  <TbPointFilled  >
                </TbPointFilled> </div><div className='product-detail-point-text'>{productData.inclusionspoint7}
                  </div></div> }
                  {productData.inclusionspoint8 &&   <div className='product-detail-point'>
                  <div className='product-detail-point-icon'>  <TbPointFilled  >
                </TbPointFilled> </div><div className='product-detail-point-text'>{productData.inclusionspoint8}
                  </div></div> }
                  {productData.inclusionspoint9 &&   <div className='product-detail-point'>
                  <div className='product-detail-point-icon'>  <TbPointFilled  >
                </TbPointFilled> </div><div className='product-detail-point-text'>{productData.inclusionspoint9}
                  </div></div> }
          </div>
             <div className='product-detail-exclusions'><div className='product-detail-exclusions1'>Exclusions</div>
             {productData.exclusionspoint1 &&    <div className='product-detail-point'>
             <div className='product-detail-point-icon'> <TbPointFilled  >
                </TbPointFilled> </div><div className='product-detail-point-text'>{productData.exclusionspoint1}
                  </div></div> }
                  {productData.exclusionspoint2 &&    <div className='product-detail-point'>
                  <div className='product-detail-point-icon'> <TbPointFilled  >
                </TbPointFilled> </div><div className='product-detail-point-text'>{productData.exclusionspoint2}
                  </div></div> }
                  {productData.exclusionspoint3 &&  <div className='product-detail-point'>
                  <div className='product-detail-point-icon'> <TbPointFilled  >
                </TbPointFilled></div> <div className='product-detail-point-text'>{productData.exclusionspoint3}
                  </div></div> }
                  {productData.exclusionspoint4 &&  <div className='product-detail-point'>
                  <div className='product-detail-point-icon'> <TbPointFilled  >
                </TbPointFilled></div> <div className='product-detail-point-text'>{productData.exclusionspoint4}
                  </div></div> }
                  {productData.exclusionspoint5 &&  <div className='product-detail-point'>
                  <div className='product-detail-point-icon'> <TbPointFilled  >
                </TbPointFilled></div> <div className='product-detail-point-text'>{productData.exclusionspoint5}
                  </div></div> }
                  {productData.exclusionspoint6 &&  <div className='product-detail-point'>
                  <div className='product-detail-point-icon'> <TbPointFilled  >
                </TbPointFilled></div> <div className='product-detail-point-text'>{productData.exclusionspoint6}
                  </div></div> }
               </div>
              </div>
              </div>
              <div
       className={toggleState === 2 ? "content1  active-content1" : "content1"}
      >
              <div className='product-detail-ie1' >
              <div className='product-detail-things'><div className='product-detail-things1'>Things to Carry</div>
              {productData.thingspoint1 &&<div className='product-detail-point'>
               <TbPointFilled className='product-detail-point-icon' >
                </TbPointFilled> <div className='product-detail-point-text1'>{productData.thingspoint1}
                  </div></div> }
                  {productData.thingspoint2 &&  <div className='product-detail-point'>
               <TbPointFilled className='product-detail-point-icon' >
                </TbPointFilled> <div className='product-detail-point-text1'>{productData.thingspoint2}
                  </div></div> }
                  {productData.thingspoint3 &&   <div className='product-detail-point'>
               <TbPointFilled className='product-detail-point-icon' >
                </TbPointFilled> <div className='product-detail-point-text1'>{productData.thingspoint3} 
                  </div></div> }
                  {productData.thingspoint4 && <div className='product-detail-point'>
               <TbPointFilled className='product-detail-point-icon' >
                </TbPointFilled> <div className='product-detail-point-text1'>{productData.thingspoint4}
                  </div></div> }
                  {productData.thingspoint5 && <div className='product-detail-point'>
               <TbPointFilled className='product-detail-point-icon' >
                </TbPointFilled> <div className='product-detail-point-text1'>{productData.thingspoint5}
                  </div></div> }
                  {productData.thingspoint6 &&  <div className='product-detail-point'>
               <TbPointFilled className='product-detail-point-icon' >
                </TbPointFilled> <div className='product-detail-point-text1'>{productData.thingspoint6}
                  </div></div> }
                  {productData.thingspoint7 &&  <div className='product-detail-point'>
               <TbPointFilled className='product-detail-point-icon' >
                </TbPointFilled> <div className='product-detail-point-text1'>{productData.thingspoint7}
                  </div></div> }
                  {productData.thingspoint8 && <div className='product-detail-point'>
               <TbPointFilled className='product-detail-point-icon' >
                </TbPointFilled> <div className='product-detail-point-text1'>{productData.thingspoint8}
                  </div></div> }
                  {productData.thingspoint9 && <div className='product-detail-point'>
               <TbPointFilled className='product-detail-point-icon' >
                </TbPointFilled> <div className='product-detail-point-text1'>{productData.thingspoint9}
                  </div></div> }
                  {productData.thingspoint10 &&  <div className='product-detail-point'>
               <TbPointFilled className='product-detail-point-icon' >
                </TbPointFilled> <div className='product-detail-point-text1'>{productData.thingspoint10}
                  </div></div> }
                  {productData.thingspoint11 &&  <div className='product-detail-point'>
               <TbPointFilled className='product-detail-point-icon' >
                </TbPointFilled> <div className='product-detail-point-text1'>{productData.thingspoint11}
                  </div></div>  }
                  {productData.thingspoint12 &&    <div className='product-detail-point'>
               <TbPointFilled className='product-detail-point-icon' >
                </TbPointFilled> <div className='product-detail-point-text1'>{productData.thingspoint12}
                  </div></div>  }
                  {productData.thingspoint13 &&  <div className='product-detail-point'>
               <TbPointFilled className='product-detail-point-icon' >
                </TbPointFilled> <div className='product-detail-point-text1'>{productData.thingspoint13}
                  </div></div> }
                  {productData.thingspoint14 &&   <div className='product-detail-point'>
               <TbPointFilled className='product-detail-point-icon' >
                </TbPointFilled> <div className='product-detail-point-text1'>{productData.thingspoint14}
                  </div></div> }  
                  {productData.thingspoint15 && <div className='product-detail-point'>
               <TbPointFilled className='product-detail-point-icon' >
                </TbPointFilled> <div className='product-detail-point-text1'>{productData.thingspoint15}
                  </div></div>  }
                  {productData.thingspoint16 &&  <div className='product-detail-point'>
               <TbPointFilled className='product-detail-point-icon' >
                </TbPointFilled> <div className='product-detail-point-text1'>{productData.thingspoint16}
                  </div></div> }
                  {productData.thingspoint17 &&  <div className='product-detail-point'>
               <TbPointFilled className='product-detail-point-icon' >
                </TbPointFilled> <div className='product-detail-point-text1'>{productData.thingspoint17}
                  </div></div> }
                  {productData.thingspoint18 &&  <div className='product-detail-point'>
               <TbPointFilled className='product-detail-point-icon' >
                </TbPointFilled> <div className='product-detail-point-text1'>{productData.thingspoint18}
                  </div></div> }
                  {productData.thingspoint19 &&  <div className='product-detail-point'>
               <TbPointFilled className='product-detail-point-icon' >
                </TbPointFilled> <div className='product-detail-point-text1'>{productData.thingspoint19}
                  </div></div> }
                  {productData.thingspoint20 &&  <div className='product-detail-point'>
               <TbPointFilled className='product-detail-point-icon' >
                </TbPointFilled> <div className='product-detail-point-text1'>{productData.thingspoint20}
                  </div></div> }
        </div>
          </div>
          </div>
          <div
       className={toggleState === 3 ? "content1  active-content1" : "content1"}
      >
         <div  className='product-detail-policy' >
          <div className='product-detail-policy1' >Policy and Terms</div>
          {productData.policypoint1 &&  <div className='product-detail-policy-point'>
               <TbPointFilled className='product-detail-policy-point-icon' >
                </TbPointFilled> <div className='product-detail-policy-point-text'>{productData.policypoint1}
                  </div></div> }
                  {productData.policypoint2 &&      <div className='product-detail-policy-point'>
               <TbPointFilled className='product-detail-policy-point-icon' >
                </TbPointFilled> <div className='product-detail-policy-point-text'>{productData.policypoint2}
                  </div></div> }
                  {productData.policypoint3 &&        <div className='product-detail-policy-point'>
               <TbPointFilled className='product-detail-policy-point-icon' >
                </TbPointFilled> <div className='product-detail-policy-point-text'>{productData.policypoint3}
                  </div></div> }
                  {productData.policypoint4 &&        <div className='product-detail-policy-point'>
               <TbPointFilled className='product-detail-policy-point-icon' >
                </TbPointFilled> <div className='product-detail-policy-point-text'>{productData.policypoint4}
                  </div></div> }
                  {productData.policypoint5 &&        <div className='product-detail-policy-point'>
               <TbPointFilled className='product-detail-policy-point-icon' >
                </TbPointFilled> <div className='product-detail-policy-point-text'>{productData.policypoint5}
                  </div></div> }
                  </div>
                 
          </div>
          <div
       className={toggleState === 4 ? "content1  active-content1" : "content1"}
      >  <div className='product-detail-question' >
          <div className='product-detail-question-title'>Frequently Asked Questions</div>
         <div className='product-detail-question-faq' >
        {productData.frequentlyquestion1 && <Productfaq title={productData.frequentlyquestion1} content={productData.frequentlyanswer1} /> }
        {productData.frequentlyquestion2 &&   <Productfaq title={productData.frequentlyquestion2} content={productData.frequentlyanswer2} /> }
    {productData.frequentlyquestion3 && <Productfaq title={productData.frequentlyquestion3} content={productData.frequentlyanswer3}/> }
    {productData.frequentlyquestion4 &&  <Productfaq title={productData.frequentlyquestion4} content={productData.frequentlyanswer4}/> }
    {productData.frequentlyquestion5 &&  <Productfaq title={productData.frequentlyquestion5} content={productData.frequentlyanswer5}/> }
    </div>
          </div>
          </div>
          </div>
      </div>
      <div className='round-tab-contain'>
      <div className='round-tab-head-title'>
        Detailed Itinerary
      </div>
      <div className="round-tabs-container">
    <div className="round-tabs">
    {productData.detailday0title &&  <div
        className={`round-tab ${activeTab === 1 ? 'active' : ''}`}
        onClick={() => handleTabClick(1)}
      >
        {productData.detailday0title}
      </div>
}
{productData.detailday1title &&  <div
        className={`round-tab ${activeTab === 2 ? 'active' : ''}`}
        onClick={() => handleTabClick(2)}
      >
        {productData.detailday1title}
      </div>
}
{productData.detailday2title && <div
        className={`round-tab ${activeTab === 3 ? 'active' : ''}`}
        onClick={() => handleTabClick(3)}
      >
        {productData.detailday2title}
      </div>
}
{productData.detailday3title && <div
        className={`round-tab ${activeTab === 3 ? 'active' : ''}`}
        onClick={() => handleTabClick(4)}
      >
        {productData.detailday3title}
      </div>
}
{productData.detailday4title && <div
        className={`round-tab ${activeTab === 3 ? 'active' : ''}`}
        onClick={() => handleTabClick(5)}
      >
        {productData.detailday4title}
      </div>
}
    </div>
    <div className="round-tab-content">
    {productData.detailday0title && activeTab === 1 && <div className='round-tab-content-head'>
    {productData.detailday0point1 &&  <div className='round-tab-point'> <div className='round-tab-point-icon' >  <TbPointFilled  ></TbPointFilled> </div>  <div className='round-tab-point-text'>{productData.detailday0point1} </div>
        </div > }
        {productData.detailday0point2 &&  <div className='round-tab-point'> <div className='round-tab-point-icon' >  <TbPointFilled  ></TbPointFilled> </div>  <div className='round-tab-point-text'>{productData.detailday0point2}</div>
        </div > }
         {productData.detailday0point3 && <div className='round-tab-point'> <div className='round-tab-point-icon' >  <TbPointFilled  ></TbPointFilled> </div>  <div className='round-tab-point-text'>{productData.detailday0point3}</div>
        </div > }
        {productData.detailday0point4 && <div className='round-tab-point'> <div className='round-tab-point-icon' >  <TbPointFilled  ></TbPointFilled> </div>  <div className='round-tab-point-text'>{productData.detailday0point4}</div>
        </div > }
        {productData.detailday0point5 && <div className='round-tab-point'> <div className='round-tab-point-icon' >  <TbPointFilled  ></TbPointFilled> </div>  <div className='round-tab-point-text'>{productData.detailday0point5}</div>
        </div > }
        {productData.detailday0point6 && <div className='round-tab-point'> <div className='round-tab-point-icon' >  <TbPointFilled  ></TbPointFilled> </div>  <div className='round-tab-point-text'>{productData.detailday0point6}</div>
        </div > }
        </div>
        }
    {productData.detailday1title && activeTab === 2 && <div className='round-tab-content-head'>
    {productData.detailday1point1 &&  <div className='round-tab-point'> <div className='round-tab-point-icon' >  <TbPointFilled  ></TbPointFilled> </div>  <div className='round-tab-point-text'>{productData.detailday1point1} </div>
        </div > }
        {productData.detailday1point2 &&  <div className='round-tab-point'> <div className='round-tab-point-icon' >  <TbPointFilled  ></TbPointFilled> </div>  <div className='round-tab-point-text'>{productData.detailday1point2}</div>
        </div > }
         {productData.detailday1point3 && <div className='round-tab-point'> <div className='round-tab-point-icon' >  <TbPointFilled  ></TbPointFilled> </div>  <div className='round-tab-point-text'>{productData.detailday1point3}</div>
        </div > }
        {productData.detailday1point4 && <div className='round-tab-point'> <div className='round-tab-point-icon' >  <TbPointFilled  ></TbPointFilled> </div>  <div className='round-tab-point-text'>{productData.detailday1point4}</div>
        </div > }
        {productData.detailday1point5 && <div className='round-tab-point'> <div className='round-tab-point-icon' >  <TbPointFilled  ></TbPointFilled> </div>  <div className='round-tab-point-text'>{productData.detailday1point5}</div>
        </div > }
        {productData.detailday1point6 && <div className='round-tab-point'> <div className='round-tab-point-icon' >  <TbPointFilled  ></TbPointFilled> </div>  <div className='round-tab-point-text'>{productData.detailday1point6}</div>
        </div > }
        </div>
        }
        {productData.detailday2title && activeTab === 3 && <div className='round-tab-content-head'>
    {productData.detailday2point1 &&  <div className='round-tab-point'> <div className='round-tab-point-icon' >  <TbPointFilled  ></TbPointFilled> </div>  <div className='round-tab-point-text'>{productData.detailday2point1} </div>
        </div > }
        {productData.detailday2point2 &&  <div className='round-tab-point'> <div className='round-tab-point-icon' >  <TbPointFilled  ></TbPointFilled> </div>  <div className='round-tab-point-text'>{productData.detailday2point2}</div>
        </div > }
         {productData.detailday2point3 && <div className='round-tab-point'> <div className='round-tab-point-icon' >  <TbPointFilled  ></TbPointFilled> </div>  <div className='round-tab-point-text'>{productData.detailday2point3}</div>
        </div > }
        {productData.detailday2point4 && <div className='round-tab-point'> <div className='round-tab-point-icon' >  <TbPointFilled  ></TbPointFilled> </div>  <div className='round-tab-point-text'>{productData.detailday2point4}</div>
        </div > }
        {productData.detailday2point5 && <div className='round-tab-point'> <div className='round-tab-point-icon' >  <TbPointFilled  ></TbPointFilled> </div>  <div className='round-tab-point-text'>{productData.detailday2point5}</div>
        </div > }
        {productData.detailday2point6 && <div className='round-tab-point'> <div className='round-tab-point-icon' >  <TbPointFilled  ></TbPointFilled> </div>  <div className='round-tab-point-text'>{productData.detailday2point6}</div>
        </div > }
        </div>
        }
       {productData.detailday3title && activeTab === 4 && <div className='round-tab-content-head'>
    {productData.detailday3point1 &&  <div className='round-tab-point'> <div className='round-tab-point-icon' >  <TbPointFilled  ></TbPointFilled> </div>  <div className='round-tab-point-text'>{productData.detailday3point1} </div>
        </div > }
        {productData.detailday3point2 &&  <div className='round-tab-point'> <div className='round-tab-point-icon' >  <TbPointFilled  ></TbPointFilled> </div>  <div className='round-tab-point-text'>{productData.detailday3point2}</div>
        </div > }
         {productData.detailday3point3 && <div className='round-tab-point'> <div className='round-tab-point-icon' >  <TbPointFilled  ></TbPointFilled> </div>  <div className='round-tab-point-text'>{productData.detailday3point3}</div>
        </div > }
        {productData.detailday3point4 && <div className='round-tab-point'> <div className='round-tab-point-icon' >  <TbPointFilled  ></TbPointFilled> </div>  <div className='round-tab-point-text'>{productData.detailday3point4}</div>
        </div > }
        {productData.detailday3point5 && <div className='round-tab-point'> <div className='round-tab-point-icon' >  <TbPointFilled  ></TbPointFilled> </div>  <div className='round-tab-point-text'>{productData.detailday3point5}</div>
        </div > }
        {productData.detailday3point6 && <div className='round-tab-point'> <div className='round-tab-point-icon' >  <TbPointFilled  ></TbPointFilled> </div>  <div className='round-tab-point-text'>{productData.detailday3point6}</div>
        </div > }
        </div>
        }
   {productData.detailday4title && activeTab === 5 && <div className='round-tab-content-head'>
    {productData.detailday4point1 &&  <div className='round-tab-point'> <div className='round-tab-point-icon' >  <TbPointFilled  ></TbPointFilled> </div>  <div className='round-tab-point-text'>{productData.detailday4point1} </div>
        </div > }
        {productData.detailday4point2 &&  <div className='round-tab-point'> <div className='round-tab-point-icon' >  <TbPointFilled  ></TbPointFilled> </div>  <div className='round-tab-point-text'>{productData.detailday4point2}</div>
        </div > }
         {productData.detailday4point3 && <div className='round-tab-point'> <div className='round-tab-point-icon' >  <TbPointFilled  ></TbPointFilled> </div>  <div className='round-tab-point-text'>{productData.detailday4point3}</div>
        </div > }
        {productData.detailday4point4 && <div className='round-tab-point'> <div className='round-tab-point-icon' >  <TbPointFilled  ></TbPointFilled> </div>  <div className='round-tab-point-text'>{productData.detailday4point4}</div>
        </div > }
        {productData.detailday4point5 && <div className='round-tab-point'> <div className='round-tab-point-icon' >  <TbPointFilled  ></TbPointFilled> </div>  <div className='round-tab-point-text'>{productData.detailday4point5}</div>
        </div > }
        {productData.detailday4point6 && <div className='round-tab-point'> <div className='round-tab-point-icon' >  <TbPointFilled  ></TbPointFilled> </div>  <div className='round-tab-point-text'>{productData.detailday4point6}</div>
        </div > }
        </div>
        }

    </div>
  </div>
  </div>
      <div className='product-gal'>
        <div className='product-gal-head-title'>Travel Plan</div>
        {productData.plantitlehead &&    <div className='product-gal-head-title1'>{productData.plantitlehead}</div> }
   
       
      {/* <Slider {...settings} useRef={sliderRef}> */}
      <Gallery  slides={Gdata} />
      </div>
    
      <div className='similar-body'>
      <div className='similar-body-intro-line'></div>
          <div className='similar-intro'>
            <div className='similar-intro-title' >
              {productData.similarinspotitle}
            </div>
            <div className='similar-intro-line'></div>
            <div className='similar-intro-para'>{productData.similarinspopara}
</div>
          </div>
          <div className='similar-card-body'>
            <div className='similar-card-left' >
              <img src={`http://localhost:4000/uploads/${productData.similarimg1}`}className='similar-card-left-img'></img>
              <div className='similar-card-left-line'></div>
              <div className='similar-card-left-title' >{productData.similartitle1}</div>
              <div className='similar-card-left-para' >{productData.similarpara1}</div>
              <div ><button className='similar-card-left-but'>{productData.similarlink1}Explore</button></div>
            </div>
            <div className='similar-card-center' >
              <img src={`http://localhost:4000/uploads/${productData.similarimg2}`} className='similar-card-center-img'></img>
              <div className='similar-card-center-line'></div>
              <div className='similar-card-center-title' >{productData.similartitle2}</div>
              <div className='similar-card-center-para' >{productData.similarpara2}</div>
              <div ><button className='similar-card-center-but'>{productData.similarlink2}Explore</button></div>
            </div>
            <div className='similar-card-right' >
              <img src={`http://localhost:4000/uploads/${productData.similarimg3}`}className='similar-card-right-img'></img>
              <div className='similar-card-right-line'></div>
              <div className='similar-card-right-title' >{productData.similartitle3}</div>
              <div className='similar-card-right-para' >{productData.similarpara3}
              </div>
              <div ><button className='similar-card-right-but'>{productData.similarlink}Explore</button></div>
            </div>
 
          </div>
      </div>
      <div className='reviews-body'>
        <Review  slides={data} />
          <div className='reviews-right'>
          <div className='reviews-right-line'></div>
              <div className='reviews-right-title' > Epic Stories</div>
              <div className='reviews-right-para' >Read our journal of eclectic stories, journeys and discoveries. If you have any of your own, let us know!</div>
          </div>
      </div>
      <div id="book-container-kudremukh"></div>
      <div id="book-container"></div>
  
      <Footer />
      </div>
 
    
        </>
  )
}

export default Trekpage

