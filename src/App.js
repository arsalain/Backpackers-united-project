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
   <Route path='/tour/wayanad' element={<Wayanad/> }/>
   <Route path='/destination' element={<Destination />} />
   <Route path='/terms&condition' element={<Terms />} />
  {/*<Route path='/about' element={<About /> }/>
  <Route path='/contact' element={<Contact /> }/>
  <Route path='/dest' element={<Product /> }/>
  <Route path="/forgotpassword/:id/:token" element={<ForgotPassword/>} />

  <Route path='/user' element={<PrivateRoute /> } >
    <Route path='home' element={<UserHome /> } ></Route>
  </Route> */}
</Routes>
    </div>
  );
}

export default App;
