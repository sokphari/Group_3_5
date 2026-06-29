import React from 'react'
import { NavLink } from 'react-router-dom'
export const Navbar = () => {
  return (
    <>
    <nav>
        
        <NavLink style={({isActive})=>({
            color : isActive ? "red" : "white"
        })} to="/home"><p>Home</p></NavLink>
        <NavLink style={({isActive})=>({
            color : isActive ? "red" : "white"
        })} to="/about"><p>About Us</p></NavLink>
        <NavLink style={({isActive})=>({
            color : isActive ? "red" : "white"
        })} to="/service"><p>Service</p></NavLink>
        <NavLink style={({isActive})=>({
            color : isActive ? "red" : "white"
        })} to="/blog"><p>Blog</p></NavLink>
    </nav>
    </>
  )
}
