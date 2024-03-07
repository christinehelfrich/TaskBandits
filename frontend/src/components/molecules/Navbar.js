import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className='navbar'>
      <h1>Task Bandits</h1>
      <button className='homeButton'><Link to={'/create-new-profile'}><p>Create a Profile</p></Link></button>
      <button className='homeButton'><Link to={'/profiles'}><p>View all Profiles</p></Link></button>
    </div>
  )
}

export default Navbar
