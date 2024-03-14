import React from 'react'
import TaskDataForm from '../molecules/TaskDataForm'
import {useSelector} from "react-redux"
import axios from 'axios';
import { baseURL } from '../../utils/constant';
import { useNavigate } from 'react-router-dom';

const TaskForm = () => {
    const loggedInUser = useSelector((state) => {
        return state.user.user
        });
    const navigate = useNavigate();

    const defaultValues = {
        title: '',
        description: '',
        hours: '',
        hourlyBudget: '',
        area: '',
        employerId: ''
    }

    const onSubmit = (event) => {

        let newTask = event
        newTask.employerId = loggedInUser.user._id

        axios.post(`${baseURL}/task`, {task: newTask}).then((res) => {
            navigate("/", {state: {showCreateSuccess: true}})
        })
    }

  return (
    <div>

      <TaskDataForm defaultFormValues={defaultValues} onSubmit={onSubmit}></TaskDataForm>
    </div>
  )
}

export default TaskForm
