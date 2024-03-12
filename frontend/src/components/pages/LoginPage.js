import React, { useEffect, useState } from 'react'
import Alert from '../atoms/Alert'
import { useForm } from 'react-hook-form';
import { Link, useLocation } from 'react-router-dom'
import axios from 'axios';
import { baseURL } from '../../utils/constant';

const LoginPage = () => {
  const {state} = useLocation()
  const [showCreateSuccessMessage, setShowCreateSuccessMessage] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
        email: '',
        password:  '',
    }
  });

  useEffect(() => {
    if(state?.showCreateSuccess){
      setShowCreateSuccessMessage(true)
    setTimeout(() => {
      setShowCreateSuccessMessage(false)
    }, 2000)
  }}, [state])

  const onCreate = (event) => {
    console.log('on submit', event)
    axios.post(`${baseURL}/login`, event)
    .then((res) => {
        console.log(res)
        setSuccessMessage(`Log In Successful. Welcome, ${res.data.user.name}`)
        setTimeout(() => {
          setSuccessMessage('')
        }, 5000)
    })
    .catch((err) => {
      setErrorMessage(err.response.data.msg)
      setTimeout(() => {
        setErrorMessage('')
      }, 5000)
    })

  }

  return (
    <div>
        <h2>Log In</h2>
        {showCreateSuccessMessage && <Alert wording={`Success! Profile successfully Created. Use your new credentials to log in.`} type={'success'}></Alert>}
        {errorMessage != '' && <Alert wording={errorMessage} type={'danger'}></Alert>}
        {successMessage != '' && <Alert wording={successMessage} type={'success'}></Alert>}
        <p className='smalltext'>Don't have an account? <Link className='smalltext' to={'/signup'}>Sign Up</Link></p>

        <form onSubmit={handleSubmit(onCreate)} className='createProfileForm'>

              <div className='formRow'>
              <label className='formitem label email'>Email:</label>
              <input 
                className='formitem input email'
                type="email" 
                name="email" 
                {...register("email", {
                  required: "Email is Required"
                })}
              />
              
              {errors.email && (
                  <Alert wording={errors.email.message} type={'danger'}></Alert>
                  )}
                  </div>

                  <div className='formRow'>
                <label className='formitem label password'>Password:</label>
                <input 
                className='formitem input password'
                type="password" 
                name="password" 
                {...register("password", {
                  required: "Password is Required",
                })}
                />
                                {errors.password && (
                  <Alert wording={errors.password?.message} type={'danger'}></Alert>
                  )}
            </div>

            <input type="submit" className='button-primary' /> 
      </form>

      
    </div>
  )
}

export default LoginPage
