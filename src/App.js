import './App.css';
import {   Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Mumbai from './components/City/Mumbai';
import Navbar from './components/Navbar'
import Newyork from './components/City/Newyork';
import Paris from './components/City/Paris';
function App() {
  return (
    <div className="App">
    
      <h3>Property List  </h3>
    <Navbar/>
      
      <Routes>
        <Route path='/'  element={<Home/>} ></Route>
        <Route path='/mumbai' element={<Mumbai/>}></Route>
        <Route path='/newyork' element={<Newyork/>}></Route>
        <Route path='/paris' element={<Paris/>}></Route>
      </Routes>
      </div>
    
  );
}

export default App;
