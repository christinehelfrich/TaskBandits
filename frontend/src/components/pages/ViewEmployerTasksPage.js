import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { baseURL } from '../../utils/constant'
import TaskList from '../organisms/TaskList'

const ViewEmployerTasksPage = () => {

  const [tasks, setTasks] = useState([])
  const user = useSelector((state) => {
    return state.user.user
    });

  useEffect(() => {
      axios.get(`${baseURL}/tasks-by-employer/${user.user._id}`)
      .then((res) => {
          setTasks(res.data)
      })
  }, [])

  return (
    <div>
        <TaskList tasks={tasks}></TaskList>
      
    </div>
  )
}

export default ViewEmployerTasksPage
