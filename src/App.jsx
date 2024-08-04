import React from 'react'
import Navbar from './component/Navbar/Navbar'
import {createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './component/Home/Home'
import About from './component/About/About'
import Donate from './component/Donate/Donate'
import Volunteer from './component/Volunteer/Volunteer'
import ContactUs from './component/ContactUs/ContactUs'
import Post from './component/Post/Post'

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "/Home",
      element: <Home/>
    },
    
    {
      path: "/About",
      element: <About/>
    },
    {
      path: "/Donate",
      element: <Donate/>
    },
    {
      path: "/Volunteer",
      element: <Volunteer/>
    },
    {
      path: "/ContactUs",
      element: <ContactUs/>
    },
    {
      path: "/Post",
      element: <Post/>
    },
  ])
  return (
 
    <div>
    <Navbar/>
    <RouterProvider router={router}/>
    {/* <Home/>
    <About/>
    <ContactUs/> */}
     <footer className="footer">
      
      <div className="footerContainar">
        <ul className="socialIcon">
        <li>
        <i class="bx bxl-facebook"></i>
        <i class="bx bxl-twitter"></i>
        <i class="bx bxl-linkedin"></i>
        <i class="bx bx-envelope"></i>
        </li>
        </ul>
        <div className="coppy">
        <p>Copyright &copy;2024; Resarved by Share Your Plate</p>
        </div>
      </div>
    </footer>
      
    </div>
 
  )
}


export default App;
