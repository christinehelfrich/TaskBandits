import React from 'react'
import { Link } from 'react-router-dom'
import EditIcon from '../atoms/EditIcon'

const TaskCard = ({task}) => {
  return (
    <div className='detailsCard'>
        <p>{task.title}</p>
        <Link to={`/task-details/${task._id}`}><EditIcon></EditIcon></Link>
      
    </div>
  )
}

export default TaskCard
