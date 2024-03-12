import React from 'react'
import { Link } from 'react-router-dom'

const LoginPage = () => {
  return (
    <div>
        <h2>Log In</h2>
        <p className='smalltext'>Don't have an account? <Link className='smalltext' to={'/signup'}><p >Sign Up</p></Link></p>


      
    </div>
  )
}

export default LoginPage
