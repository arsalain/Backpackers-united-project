import React from 'react'
import "./helpfaq.css"
import Qfaq from '../../Components/Qfaq/Qfaq';
import Navbar2 from '../../Components/Nav/Navbar/Navbar2'
import Footer from '../../Components/Nav/Footer/Footer'



const HelpFaq = () => {
  return (
    <>
      <Navbar2 />
      <div className='faq-head'>
        <div className='faq-head-title'>FAQs</div>
      </div>
      <div className="accordion">
        <Qfaq
          title="Question 1"
          content="Answer for Question 1 goes here."
        />
        <Qfaq
          title="Question 2"
          content="Answer for Question 2 goes here."
        />
        <Qfaq
          title="Question 3"
          content="Answer for Question 3 goes here."
        />
      </div>
      <Footer />
    </>
  );
}

export default HelpFaq;