import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import {useSelector, useDispatch} from "react-redux"
import { logout } from '../../redux/userSlice'


const Navbar = () => {
  const [navOpen, setNavOpen] = useState(true)
  const dispatch = useDispatch()

  const user = useSelector((state) => {
    return state.user.user
    });

  const onLogout = () => {
    dispatch(logout())
  }

  const onToggleHamburgerMenu = () => {
    setNavOpen(!navOpen)
  }

  useEffect(() => {
    const handleResize = () => {  
        setNavOpen(window.innerWidth > 850) 
    };

    window.addEventListener("resize", handleResize);
    return () => {
        window.removeEventListener("resize", handleResize);
    };
// eslint-disable-next-line react-hooks/exhaustive-deps
}, []);

  return (
    <nav className='navbar'>
      <div className='titleLogo'>
        <img alt='logo' className='nav-img' src={'/favicon.ico'}></img>
      <Link className='navLink' to={'/'}><h1>Task Bandits</h1></Link>
      </div>

      <div className="hamburger-icon" onClick={onToggleHamburgerMenu}>
          <div className='hamburger bar-1' />
          <div className='hamburger bar-2' />
          <div className='hamburger bar-3' />
      </div>
      {navOpen && 
      <ul className='navLinkItems'>
      
      {!user.isAuthenticated && <li className='homeButton'><Link className='navLink' to={'/login'} onClick={() => setNavOpen(window.innerWidth > 850)}><p>Log In</p></Link></li>}
      {!user.isAuthenticated && <li className='homeButton'><Link className='navLink' to={'/signup'} onClick={() => setNavOpen(window.innerWidth > 850)}><p>Sign Up</p></Link></li>}
      {user.isAuthenticated && (user.user.isEmployerProfileType || user.user.isSuperUser) && <li className='homeButton'><Link className='navLink' to={'/all-workers'} onClick={() => setNavOpen(window.innerWidth > 850)}><p>View All Workers</p></Link></li> }
      {user.isAuthenticated && (user.user.isWorkerProfileType || user.user.isSuperUser) && <li className='homeButton'><Link className='navLink' to={'/all-tasks'} onClick={() => setNavOpen(window.innerWidth > 850)}><p>View All Tasks</p></Link></li> }
      {user.isAuthenticated && (user.user.isEmployerProfileType || user.user.isSuperUser) && <li className='homeButton'><Link className='navLink' to={'/create-new-task'} onClick={() => setNavOpen(window.innerWidth > 850)}><p>Create New Task</p></Link></li> }
      {user.isAuthenticated && (user.user.isEmployerProfileType || user.user.isSuperUser) && <li className='homeButton'><Link className='navLink' to={'/all-employer-tasks'} onClick={() => setNavOpen(window.innerWidth > 850)}><p>My Created Tasks</p></Link></li> }
      {user.isAuthenticated && user.user.isSuperUser && <li className='homeButton'><Link className='navLink' to={'/profiles'} onClick={() => setNavOpen(window.innerWidth > 850)}><p>View all Profiles</p></Link></li> }
      {user.isAuthenticated && <li className='homeButton'><Link className='navLink' to={'/profile'} onClick={() => setNavOpen(window.innerWidth > 850)}><p>My Profile</p></Link></li> }
      {user.isAuthenticated && <li className='homeButton' ><Link  className='navLink' to={'/login'} onClick={() => {onLogout(); setNavOpen(window.innerWidth > 850)}}><p>Logout</p></Link></li> }
      </ul>
      }

    </nav>
  )
}

export default Navbar
