import React,{useState} from 'react'
import "./career.css"
import {GiPolarStar} from "react-icons/gi"
import cp from "../../Image/careers.jpg"
import Navbar2 from '../../Components/Nav/Navbar/Navbar2'
import Footer from '../../Components/Nav/Footer/Footer'
import axios from "axios"
const Career = () => {
  const [careerData, setCareerData] = useState({
    caname: '',
    caemail: '',
    canumber: '',
    camessage: '',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCareerData({ ...careerData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:4000/form/career/', careerData);
      alert('Career form submitted successfully!');
      setCareerData({ caname: '', caemail: '', canumber: '', camessage: '' });
    } catch (error) {
      console.error('Error submitting contact form:', error);
      alert('Error submitting contact form.');
    }
  };

  return (
    
        <div className='Careers'>
        <Navbar2 />
     <div className='careers-head'>
        
        <div className='careers-head-title'>Careers</div>
        
        
        </div> 
        <div className='careers-body'>
      <div className='careers-body-para'>Who We Are?</div>
    <div className='careers-body-para1'>Backpackers United is a passionate community of travelers who believe in the transformative power of travel. We're dedicated to empowering backpackers across the globe with resources, tips, and a supportive network of fellow adventurers.
</div>
<div className='careers-body-para2'>Why Join Us?


</div>
<div className='careers-body-para3'>Working with Backpackers United means becoming part of a vibrant, innovative team that's committed to redefining the backpacking experience. Our team members enjoy:

</div>
<div className='careers-body-para3'>1. The opportunity to shape the future of backpacking and travel.

</div>
<div className='careers-body-para3'>2. A collaborative and supportive work environment.


</div>
<div className='careers-body-para3'>3. The chance to meet and learn from fellow travel enthusiasts.

</div>
<div className='careers-body-para3'>4. Flexible work arrangements to support your own travel aspirations.

</div>
<div className='careers-body-para3'>3. The chance to meet and learn from fellow travel enthusiasts.

</div>
<div className='careers-body-para4'>Open Roles?

</div>
<div className='careers-body-para5'>We are currently looking for talented individuals to join our team in the following roles:

</div>
<div className='careers-body-para5'>Content Creators: Do you have a knack for storytelling and a passion for travel? We're looking for writers and photographers to help bring backpacking experiences to life.
</div>
<div className='careers-body-para5'>Community Managers: Help us foster and grow our community of backpackers. Experience in social media and community engagement is a plus.
</div>
<div className='careers-body-para5'>Partnership Managers:We're looking for individuals to cultivate and manage relationships with our travel and gear partners.
</div>
<div className='careers-body-para6'>How to Apply?


</div>
<div className='careers-body-para7'>Interested in one of our open positions? Send us your resume and a brief cover letter explaining why you'd be a great fit for Backpackers United. Email your application to info@backpackersunited.in.
</div>
<div className='careers-body-para7'>Please note that while we appreciate all applications, only those selected for an interview will be contacted.
</div>
<div className='careers-body-para7'>We're excited to hear from you!
</div>
</div>
<div className='career-form-row'>
<div className='career-form'>
  <form onSubmit={handleSubmit} >
        <div className='career-title'>Reach Out to Us</div>
            <div className='career-form-name'>
                <div className='career-form-title' ><label for="caname">Full Name</label> <GiPolarStar className='career-form-name-icon'></GiPolarStar></div>
                <input type="text" name="caname" placeholder='Enter Name' value={careerData.caname} onChange={handleChange} ></input>
            </div>
            <div className='career-form-email'>
                <div className='career-form-title'  ><label for="caemail">Email ID</label> <GiPolarStar className='career-form-email-icon'></GiPolarStar></div>
                <input type="email" name="caemail" placeholder='Enter Email' value={careerData.caemail} onChange={handleChange}  ></input>
            </div>
            <div className='career-form-number'>
                <div className='career-form-title'  ><label for="canumber">Mobile Number</label>  <GiPolarStar className='career-form-number-icon'></GiPolarStar></div>
                <input type="tel" name="canumber" placeholder='Enter Phone Number'  value={careerData.canumber} onChange={handleChange} ></input>
            </div>
            <div className='career-form-area'>
                <div className='career-form-title'  ><label for="camessage">Why should we Hire you? </label> </div>
                <textarea name="camessage"  className='career-form-text-area' value={careerData.camessage} onChange={handleChange}/>
             </div>
          
             <div className='career-form-button'><button type="submit" className='career-form-but'>Submit</button></div> 
             </form> </div>
             <div >
             <img src={cp} className='career-image' ></img>
             </div>
       
</div>



        
<Footer />
    </div>

  )
}

export default Career