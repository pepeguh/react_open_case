import React, { useState } from 'react';
import { BrowserRouter, Route,  Routes } from 'react-router-dom';
import '../src/App.css'
import Header from './components/header';
import Home from './components/home';
import Snakebite from './components/cases/snakebite'
import Fracture from './components/cases/fracture'

import Refill from './components/refill';
import { Provider } from 'react-redux'; 
import store from './redux/store';
import Profile from './components/profile';
// import Slider from './components/slide';

function App() {
  
  return (
   
    <Provider store={store} >
    <BrowserRouter>
    <div style={{background:'#171717',  height:'100vh'}}>
    <Header/>
     <Routes>
      <Route path='/refill' element={<Refill/>}/>
      <Route path='/profile' element={<Profile />}/>
      <Route path="/home"  element={<Home/>}/>
      <Route path="*"  element={<Home/>}/>
      <Route path="/case/snakebite" element={<Snakebite />} />
      <Route path='/case/fracture' element={<Fracture />}/>
     </Routes>
     {/* <Slider images={images}/> */}
    </div>
    </BrowserRouter>
    </Provider>
     
  );
}

export default App;
