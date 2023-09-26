import React, { useState } from 'react'
import {FaMinus,FaPlus} from "react-icons/fa"
import "./qfaq.css"
const Qfaq = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
      setIsOpen(!isOpen);
    };
  return (
    <div className="qfaq">
      <div className="qfaq-header" onClick={toggleAccordion}>
      <div className="qfaq-accordion-title">{title}</div>
      <div >
      {isOpen ? <FaMinus />: 
                  <FaPlus />}
                  </div>
      </div>
      {isOpen && (
        <div className="qfaq-content">
          {content}
        </div>
      )}
    </div>
  )
}

export default Qfaq