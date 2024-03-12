import React, { useEffect, useState } from 'react'
import Alert from '../atoms/Alert'
import { Link, useLocation } from 'react-router-dom'

const LoginPage = () => {
  const {state} = useLocation()
  const [showCreateSuccessMessage, setShowCreateSuccessMessage] = useState(false)

  useEffect(() => {
      
    if(state?.showCreateSuccess){
      setShowCreateSuccessMessage(true)
    setTimeout(() => {
      setShowCreateSuccessMessage(false)
    }, 2000)
  }

  }, [state])
  return (
    <div>
        <h2>Log In</h2>
        {showCreateSuccessMessage && <Alert wording={`Success! Profile successfully Created. Use your new credentials to log in.`} type={'success'}></Alert>}
        <p className='smalltext'>Don't have an account? <Link className='smalltext' to={'/signup'}><p >Sign Up</p></Link></p>


      
    </div>
  )
}

export default LoginPage
