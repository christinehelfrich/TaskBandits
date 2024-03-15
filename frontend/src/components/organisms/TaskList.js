import React from 'react'
import TaskCard from '../molecules/TaskCard'

const TaskList = ({tasks}) => {
  return (
    <div>
      {tasks.map(task => (
        <TaskCard key={task._id} task={task}></TaskCard>
      ))}
    </div>
  )
}

export default TaskList
