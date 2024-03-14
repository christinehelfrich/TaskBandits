import React, {useEffect, useState } from 'react';
import axios from "axios";
import { baseURL } from '../../utils/constant';
import ProfileCard from '../molecules/ProfileCard';

const ProfileList = ({profiles}) => {


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
