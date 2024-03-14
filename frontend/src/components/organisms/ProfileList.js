import React from 'react';
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
