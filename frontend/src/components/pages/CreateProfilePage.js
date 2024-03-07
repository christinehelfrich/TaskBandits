import React from 'react'
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
