import React, { useState } from 'react';
import { BrowserRouter, Route,  Routes } from 'react-router-dom';
import '../src/App.css'
import Header from './components/header';
import Home from './components/home';
import Snakebite from './components/cases/snakebite'
import Refill from './components/refill';
import { Provider } from 'react-redux'; 
import store from './redux/store';
import Profile from './components/profile';
// import Slider from './components/slide';

function App() {
  const [skinHistory, setSkinHistory] = useState([]);
  const addSkinToHistory = (skin) => {
    setSkinHistory((prevHistory) => [...prevHistory, skin]);
  };
  return (
   
    <Provider store={store} >
    <BrowserRouter>
    <div style={{background:'#2c1244',  height:'100vh'}}>
    <Header/>
     <Routes>
      <Route path='/refill' element={<Refill/>}/>
      <Route path='/profile' element={<Profile skinHistory={skinHistory}/>}/>
      <Route path="/home"  element={<Home/>}/>
      <Route path="*"  element={<Home/>}/>
      <Route path="/case/snakebite" element={<Snakebite onSkinDrop={addSkinToHistory}/>} />
     </Routes>
     {/* <Slider images={images}/> */}
    </div>
    </BrowserRouter>
    </Provider>
     
  );
}

export default App;
