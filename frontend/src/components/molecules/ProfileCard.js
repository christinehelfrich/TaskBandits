import React from 'react'
import EditIcon from '../atoms/EditIcon'
import { Link } from 'react-router-dom'

const ProfileCard = ({profile}) => {

  return (
    <div className='detailsCard'>   
        <p>{profile.name}</p>
        <Link to={`/profile-details/${profile._id}`}><EditIcon></EditIcon></Link>
      
    </div>
  )
}

export default ProfileCard
