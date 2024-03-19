import React from 'react'
import TaskDataForm from '../molecules/TaskDataForm'
import {useSelector} from "react-redux"
import axios from 'axios';
import { baseURL } from '../../utils/constant';
import { useNavigate } from 'react-router-dom';

const TaskForm = ({defaultTaskFormValues}) => {
    const loggedInUser = useSelector((state) => {
        return state.user.user
        });
    const navigate = useNavigate();

    const defaultValues = {
        title: defaultTaskFormValues?.title ? defaultTaskFormValues?.title : '',
        description: defaultTaskFormValues?.description ? defaultTaskFormValues?.description : '',
        hours: defaultTaskFormValues?.hours ? defaultTaskFormValues?.hours : '',
        hourlyBudget: defaultTaskFormValues?.hourlyBudget ? defaultTaskFormValues?.hourlyBudget : '',
        area: defaultTaskFormValues?.area ? defaultTaskFormValues?.area : '',
        employerId: defaultTaskFormValues?.employerId ? defaultTaskFormValues?.employerId : ''
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
      <TaskDataForm defaultFormValues={defaultValues} onSubmit={onSubmit} isReadOnly={(loggedInUser.user._id != defaultTaskFormValues?.employerId) && (defaultTaskFormValues?.employerId != undefined)}></TaskDataForm>
    </div>
  )
}

export default TaskForm
