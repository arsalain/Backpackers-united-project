import React, { useState } from 'react'
import {FaMinus,FaPlus} from "react-icons/fa"
import "./productfaq.css"
const Productfaq = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
      setIsOpen(!isOpen);
    };
  return (
    <div className="productfaq">
      <div className="productfaq-header" onClick={toggleAccordion}>
      <div className="accordion-title">{title}</div>
      <div >
      {isOpen ? <FaMinus />: 
                  <FaPlus />}
                  </div>
      </div>
      {isOpen && (
        <div className="productfaq-content">
          {content}
        </div>
      )}
    </div>
  )
}

export default Productfaq
