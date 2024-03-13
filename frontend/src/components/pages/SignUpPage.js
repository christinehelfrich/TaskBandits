import axios from 'axios';
import React, { useRef, useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { baseURL } from '../../utils/constant';
import Alert from '../atoms/Alert';
import Spinner from '../atoms/Spinner';

const SignUpPage = () => {

    const [isWorker, setIsWorker] = useState(true)
    const [page, setPage] = useState(1)
    // const [showSuccessMessage, setShowSuccessMessage] = useState(false)
    const [isLoading, setisLoading] = useState(false)
    const navigate = useNavigate();
    

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
        watch
      } = useForm({
        defaultValues: {
            isWorkerProfileType: isWorker,
            isEmployerProfileType: !isWorker,
            name:  '',
            email: '',
            bio: '',
            photo: '',
            skills: '',
            hourlyWage: '',
            area:  '',
            isUnder21: false,
            experience:  '',
            password:  '',
        }
      });

      const password = useRef({});
      password.current = watch("password", "");



    const onPageOneToTwo = () => {
        setPage(2)
    }

    const onPageTwoToOne = () => {
        setPage(1)
    }

    const onCreate = (event) => {
        setisLoading(true)
        axios.post(`${baseURL}/profile`, {profile: event}).then((res) => {
            setisLoading(false)
            navigate("/login", {state: {showCreateSuccess: true}})
          })
    }

    const onChangeRole = () => {
        setValue("isWorkerProfileType", !isWorker)
        setValue("isEmployerProfileType", isWorker)
        setIsWorker(!isWorker)
        
    }

  return (
    <div>
        <h2>Sign Up</h2>
        <p className='smalltext'>Already have an account? <Link className='smalltext' to={'/login'}>Log In</Link></p>
        {isLoading && <Spinner></Spinner>}
        <form onSubmit={handleSubmit(onCreate)} className='createProfileForm'>

        {page === 1 && (
        <div>

        <p>Are you signing up as a prospective:</p>
            <label>Worker</label>
            <input 
            type="checkbox"
            name="isWorkerProfileType" 
              {...register("isWorkerProfileType")}
              onChange={onChangeRole}/>
            <br></br>
            <label>Employer</label>
            <input 
            type="checkbox"
            name="isEmployerProfileType" 
            {...register("isEmployerProfileType")}
            onChange={onChangeRole}/>
            <br></br>
        <button className='button-primary' onClick={onPageOneToTwo}>Next</button>     
        </div>        
        )}



        {page === 2 && (

            <div className='createProfileForm'>
                 <h3>PAGE TWO</h3>

            <div className='formRow'>
              <label className='formitem label name'>Name:</label>
                <input 
                className='formitem input name'
                type="text" 
                name="name" 
                {...register("name", {
                  required: "Name is Required"
                })}
              />

              {errors.name && (
                  <Alert wording={errors.name.message} type={'danger'}></Alert>
                  )}
            </div>
            
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
              <label className='formitem label age'>Bio:</label>
                <textarea 
                  className='formitem input age'
                  type="text" 
                  name="bio" 
                  {...register("bio")}
                />
                
                {errors.bio && (
                  <Alert wording={errors.bio.message} type={'danger'}></Alert>
                  )}
                  </div>
            <div className='formRow'>
                <label className='formitem label photo'>Photo:</label>
                <input 
                        className='formitem input photo'
                  type="text" 
                  name="photo" 
                  {...register("photo")}
                />
                
                {errors.photo && (
                   <Alert wording={errors.photo.message} type={'danger'}></Alert>
                  )}
                  </div>
        
                
                {isWorker && (
                    <>
            <div className='formRow'>
                <label className='formitem label skills'>Skills:</label>
                <textarea 
                        className='formitem input skills'
                  type="text" 
                  name="skills" 
                  {...register("skills")}
                />
                
                {errors.skills && (
                  <Alert wording={errors.skills.message} type={'danger'}></Alert>
                  )}
            </div>
        
            <div className='formRow'>
                <label className='formitem label hourlyWage'>Hourly wage:</label>
                <input 
                        className='formitem input hourlyWage'
                  type="text" 
                  name="hourlyWage" 
                  {...register("hourlyWage")}
                />
                
                {errors.hourlyWage && (
                  <Alert wording={errors.hourlyWage.message} type={'danger'}></Alert>
                  )}
            </div>
        
        </>)}
                
            <div className='formRow'>
                <label className='formitem label area'>Area:</label>
                <input 
                        className='formitem input area'
                  type="text" 
                  name="area" 
                  {...register("area", {
                    required: "Area is Required"
                })}
                />
                
                {errors.area && (
                   <Alert wording={errors.area.message} type={'danger'}></Alert>
                  )}
            </div>
        
        {isWorker && (
            <>
            <div className='formRow'>
                <label className='formitem label isUnder21'>Is under the age of 21 years old:</label>
                <input 
                        className='formitem input isUnder21'
                  type="checkbox" 
                  name="isUnder21" 
                  {...register("isUnder21")}
                />
                
                {errors.isUnder21 && (
                   <Alert wording={errors.isUnder21.message} type={'danger'}></Alert>
                  )}
                  </div>
            <div className='formRow'>
                <label className='formitem label experience'>Experience:</label>
                <textarea 
                        className='formitem input experience'
                  type="text" 
                  name="experience" 
                  {...register("experience")}
                />
                
                {errors.experience && (
                  <Alert wording={errors.experience.message} type={'danger'}></Alert>
                  )}
                  </div>
                  </>)}

            <div className='formRow'>
                <label className='formitem label password'>Password:</label>
                <input 
                className='formitem input password'
                type="password" 
                name="password" 
                {...register("password", {
                  required: "Password is Required",
                  minLength: {
                    value: 8,
                    message: "Password must have at least 8 characters"
                  },
                  pattern: {
                    value: /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
                    message: "Password must have at least a symbol, upper and lower case letters and a number"
                  }
                })}
                />

                {errors.password && (
                  <Alert wording={errors.password?.message} type={'danger'}></Alert>
                  )}
            </div>

            <div className='formRow'>
                <label className='formitem label passwordRetype'>Retype Password:</label>
                <input 
                className='formitem input passwordRetype'
                type="password" 
                name="passwordRetype" 
                {...register("passwordRetype", {          
                    validate: value =>
                    value === password.current || "The passwords do not match"})}
                />

                {errors.passwordRetype && (
                  <Alert wording={errors.passwordRetype?.message} type={'danger'}></Alert>
                  )}
            </div>
                
                                <button className='button-secondary' onClick={onPageTwoToOne}>Back</button>  
                                <input type="submit" className='button-primary' /> 
                    </div>
                )}
        </form>
    </div>
  )
}

export default SignUpPage
