import logo from './logo.svg';
import './App.css';
import Home from './Page/Home/Home';
import Trek from './Page/Trek/Trek'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <Routes >
  
  <Route path='/' element={<Home /> }/>
   <Route path='/trek' element={<Trek /> }/>
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
