import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { baseURL } from '../../utils/constant'
import Spinner from '../atoms/Spinner'
import TaskForm from '../organisms/TaskForm'

const TaskDetailsPage = () => {
    const [task, setTask] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const {id} = useParams()
    console.log('id in deets page', id)

    useEffect(() => {
        setIsLoading(true)
        axios.get(`${baseURL}/task/${id}`)
        .then((res) => {
            console.log(res)
            setTask(res.data)
            setIsLoading(false)
        })

    }, [id])

  return (
    <div>
        {isLoading ? <Spinner></Spinner> :
        <TaskForm defaultTaskFormValues={task}></TaskForm>
  }
      
    </div>
  )
}

export default TaskDetailsPage
