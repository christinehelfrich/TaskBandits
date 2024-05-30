import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { baseURL } from '../../utils/constant'
import TaskList from '../organisms/TaskList'
import { Link } from 'react-router-dom'

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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      {
        tasks.length <= 0 &&
        <p>
          No Tasks Yet!
          <Link to={'/create-new-task'}><p>Create One Here</p></Link>
        </p>
        
      }
        <TaskList tasks={tasks}></TaskList>
      
    </div>
  )
}

export default ViewEmployerTasksPage
