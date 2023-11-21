import React from 'react'
import  './navbar.css';
import logo from '../Navbar/lg.png'


const navbar = () => {
  return (
   <>
     <nav className="navbar">
     <img src={logo} alt="Logo" className="logo" />
      <button className="courses-button">Courses</button>
    </nav>
   </>
  )
}

export default navbar