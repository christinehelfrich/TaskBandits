import React from 'react'
import { Link } from 'react-router-dom'
import EditIcon from '../atoms/EditIcon'
import {useSelector} from "react-redux"

const TaskCard = ({task}) => {
  const user = useSelector((state) => {
    return state.user.user
    });

  return (        
  <Link to={`/task-details/${task._id}`}>
    <div className='detailsCard'>
        <p>{task.title}</p>

          {task.employerId === user.user._id &&
          <EditIcon></EditIcon>
            }   
      
    </div>
    </Link>
  )
}

export default TaskCard
