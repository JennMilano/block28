import { useState } from 'react';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Blue from './components/Blue'; './components/Blue';
import Red from './components/Red'; './components/Red';
import Home from './components/Home';

function App() {
  return (
    <div id="container">
      <h1></h1>
      <div id="navbar">
        <Link to="/">Home</Link>
        <Link to="/blue">Blue</Link>
        <Link to="/red">Red</Link>
      </div>
      <div id="main-section">
  <Routes>
     <Route path="/blue" element={<Blue />}> </Route>  
     <Route path="/red" element={<Red />}> </Route>   
     <Route path="/" element={<Home />}> </Route> 
  </Routes>
</div>
  </div>
  )
}

export default App
