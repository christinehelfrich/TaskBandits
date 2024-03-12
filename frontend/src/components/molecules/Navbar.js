import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='titleLogo'>
      <Link className='navLink' to={'/'}><h1>Task Bandits</h1></Link>
      </div>
      <ul>
      <li className='homeButton'><Link className='navLink' to={'/login'}><p>Log In</p></Link></li>
      <li className='homeButton'><Link className='navLink' to={'/signup'}><p>Sign Up</p></Link></li>
      <li className='homeButton'><Link className='navLink' to={'/create-new-profile'}><p>Create a Profile</p></Link></li>
      <li className='homeButton'><Link className='navLink' to={'/profiles'}><p>View all Profiles</p></Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
