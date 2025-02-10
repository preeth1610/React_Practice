import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    
    <ul className="nav justify-content-center">
  <li className="nav-item">
    <Link className="nav-link" to="/">Home</Link>
  </li>
    <li className="nav-item">

    <Link className="nav-link" to="/signin">Signin</Link>
    </li>
    <li className="nav-item">

    <Link className="nav-link" to="/signup">Signupp</Link>
    </li>
    <li className="nav-item">
    <Link className="nav-link" to="/technologies/:id">Technology</Link>
    </li>
</ul>
    
  )
}

export default Navbar