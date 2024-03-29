import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { baseURL } from '../../utils/constant'
import ProfileList from '../organisms/ProfileList'

const ProfilesPage = () => {
  const [profiles, setProfiles] = useState([])

  useEffect(() => {
      axios.get(`${baseURL}/profiles`)
      .then((res) => {
          setProfiles(res.data)
      })
  }, [])
  return (
    <div>
      <ProfileList profiles={profiles}></ProfileList>
    </div>
  )
}

export default ProfilesPage
