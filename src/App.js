import logo from './logo.svg';
import './App.css';
import Home from './Page/Home/Home';
import Trek from './Page/Trek/Trek'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Tour from './Page/Tour/Tour';
import Destination from './Page/Destination/Destination';
import Kudremukh from './Page/TrekPages/Kudremukh';
import Ethina from './Page/TrekPages/Ethina';
import Terms from './Page/TermsCondition/Terms';
import Skandagiri from './Page/TrekPages/Skandagiri';
import Gokarna from './Page/TrekPages/Gokarna';
import Dudhsagar from './Page/TrekPages/Dudhsagar';
import Kumara from './Page/TrekPages/Kumara';
import Bramagiri from './Page/TrekPages/Bramagiri';
import Kurinjal from './Page/TrekPages/Kurinjal';
import Narsimha from './Page/TrekPages/Narsimha';
import Nethravathi from './Page/TrekPages/Nethravathi';
import Paithalamala from './Page/TrekPages/Paithalamala';
import Huttari from './Page/TrekPages/Huttari';
import Kodachadri from './Page/TrekPages/kodachadri';
import Bilikal from './Page/TrekPages/Bilikal';
import Bandaje from './Page/TrekPages/Bandaje';
import Arisinagundi from './Page/TrekPages/Arisinagundi';
import Tadiandamol from './Page/TrekPages/Tadiandamol';
import Wayanad from './Page/TourPages/Wayanad';
import Hampi3 from './Page/TourPages/Hampi3';
import Munar from './Page/TourPages/Munar';
import Hampi from './Page/TourPages/Hampi';
import Pondicherry from './Page/TourPages/Pondicherry';
import Gokarnamuru from './Page/TourPages/Gokarnamuru';
import Gokarnadandeli from './Page/TourPages/Gokarnadandeli';
import Chikmagalur from './Page/TourPages/Chikmagalur';
import Coorg from './Page/TourPages/Coorg';
import Ooty from './Page/TourPages/Ooty';
import Kodaikanal from './Page/TourPages/Kodaikanal';
import Munarallepy3 from './Page/TourPages/Munarallepy3';
import Goa3 from './Page/TourPages/Goa3';
import Gokarnadandeli3 from './Page/TourPages/Gokarnadandeli3';
import Wayanad3 from './Page/TourPages/Wayanad3';
import Coorgmysore3 from './Page/TourPages/Coorgmysore3';
import Chikmagalur3 from './Page/TourPages/Chikmagalur3';
import Vietnam from './Page/InternationalTours/Vietnam';
import Phuketphi from './Page/InternationalTours/Phuketphi';
import Pattayaphuket from './Page/InternationalTours/Pattayaphuket';
import Phuketkrabi6 from './Page/InternationalTours/Phuketkrabi6';
import Phuketkrabi5 from './Page/InternationalTours/Phuketkrabi5';
import Bangkokpattaya from './Page/InternationalTours/Bangkokpattaya';
import Bestofbangkok from './Page/InternationalTours/Bestofbangkok';
import Bangkoktemple from './Page/InternationalTours/Bangkoktemple';
import Bestofphuketkrabi from './Page/InternationalTours/Bestofphuketkrabi';
import Pattayabangkok from './Page/InternationalTours/Pattyabangkok';
import Thailand from './Page/InternationalTours/Thailand';
import Copyright from './Page/Copyright/Copyright';
import Privacy from './Page/Privacy/Privacy';
import Blogs from './Page/blogs/Blogs';
import About from './Page/About/About';
import Contact from './Page/Contact/Contact';
import Career from './Page/Career/Career';
import HelpFaq from './Page/HelpFaq/HelpFaq';
import Partner from './Page/Partner/Partner';

function App() {
  return (
    <div className="App">
     <Routes >
  
  <Route path='/' element={<Home /> }/>
   <Route path='/trek' element={<Trek /> }/>
   <Route path='/trek/kudremukha' element={<Kudremukh /> }/>
   <Route path='/trek/ethina' element={<Ethina/> }/>
   <Route path='/trek/skandagiri' element={<Skandagiri/> }/>
   <Route path='/trek/gokarna' element={<Gokarna/> }/>
   <Route path='/trek/tadiandamol' element={<Tadiandamol/> }/>
   <Route path='/trek/dudhsagar' element={<Dudhsagar/> }/>
   <Route path='/trek/kumara' element={<Kumara/> }/>
   <Route path='/trek/bramagiri' element={<Bramagiri/> }/>
   <Route path='/trek/kurinjal' element={<Kurinjal/> }/>
   <Route path='/trek/narasimha' element={<Narsimha /> }/>
   <Route path='/trek/nethravathi' element={<Nethravathi/> }/>
   <Route path='/trek/paithalamala' element={<Paithalamala/> }/>
   <Route path='/trek/huttari' element={<Huttari/> }/>
   <Route path='/trek/kodachadri' element={<Kodachadri/> }/>
   <Route path='/trek/bilikal' element={<Bilikal/> }/>
   <Route path='/trek/bandaje' element={<Bandaje/> }/>
   <Route path='/trek/arisinagundi' element={<Arisinagundi/> }/>

   <Route path='/tour' element={<Tour/> }/>
   <Route path='/tour/munar' element={<Munar/> }/>
   <Route path='/tour/hampi' element={<Hampi/> }/>
   <Route path='/tour/pondicherry' element={<Pondicherry/> }/>
   <Route path='/tour/gokarnamuru' element={<Gokarnamuru/> }/>
   <Route path='/tour/gokarnadandeli' element={<Gokarnadandeli/> }/>
   <Route path='/tour/wayanad' element={<Wayanad/> }/>
   <Route path='/tour/chikmagalur' element={<Chikmagalur/> }/>
   <Route path='/tour/coorg' element={<Coorg/> }/>
   <Route path='/tour/ooty' element={<Ooty/> }/>
   <Route path='/tour/kodaikanal' element={<Kodaikanal/> }/>
   <Route path='/tour/hampi/3days-2nights' element={<Hampi3/> }/>
   <Route path='/tour/munar/3days-2nights' element={<Munarallepy3/> }/>
   <Route path='/tour/goa/3days-2nights' element={<Goa3/> }/>
   <Route path='/tour/gokarnadandeli/3days-2nights' element={<Gokarnadandeli3/> }/>
   <Route path='/tour/wayanad/3days-2nights' element={<Wayanad3/> }/>
   <Route path='/tour/coorgmysore/3days-2nights' element={<Coorgmysore3/> }/>
   <Route path='/tour/chikmagalur/3days-2nights' element={<Chikmagalur3/> }/>
   <Route path='/internationaltour/vietnam' element={<Vietnam/> }/>
   <Route path='/internationaltour/phuket-phi' element={<Phuketphi/> }/>
   <Route path='/internationaltour/pattaya-phuket' element={<Pattayaphuket/> }/>
   <Route path='/internationaltour/phuket-krabi/6days-5nights' element={<Phuketkrabi6/> }/>
   <Route path='/internationaltour/phuket-krabi/5days-4nights' element={<Phuketkrabi5/> }/>
   <Route path='/internationaltour/bangkok-pattaya' element={<Bangkokpattaya/> }/>
   <Route path='/internationaltour/best-of-bangkok' element={<Bestofbangkok/> }/>
   <Route path='/internationaltour/bangkok-temple-pattaya-coral-island' element={<Bangkoktemple/> }/>
   <Route path='/internationaltour/best-of-phuket-krabi' element={<Bestofphuketkrabi/> }/>
   <Route path='/internationaltour/pattaya-bangkok' element={<Pattayabangkok/> }/>
   <Route path='/internationaltour/thailand' element={<Thailand/> }/>

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
    </div>
  );
}

export default App;
