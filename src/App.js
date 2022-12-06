import React from 'react';
import "./App.css";
import Home from './Components/Home';
import Nav from "./Components/Nav";
import Login from './Components/Login';
import Support from './Components/Support';
import Profile from './Components/Profile';
import Footer from './Components/Footer';

import TurnBack from './Components/TurnBack';

import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import {useState} from 'react'




function App() {
  const [show, setShow] = useState(true);

  
  
  return (
    <Router>
    <div className="App">
    {   show &&
        
          <nav>
            <Nav />
          </nav>
   } 

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/support" element={<Support />}/>
        <Route path="/profile" element={<Profile />}/>

        {/* <Route path='*' element={<TurnBack />} /> */}
        <Route path="*"element={<TurnBack funcNav={setShow}/>} />


      </Routes>
    { show &&
    <footer>
      <Footer/>
      </footer>
    }
    </div>
    </Router>
  );
};



export default App;