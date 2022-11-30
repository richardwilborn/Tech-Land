import React from 'react';
import "./App.css";
import Home from './Components/Home';
import Nav from "./Components/Nav";
import Login from './Components/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;