import React,{ lazy, Suspense } from 'react';
import './App.css';
// import Home from './Page/Home/Home';
import Trek from './Page/Trek/Trek'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Tour from './Page/Tour/Tour';
import Destination from './Page/Destination/Destination';
import Terms from './Page/TermsCondition/Terms';
import Copyright from './Page/Copyright/Copyright';
import Privacy from './Page/Privacy/Privacy';
import Blogs from './Page/blogs/Blogs';
// import About from './Page/About/About';
// import Contact from './Page/Contact/Contact';
import Career from './Page/Career/Career';
import HelpFaq from './Page/HelpFaq/HelpFaq';
import Partner from './Page/Partner/Partner';

const Home = lazy(() => import('./Page/Home/Home'));
const About = lazy(() => import('./Page/About/About'));
const Contact= lazy(() => import('./Page/Contact/Contact'));
const Trekpage= lazy(() => import('./Page/TrekPage/Trekpage'));
function App() {
  return (
    <div className="App">
  <Suspense fallback={<div>Loading...</div>}>
     <Routes >
   
  <Route path='/' element={<Home /> }/>
   <Route path='/trek' element={<Trek /> }/>

<Route path='/trek/:id' element={<Trekpage />} />
   <Route path='/tour' element={<Tour/> }/>


   <Route path='/destination' element={<Destination />} />
   <Route path='/terms&condition' element={<Terms />} />
   <Route path='/copyrightpolicy' element={<Copyright />} />
   <Route path='/privacypolicy' element={<Privacy />} />
   <Route path='/blogs/:id' element= {<Blogs />} />
 <Route path='/about' element={<About /> }/>
 <Route path='/contact' element={<Contact /> }/>
 <Route path='/career' element={<Career /> }/>
 <Route path='/helpfaq' element={<HelpFaq /> }/>
 <Route path='/partner' element={<Partner/> }/>
  
</Routes>
</Suspense >
    </div>
  );
}

export default App;
