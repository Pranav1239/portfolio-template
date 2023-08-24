import React from 'react'
import '../styles/Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header>
    <nav>
        <ul className="Navbar">
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/Contact">Contact me</Link>
            </li>
        </ul>
    </nav>
</header>
  )
}

export default Navbar