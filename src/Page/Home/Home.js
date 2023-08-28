import React from 'react'
import Video from "../../Components/Home/VideoSearch/Video.js"
import Topslider from "../../Components/Home/TopSlider/Topslider.js"
 import Intro from "../../Components/Home/Intro/Intro.js"
import Selling from "../../Components/Home/Selling/Selling.js"
import Points from "../../Components/Home/Points/Points.js"
import Book from "../../Components/Home/Book/Book.js"
import Testimonials from "../../Components/Home/Testimonials/Testimonials.js"
import Footer from "../../Components/Nav/Footer/Footer.js"

const Home = () => {
  const data = [
    {
        id:1,
        title1: "What People Say",
        title2: "About Us.",
        para: "I had an amazing work experience trekking with Backpacker's United! The guide was knowledgeable and ensured everyone's safety, which also creating a fun and inclusive atmosphere. The scenery wasbreathtaking and the trip was well-organized from start to finish. I can't wait to join another adventure with the team.",
        name1: "Ravi Banerjee",
        state1: "Kolkata,India",
        name2: "Habeeb Pasha",
        state2: "Bangalore,India"
    },
    {
        id:2,
        title1: "What People Think",
        title2: "About Us.",
        para: "I had an amazing work experience trekking with Backpacker's United! The guide was knowledgeable and ensured everyone's safety, which also creating a fun and inclusive atmosphere. The scenery wasbreathtaking and the trip was well-organized from start to finish. I can't wait to join another adventure with the team.",
        name1: "Habeeb Pasha",
        state1: "Bangalore,India",
        name2: "Micheal",
        state2: "Amersham,England"
    },
    {
        id:2,
        title1: "What People Feel",
        title2: "About Us.",
        para: "I had an amazing work experience trekking with Backpacker's United! The guide was knowledgeable and ensured everyone's safety, which also creating a fun and inclusive atmosphere. The scenery wasbreathtaking and the trip was well-organized from start to finish. I can't wait to join another adventure with the team.",
        name1: "Micheal",
        state1: "Amersham,England",
        name2: "Ravi Banerjee",
        state2: "Kolkata,India"
    }
  ]
  return (
    <div>
       <Video />
       <Topslider />
    <Intro />
      <Selling />
      <Points />
      <Book />
      <Testimonials slides={data}/>
      <Footer /> 
    </div>
  )
}

export default Home
