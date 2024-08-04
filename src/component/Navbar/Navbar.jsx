import React from 'react'
import './Navbar.css'
// import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import {createBrowserRouter,RouterProvider } from 'react-router-dom'

const Navbar = () => {
 
  return (
    <>
    <nav className='container'>
      <img src={logo} alt="" className='logo'/>
      <ul>
        <a href ="/Home"><li>Home</li></a>
        <a href ="/Post"><li>Post</li></a>
        <a href ="/About"><li>About</li></a>
        <a href ="/ContactUs"><li>Contact Us</li></a>
        <a href ="/Donate"><li><button className='btn'>Donate</button></li></a>
        <a href ="/Volunteer"><li><button className='btn'>Volunteer</button></li></a>
        
        
      </ul>
    </nav>
    
    
    </>
  )
} 

export default Navbar
