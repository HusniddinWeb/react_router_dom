import React from 'react'
import "./Navbar.css"
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
        <div className="container">
            <div className="navbar-block">
              <NavLink className={"nav-link"} to={"/"}>home</NavLink>
              <NavLink className={"nav-link"} to={"login"}>Login</NavLink>
              <NavLink className={"nav-link"} to={"about"}>About</NavLink>
            </div>
        </div>
    </nav>
  )
}

export default Navbar