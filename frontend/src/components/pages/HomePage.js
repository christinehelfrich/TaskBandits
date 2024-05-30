import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Alert from '../atoms/Alert'
import { Link } from 'react-router-dom'
import {useSelector, useDispatch} from "react-redux"
import { logout } from '../../redux/userSlice'

const HomePage = () => {
  const {state} = useLocation()
  const [showDeleteSuccessMessage, setShowDeleteSuccessMessage] = useState(false)
  const [showCreateSuccessMessage, setShowCreateSuccessMessage] = useState(false)
  const [showLoginSuccessMessage, setShowLoginSuccessMessage] = useState(false)
  const dispatch = useDispatch()
  const user = useSelector((state) => {
    return state.user.user
    });

  const onLogout = () => {
    dispatch(logout())
  }

  useEffect(() => {
      
    if(state?.showDeleteSuccess){
        setShowDeleteSuccessMessage(true)
      setTimeout(() => {
        setShowDeleteSuccessMessage(false)
      }, 2000)
    }
    if(state?.showCreateSuccess){
      setShowCreateSuccessMessage(true)
    setTimeout(() => {
      setShowCreateSuccessMessage(false)
    }, 2000)
    }

    if(state?.showLoginSuccess){
    setShowLoginSuccessMessage(true)
  setTimeout(() => {
    setShowLoginSuccessMessage(false)
  }, 2000)
    }

  }, [state])
  return (
    <div>
            {showDeleteSuccessMessage && <Alert wording={`Success! Profile successfully Deleted`} type={'success'}></Alert>}
            {showCreateSuccessMessage && <Alert wording={`Success! Task successfully created`} type={'success'}></Alert>}
            {showLoginSuccessMessage && <Alert wording={`Success! Successfully logged in`} type={'success'}></Alert>}
      

      <ul className='homeLinks'>
      
      {!user.isAuthenticated && <li className='homeLinkLi'><Link className='homeLink' to={'/login'}><p>Log In</p></Link></li>}
      {!user.isAuthenticated && <li className='homeLinkLi'><Link className='homeLink' to={'/signup'}><p>Sign Up</p></Link></li>}
      {user.isAuthenticated && <li className='homeLinkLi' ><Link className='homeLink' to={'/profile'}><p>Welcome, {user.user.name}</p></Link></li> }
      {user.isAuthenticated && <li className='homeLinkLi' ><Link onClick={onLogout} className='homeLink' to={'/login'}><p>Logout</p></Link></li> }
      </ul>
    </div>
  )
}

export default HomePage
