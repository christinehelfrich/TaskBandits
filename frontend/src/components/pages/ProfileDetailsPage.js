import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"
import { baseURL } from '../../utils/constant'
import ProfileForm from '../organisms/ProfileForm'

const ProfileDetailsPage = () => {
    const { id } = useParams()
    const [profile, setProfile] = useState({})
    const [profileIsLoading, setProfileIsLoading] = useState(true)

    useEffect(() => {
        axios.get(`${baseURL}/profile/${id}`)
        .then((res) => {
            setProfile(res.data)
            setProfileIsLoading(false)
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
  return (
    <div>
        {profileIsLoading ? <h2>loading...</h2> :
        <ProfileForm 
        isCreateMode={false}
        profileData={profile}
        ></ProfileForm>
        }
    </div>
  )
}

export default ProfileDetailsPage
