import React from 'react';
import "./App.css";
import Home from './client/src/Components/Home';
import Nav from "./client/src/Components/Nav";
import Login from './client/src/Components/Login';
import Support from './client/src/Components/Support';
import Profile from './client/src/Components/Profile';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/support" element={<Support />}/>
        <Route path="/profile" element={<Profile />}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;