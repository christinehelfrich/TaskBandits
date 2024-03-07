import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"
import { baseURL } from '../../utils/constant'

const ProfileDetailsPage = () => {
    const { id } = useParams()
    const [profile, setProfile] = useState({})

    useEffect(() => {
        axios.get(`${baseURL}/profile/${id}`)
        .then((res) => {
            console.log(res)
            setProfile(res.data)
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
  return (
    <div>
        <p>{profile.name}</p>
        <p>{profile.bio}</p>
        <p>{profile.skills}</p>
        <p>{profile.experience}</p>
    </div>
  )
}

export default ProfileDetailsPage
