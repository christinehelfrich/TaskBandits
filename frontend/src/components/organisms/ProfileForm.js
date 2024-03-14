import React, { useState } from 'react';
import axios from "axios";
import { baseURL } from '../../utils/constant';
import Alert from '../atoms/Alert';
import Spinner from '../atoms/Spinner';
import { useNavigate } from "react-router-dom";
import ProfileDataForm from '../molecules/ProfileDataForm';
import {useSelector} from "react-redux"
import { useDispatch } from 'react-redux'
import { updateUser, logout } from '../../redux/userSlice';

const ProfileForm = ({isCreateMode, profileData}) => {

  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const [isLoading, setisLoading] = useState(false)
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const loggedInUser = useSelector((state) => {
    return state.user.user
    });

  const defaultValues = {
              isWorkerProfileType: isCreateMode ? true : profileData?.isWorkerProfileType,
              isEmployerProfileType: isCreateMode ? false : profileData?.isEmployerProfileType,
              name: isCreateMode ? '' : profileData.name,
              email: isCreateMode ? '' : profileData.email,
              bio: isCreateMode ? '' : profileData.bio,
              photo: isCreateMode ? '' : profileData.photo,
              skills: isCreateMode ? '' : profileData.skills,
              hourlyWage: isCreateMode ? '' : profileData.hourlyWage,
              area: isCreateMode ? '' : profileData.area,
              isUnder21: isCreateMode ? false : profileData.isUnder21,
              experience: isCreateMode ? '' : profileData.experience
          }

    const onDelete = () => {
      setisLoading(true)
      axios.delete(`${baseURL}/profile/${profileData._id}`)
      .then((res) => {
        setisLoading(false)
        resetFormAndPushSuccessMessage()
        if(loggedInUser.user._id === profileData._id) {
          // updating logged in user, must logout and redirect
          dispatch(logout())
          navigate("/login", {state: {showDeleteSuccess: true}})
        }else{
          navigate("/", {state: {showDeleteSuccess: true}})
        }

        
      })


    }
   
    const onSubmit = (event) => {
        setisLoading(true)
        if(isCreateMode) {
          axios.post(`${baseURL}/profile`, {profile: event}).then((res) => {
            setisLoading(false)
            resetFormAndPushSuccessMessage()
          })
        } else {
          axios.put(`${baseURL}/profile/${profileData._id}`, {profile: event}).then((res) => {
            setisLoading(false)
            if(loggedInUser.user._id === profileData._id) {
              // updating logged in user, must update redux
              dispatch(updateUser({user: event, isAuthenticated: true}))
            }
            resetFormAndPushSuccessMessage()
          })
        }
    }

    const resetFormAndPushSuccessMessage = () => {
      //reset();
      setShowSuccessMessage(true)
      setTimeout(() => {
        setShowSuccessMessage(false)
      }, 2000)
    }
  return (
    <div>
      {showSuccessMessage && <Alert wording={`Success! Profile successfully ${isCreateMode ? 'Created' : 'Updated'}`} type={'success'}></Alert>}
      {isLoading && <Spinner></Spinner>}
      <ProfileDataForm defaultFormValues={defaultValues} onSubmit={onSubmit} isCreateMode={isCreateMode} onDelete={onDelete}></ProfileDataForm>
      </div>
  )
}

export default ProfileForm
