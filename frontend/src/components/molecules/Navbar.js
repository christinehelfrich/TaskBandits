import React from 'react'
import { Link } from 'react-router-dom'
import {useSelector, useDispatch} from "react-redux"
import { logout } from '../../redux/userSlice'


const Navbar = () => {
  const dispatch = useDispatch()
  const user = useSelector((state) => {
    return state.user.user
    });

  const onLogout = () => {
    dispatch(logout())
  }

  return (
    <nav className='navbar'>
      <div className='titleLogo'>
      <Link className='navLink' to={'/'}><h1>Task Bandits</h1></Link>
      </div>
      <ul>
      
      {!user.isAuthenticated && <li className='homeButton'><Link className='navLink' to={'/login'}><p>Log In</p></Link></li>}
      {!user.isAuthenticated && <li className='homeButton'><Link className='navLink' to={'/signup'}><p>Sign Up</p></Link></li>}
      {user.isAuthenticated && <li className='homeButton'><Link className='navLink' to={'/all-workers'}><p>View All Workers</p></Link></li> }
      {user.isAuthenticated && <li className='homeButton'><Link className='navLink' to={'/all-tasks'}><p>View All Tasks</p></Link></li> }
      {user.isAuthenticated && <li className='homeButton'><Link className='navLink' to={'/create-new-task'}><p>Create New Task</p></Link></li> }
      {user.isAuthenticated && user.user.isSuperUser && <li className='homeButton'><Link className='navLink' to={'/profiles'}><p>View all Profiles</p></Link></li> }
      {user.isAuthenticated && <li className='homeButton'><Link className='navLink' to={'/profile'}><p>My Profile</p></Link></li> }
      {user.isAuthenticated && <li className='homeButton' ><Link onClick={onLogout} className='navLink' to={'/login'}><p>Logout</p></Link></li> }
      </ul>
    </nav>
  )
}

export default Navbar
