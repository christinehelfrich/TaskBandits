import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Alert from '../atoms/Alert'

const HomePage = () => {
  const {state} = useLocation()
  const [showDeleteSuccessMessage, setShowDeleteSuccessMessage] = useState(false)
  const [showCreateSuccessMessage, setShowCreateSuccessMessage] = useState(false)

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

  }, [state])
  return (
    <div>
            {showDeleteSuccessMessage && <Alert wording={`Success! Profile successfully Deleted`} type={'success'}></Alert>}
            {showCreateSuccessMessage && <Alert wording={`Success! Profile successfully Created`} type={'success'}></Alert>}
      HOME
    </div>
  )
}

export default HomePage
