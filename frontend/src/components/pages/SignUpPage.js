import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { baseURL } from '../../utils/constant';
import Spinner from '../atoms/Spinner';
import ProfileDataForm from '../molecules/ProfileDataForm';

const SignUpPage = () => {

    const [isWorker, setIsWorker] = useState(true)
    const [page, setPage] = useState(1)
    const [isLoading, setisLoading] = useState(false)
    const navigate = useNavigate();

    const onCreate = (event) => {
        setisLoading(true)
        axios.post(`${baseURL}/profile`, {profile: event}).then((res) => {
            setisLoading(false)
            navigate("/login", {state: {showCreateSuccess: true}})
          })
    }

  return (
    <div>
        <h2>Sign Up</h2>
        <p className='smalltext'>Already have an account? <Link className='smalltext' to={'/login'}>Log In</Link></p>
        {isLoading && <Spinner></Spinner>}

        <ProfileDataForm defaultFormValues={{isWorkerProfileType: true}} onSubmit={onCreate} isCreateMode={true} ></ProfileDataForm>

    </div>
  )
}

export default SignUpPage
