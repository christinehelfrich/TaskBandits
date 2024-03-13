import React from 'react'
import {useSelector} from "react-redux"
import ProfileForm from '../organisms/ProfileForm';

const ProfilePage = () => {
    const user = useSelector((state) => {
      return state.user.user
      });
      console.log(user)
  return (
    <div>
      profile!
      <ProfileForm 
        isCreateMode={false}
        profileData={user.user}
        ></ProfileForm>
    </div>
  )
}

export default ProfilePage
