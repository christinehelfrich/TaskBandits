import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { baseURL } from '../../utils/constant';
import Alert from '../atoms/Alert';
import Spinner from '../atoms/Spinner';
import ProfileDataForm from '../molecules/ProfileDataForm';

const SignUpPage = () => {

    const [isLoading, setisLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const navigate = useNavigate();

    const onCreate = (event) => {
        setisLoading(true)
        axios.post(`${baseURL}/profile`, {profile: event}).then({
          next: (res) => {
            setisLoading(false)
            navigate("/login", {state: {showCreateSuccess: true}})
          },
          error: (err) => {
            setisLoading(false)
            setErrorMessage('Some sort of error......')
          }
        })
    }

  return (
    <div>
        <h2>Sign Up</h2>
        <p className='smalltext'>Already have an account? <Link className='smalltext' to={'/login'}>Log In</Link></p>
        {errorMessage !== '' && <Alert wording={errorMessage} type={'danger'}></Alert>}
        {isLoading && <Spinner></Spinner>}

        <ProfileDataForm defaultFormValues={{isWorkerProfileType: true}} onSubmit={onCreate} isCreateMode={true} ></ProfileDataForm>

    </div>
  )
}

export default SignUpPage
