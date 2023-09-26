import React from 'react'
import "./helpfaq.css"
import Qfaq from '../../Components/Qfaq/Qfaq';
import Navbar2 from '../../Components/Nav/Navbar/Navbar2'
import Footer from '../../Components/Nav/Footer/Footer'



const HelpFaq = () => {
  return (
    <div className='faq'>
      <Navbar2 />
      <div className='faq-head'>
        <div className='faq-head-title'>FAQs</div>
      </div>
      <div className="accordion">
        <Qfaq
          title="How can I reserve my slot ?"
          content="You can directly reserve your slots by booking on the website, please ensure proper dates are selected before confirming your booking."
        />
        <Qfaq
          title=" Is it safe for Women travellers ?"
          content="Safety and Security Guidelines are followed at all times, and it is our topmost priority.
          We have certified trek leads (Male/Female) accompanying the participants at all times and our stay follows well-rounded safety measures."
        />
        <Qfaq
          title="What payment options do I have ?"
          content="We have multiple payment options on the website, you can also contact us and pay directly via UPI to avoid payment gateway charges."
        />
         <Qfaq
          title=" I am a Solo Traveller, can I join the Group ?"
          content="Yes, our trips are designed to ensure that every traveler gets to experience the Nature, Culture, Heritage, and beauty of the place. We are one of the best community travel groups in India."
        />
      </div>
      <Footer />
      </div>
  );
}

export default HelpFaq;