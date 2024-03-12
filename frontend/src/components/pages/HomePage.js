import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Alert from '../atoms/Alert'

const HomePage = () => {
  const {state} = useLocation()
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)

  useEffect(() => {
    console.log({state})
    if(state?.showDeleteSuccess){
        setShowSuccessMessage(true)
      setTimeout(() => {
        setShowSuccessMessage(false)
      }, 2000)
    }

  }, [state])
  return (
    <div>
            {showSuccessMessage && <Alert wording={`Success! Profile successfully Deleted`} type={'success'}></Alert>}
      HOME
    </div>
  )
}

export default HomePage
