import React from 'react'
import "./about.css"
import Footer from '../../Components/Nav/Footer/Footer'
import bh from "../../Image/about.jpg"
import insta from "../../Images/instagram.png"
import link from "../../Images/linkedin.png"
import whatsapp from "../../Images/whatsapp1.png"
import Navbar2 from '../../Components/Nav/Navbar/Navbar2'
import tejas from "../../Image/tejas.webp"
import aswin from "../../Image/aswin.webp"
import shadab from "../../Image/shadab.webp"
import mudasir from "../../Image/mudasir.webp"
import saad from "../../Image/saad.webp"
import shreekanth from "../../Image/shreekanth.webp"
import tahir from "../../Image/tahir.webp"
import ateeq from "../../Image/ateeq.webp"
import aaqib from "../../Image/aaqib.webp"
import habeeb from "../../Image/habeeb.webp"
import abhi from "../../Image/abhi.webp"
const About = () => {
  return (
    <div>
      <Navbar2 />
      <div className='about'>
        <div className='about-head-img'>
         <div className='about-head-title'>ABOUT US  </div> 
        </div>
        <div className='about-head-para'>
            <div className='about-head-title1'>What we do?</div>
            <div className='about-head-des'>Welcome to Backpackers United – your one-stop destination for incredible, 
                life-changing travel experiences! Established in 2017, our community has quickly 
                grown into a thriving hub for passionate travelers seeking unique adventures off the
                 beaten path. Our team, composed of young, energetic, and dedicated travel enthusiasts, 
                 is on a mission to introduce you to the most unexplored gems of nature while promoting 
                 sustainable and responsible travel.</div>
                 <div className='about-head-des' >At Backpackers United, we specialize in curating 
                 unforgettable journeys that cater to a wide variety of interests and preferences. 
                 Our extensive range of offerings includes treks across the breathtaking landscapes 
                 of North and South India, exhilarating cycling tours, tailor-made holiday packages, 
                 immersive sightseeing experiences, backpacking trips, and so much more.</div>
                 <div className='about-head-des' >For our corporate clients, we organize team outings 
                 and treks that foster camaraderie and teamwork. Additionally, we create personalized 
                 adventure-based learning programs for schools and colleges, focusing on personal 
                 development and experiential learning.</div>
        </div>
        <div className='about-body'>
            <div className='about-body-title' >
                Meet Our Team. The Ideal Set of Extradinary People  </div>
                <div className='about-cards'>
                <div className='about-card'>
                    <img src={habeeb} className='about-card-img'></img>
                    <div className='about-card-name'>Habeeb</div>
                    <div className='about-card-desig'>CEO</div>
                    <div className='about-card-logo'>
                    <img src={link} className='about-card-logo1' ></img>
                            <img src={insta} className='about-card-logo1'></img>
                            <img src={whatsapp} className='about-card-logo1'></img>

                    </div>
                    <hr ></hr>
                    <div className='about-card-para'>Habeeb ul Haq, our visionary Founder and CEO, 
                    is not only the driving force behind Backpackers United but also an accomplished 
                    mountaineer. With a deep-seated passion for travel and a relentless dedication 
                    to making adventure accessible, Habeeb has scaled some of the world's most 
                    challenging peaks. His unwavering commitment to sustainable and responsible 
                    travel sets the tone for our entire team.</div>
                </div>
                <div className='about-card'>
                    <img src={tejas} className='about-card-img'></img>
                    <div className='about-card-name'> Ashwin</div>
                    <div className='about-card-desig'>Human Resources</div>
                    <div className='about-card-logo'>
                    <img src={link} className='about-card-logo1' ></img>
                            <img src={insta} className='about-card-logo1'></img>
                            <img src={whatsapp} className='about-card-logo1'></img>

                    </div>
                    <hr ></hr>
                    <div className='about-card-para'>Ashwin, our HR Manager, is the heart of our team.
                    His expertise in managing talent and ensuring our team operates like a well-oiled 
                    machine is instrumental in delivering exceptional experiences to our travelers.</div>
                </div>
                <div className='about-card'>
                    <img src={abhi} className='about-card-img'></img>
                    <div className='about-card-name'>Abhinandan</div>
                    <div className='about-card-desig'>Business Development</div>
                    <div className='about-card-logo'>
                    <img src={link} className='about-card-logo1' ></img>
                            <img src={insta} className='about-card-logo1'></img>
                            <img src={whatsapp} className='about-card-logo1'></img>

                    </div>
                    <hr ></hr>
                    <div className='about-card-para'>Abhinandan, our Business 
                    Development Manager, is the strategic mastermind behind our 
                    growth. He is continually seeking partnerships and opportunities 
                    that align with our mission to bring you the most enriching 
                    travel adventures.</div>
                </div>

                </div>
                <div className='about-cards1'>
                <div className='about-card1'>
                    <img src={bh} className='about-card-img'></img>
                    <div className='about-card-name'>Jafar</div>
                    <div className='about-card-desig'>International Operations </div>
                    <hr ></hr>
                    <div className='about-card-para'>
Jaffer Pasha, our Thailand Branch Head, leads our operations and endeavors in the beautiful land of 
Thailand. With extensive knowledge of the region and a passion for providing exceptional travel 
experiences, Jaffer ensures that your adventures in Thailand are unforgettable.
                </div>
                </div>
                <div className='about-card1'>
                    <img src={aswin} className='about-card-img'></img>
                    <div className='about-card-name'>Tejas</div>
                    <div className='about-card-desig'>Operations</div>
                    <hr ></hr>
                    <div className='about-card-para'>Tejas, our dynamic Operations Manager, 
                    are the backbone of Backpackers United. Their meticulous planning and operational 
                    expertise ensure that every adventure we craft runs seamlessly and leaves you with 
                    memories to cherish.</div>
                </div>
                <div className='about-card1'>
                    <img src={tahir} className='about-card-img'></img>
                    <div className='about-card-name'>Thahir</div>
                    <div className='about-card-desig'>Quality and Risk Management</div>
                   
                    <hr ></hr>
                    <div className='about-card-para'>Tahir, our Quality and Risk Management specialist, 
                    is dedicated to ensuring that your adventures with us are not only thrilling 
                    but also safe and of the highest quality. He meticulously manages and mitigates risks, 
                    ensuring your peace of mind.</div>
                </div>
           

                </div>
                <div className='about-cards1'>
                <div className='about-card1'>
                    <img src={saad} className='about-card-img'></img>
                    <div className='about-card-name'>Saad</div>
                    <div className='about-card-desig'>Accounts</div>
                   
                    <hr ></hr>
                    <div className='about-card-para'>Saad, our Accountant, keeps our financial affairs 
                    in meticulous order, ensuring that our operations run smoothly and efficiently.</div>
                </div>
           
                <div className='about-card1'>
                    <img src={bh} className='about-card-img'></img>
                    <div className='about-card-name'>Bharath </div>
                    <div className='about-card-desig'>Operations </div>
                    
                    <hr ></hr>
                    <div className='about-card-para'>Bharat, our Operations Lead, are the 
                    architects of seamless journeys. Their precision and dedication guarantee 
                    that every adventure we craft is executed flawlessly, leaving you with 
                    remarkable memories.</div>
                </div>
                <div className='about-card1'>
                    <img src={shadab} className='about-card-img'></img>
                    <div className='about-card-name'>Shadab</div>
                    <div className='about-card-desig'>Sales </div>
                    <hr ></hr>
                    <div className='about-card-para'>Shadab our Senior Sales Executives, 
                    are your dedicated travel advisors. With their wealth of knowledge and passion 
                    for exploration, they're here to guide you in crafting the perfect adventure.</div>
                </div>
            
             
                </div>
                <div className='about-cards1'>
                <div className='about-card1'>
                    <img src={bh} className='about-card-img'></img>
                    <div className='about-card-name'>Sahil</div>
                    <div className='about-card-desig'>Sales </div>
                    <hr ></hr>
                    <div className='about-card-para'>Sahil our Senior Sales Executives, 
                    are your dedicated travel advisors. With their wealth of knowledge and passion 
                    for exploration, they're here to guide you in crafting the perfect adventure.</div>
                </div>
                <div className='about-card1'>
                    <img src={shreekanth} className='about-card-img'></img>
                    <div className='about-card-name'>Shreekanth</div>
                    <div className='about-card-desig'>Operations </div>
                   
                    <hr ></hr>
                    <div className='about-card-para'>Meet Shreekanth, our 
                    Operations Lead, who orchestrates the logistics of 
                    your journeys. With a keen eye for detail and a 
                    commitment to smooth execution, Shrikanth ensures 
                    that every aspect of your trip is seamless and memorable.</div>
                </div>
                <div className='about-card1'>
                    <img src={ateeq} className='about-card-img'></img>
                    <div className='about-card-name'>Ateeq</div>
                    <div className='about-card-desig'>SEO and Digital Marketing</div>
                   
                    <hr ></hr>
                    <div className='about-card-para'>Ateeq, our SEO and Digital Marketing Head, 
                    is the wizard behind our online presence. His expertise in optimizing our 
                    digital footprint ensures that you discover our adventures and stories 
                    effortlessly in the digital realm.</div>
                </div>
            
                </div>
                <div className='about-cards1'>
                <div className='about-card1'>
                    <img src={mudasir} className='about-card-img'></img>
                    <div className='about-card-name'>Syed Mudasir Hussain</div>
                    <div className='about-card-desig'>Techie</div>
                    <hr ></hr>
                    <div className='about-card-para'>Syed Mudasir, our Senior Software Engineer, 
                    is the tech genius who ensures our digital platforms are cutting-edge and user-friendly, 
                    making your travel experience seamless.</div>
                </div>
                <div className='about-card1'>
                    <img src={aaqib} className='about-card-img'></img>
                    <div className='about-card-name'>Mohamed Aaqib</div>
                    <div className='about-card-desig'>Techie</div>
                    <hr ></hr>
                    <div className='about-card-para'>Mohamed Aaqib, our Senior Software Engineer, 
                    is the tech genius who ensures our digital platforms are cutting-edge and user-friendly, 
                    making your travel experience seamless.</div>
                </div>
         
       
        </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About