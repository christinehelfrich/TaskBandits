import React from 'react'
import TaskDataForm from '../molecules/TaskDataForm'
import {useSelector} from "react-redux"

const TaskForm = () => {
    const loggedInUser = useSelector((state) => {
        return state.user.user
        });

    const defaultValues = {
        title: '',
        description: '',
        hours: '',
        hourlyBudget: '',
        area: '',
        employerId: ''
    }

    const onSubmit = (event) => {
        console.log(event)
    }

  return (
    <div>

      <TaskDataForm defaultFormValues={defaultValues} onSubmit={onSubmit}></TaskDataForm>
    </div>
  )
}

export default TaskForm
