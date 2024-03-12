import React from 'react'
import { Link } from 'react-router-dom'
import ProfileForm from '../organisms/ProfileForm'

const CreateProfilePage = () => {
  return (
    <div>
      CREATE PROFILE
      <ProfileForm isCreateMode={true}></ProfileForm>
    </div>
  )
}

export default CreateProfilePage
