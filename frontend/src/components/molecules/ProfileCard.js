import React from 'react'
import EditIcon from '../atoms/EditIcon'
import { Link } from 'react-router-dom'
import {useSelector} from "react-redux"

const ProfileCard = ({profile}) => {

  const user = useSelector((state) => {
    return state.user.user
    });

  return (
    <Link to={`/profile-details/${profile._id}`}>
    <div className='detailsCard'>   
        <p>{profile.name}</p>
        {profile._id === user.user._id &&
          <EditIcon></EditIcon>
        }
           
    </div>
    </Link>
  )
}

export default ProfileCard
