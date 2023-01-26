import React from 'react';
import {NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import DisplayLostPet from './components/DisplayLostPet';
import Home from './components/Home';
import About from './components/About';
import Form from './components/Form';


function App() {
  const navLinkStyles = ({isActive}) =>{
    return{
      fontWeight: isActive ? "bold": "normal",
      textDecoration: isActive ? "none": "underline"
    }
  }
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
      <a class="navbar-brand" href="#">Pet Finder</a>
        
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <NavLink style={navLinkStyles} className="nav-link " aria-current="page" to='/'>Home</NavLink>
            </li>
            <li class="nav-item">
              <NavLink style={navLinkStyles} className="nav-link " to="/about">About</NavLink>
            </li>
            <li class="nav-item">
              <NavLink style={navLinkStyles} className="nav-link " to='/form'>Form</NavLink>
            </li>
            <li class="nav-item">
              <NavLink style={navLinkStyles} className="nav-link" to='/pet'>FindPet</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>



      <Routes>
        <Route  path='/' element={<Home />}/>
        <Route path= "/pet" element={<DisplayLostPet />}/>
        <Route path= "/form" element={<Form />}/>
        <Route path= "/about" element={<About />}/>
      </Routes>
    </>
  );
}

export default App;
