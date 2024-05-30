import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { baseURL } from '../../utils/constant'
import TaskList from '../organisms/TaskList'

const ViewTasksPage = () => {

  const [tasks, setTasks] = useState([])

  useEffect(() => {
      axios.get(`${baseURL}/tasks`)
      .then((res) => {
          setTasks(res.data)
      })
  }, [])

  return (
    <div>
      {
        tasks.length <= 0 &&
        <p>No Tasks Yet!</p>
      }
        <TaskList tasks={tasks}></TaskList>
      
    </div>
  )
}

export default ViewTasksPage
