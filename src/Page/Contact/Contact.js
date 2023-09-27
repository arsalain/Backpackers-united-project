import React,{useState} from 'react'
import "./contact.css"
import {GiPolarStar} from "react-icons/gi"
import Footer from '../../Components/Nav/Footer/Footer'
import cp from "../../Image/contact.jpg"
import Navbar2 from '../../Components/Nav/Navbar/Navbar2'
import axios from "axios"
const Contact = () => {
  const [contactData, setContactData] = useState({
    cname: '',
    cemail: '',
    cnumber: '',
    cmessage: '',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactData({ ...contactData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:4000/form/contact/', contactData);
      alert('Contact form submitted successfully!');
      setContactData({ cname: '', cemail: '', cnumber: '', cmessage: '' });
    } catch (error) {
      console.error('Error submitting contact form:', error);
      alert('Error submitting contact form.');
    }
  };

  return (
    <div className='contact'>
      <Navbar2 />
      <div className='contact-header' >
      <div className='contact-header-title' >Contact Us</div>
      </div>
      <div className='contact-body'>

        <div className='contact-body-left' >
        <div className='contact-body-head' >Head Office:</div>
        <div className='contact-body-head1' ></div>
        <div className='contact-body-add'>#817 Ground Floor, 10 A main, Indiranagar 1st Stage,
        <br />Bengaluru- 560038</div>
        <div className='contact-body-email'>Email :</div > <div className='contact-body-email1'>&nbsp; info@backpackersunited.in </div>
        <div  className='contact-body-phone'>Phone Number (s) :</div> <div className='contact-body-phone1' >&nbsp;+91 83 1018 0586 | +91 63 6117 0690</div>
        <div className='contact-body-timing'>Office Timings : </div > <div className='contact-body-timing1'> &nbsp;Monday to Saturday (11 AM to 11pm) </div>
        <div className='contact-body-feed'>For feedback or any escalation, kindly send us an email at -</div>
        <div className='contact-body-email2' >info@backpackersunited.in</div>
        </div>
        <div className='contact-body-right'>
        
          <img src={cp} height={300} width={450} className='contact-body-img'/>
        </div>
        </div>
        <div className='contact-form'>
          <form onSubmit={handleSubmit}>
        <div className='contact-title'>Reach Out to Us</div>
            <div className='contact-form-name'>
                <div className='contact-form-title' ><label for="cname">Full Name</label> <GiPolarStar className='contact-form-name-icon'></GiPolarStar></div>
                <input type="text" name="cname"  value={contactData.cname} onChange={handleChange} placeholder='Enter Name' required></input>
            </div>
            <div className='contact-form-email'>
                <div className='contact-form-title'  ><label for="cemail">Email ID</label> <GiPolarStar className='contact-form-email-icon'></GiPolarStar></div>
                <input type="email" name="cemail"  value={contactData.cemail} onChange={handleChange} placeholder='Enter Email'  required></input>
            </div>
            <div className='contact-form-number'>
                <div className='contact-form-title'  ><label for="ctel">Mobile Number</label> <GiPolarStar className='contact-form-number-icon'></GiPolarStar></div>
                <input type="tel" name="cnumber"  value={contactData.cnumber} onChange={handleChange} placeholder='Enter Phone Number'  required></input>
            </div>
            <div className='contact-form-area'>
                <div className='contact-form-title1'  ><label for="carea">Message </label></div>
                <textarea name= "cmessage" value={contactData.cmessage} onChange={handleChange}/>
             </div>
             <div className='contatc-form-button'><button className='contact-form-but' type="submit">Submit</button></div>
             </form> 
        </div>
      
      <Footer />
    </div>
  )
}

export default Contact