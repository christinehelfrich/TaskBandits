import React, {useEffect, useState } from 'react';
import axios from "axios";
import { baseURL } from '../../utils/constant';
import ProfileCard from '../molecules/ProfileCard';

const ProfileList = () => {

    const [profiles, setProfiles] = useState([])

    useEffect(() => {
        axios.get(`${baseURL}/profiles`)
        .then((res) => {
            console.log(res.data)
            setProfiles(res.data)
        })
    }, [])

  return (
    <div>
      {profiles.map(profile => (
        <ProfileCard 
        key={profile._id}
        profile={profile}
        ></ProfileCard>
      ))}
    </div>
  )
}

export default ProfileList
