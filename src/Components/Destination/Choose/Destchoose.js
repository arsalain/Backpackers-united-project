import React from 'react'
import "./destchoose.css"
import {BsFillCarFrontFill} from "react-icons/bs"
const Destchoose = () => {
  return (
    <div className='dest-ch-body' >
    <div className='dest-ch'>
      <div className='dest-ch-title'> Why Choose Us
      </div>
      <div className='dest-ch-main'>
        <div className='dest-ch-card-main' >
        <div className='dest-ch-card'>
           <div className='dest-ch-card-icon' ><BsFillCarFrontFill className='dest-ch-card-icon1'/></div>
           <div className='dest-ch-card-name' >Well rounded Stay Free Transportation</div>
           <div className='dest-ch-card-name1'>Free Transportation</div>
           <div className='dest-ch-card-name1'>from pickup to</div>
           <div className='dest-ch-card-name1'>destination</div>
        </div>
        <div className='dest-ch-card'>
           hey 1
        </div>
        </div>
        <div  className='dest-ch-card-main'>
        <div className='dest-ch-card'>
           hey 2
        </div>
        <div className='dest-ch-card'>
           hey 3
        </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Destchoose