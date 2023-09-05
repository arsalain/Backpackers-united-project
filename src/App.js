import logo from './logo.svg';
import './App.css';
import Home from './Page/Home/Home';
import Trek from './Page/Trek/Trek'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Kudremukh from './Page/TreKPages/Kudremukh';
import Tour from './Page/Tour/Tour';
import Destination from './Page/Destination/Destination';

function App() {
  return (
    <div className="App">
     <Routes >
  
  <Route path='/' element={<Home /> }/>
   <Route path='/trek' element={<Trek /> }/>
   <Route path='/trek/kudremukha' element={<Kudremukh /> }/>
   <Route path='/tour' element={<Tour/> }/>
   <Route path='/destination' element={<Destination />} />
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
