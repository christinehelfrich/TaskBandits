import React, { useRef, useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Alert from '../atoms/Alert';

const ProfileDataForm = ({defaultFormValues, onSubmit, isCreateMode, onDelete}) => {

  const [isWorker, setIsWorker] = useState(isCreateMode ? true : defaultFormValues?.isWorkerProfileType)
  const [page, setPage] = useState(isCreateMode ? 1 : 2)
    const {
        register,
        handleSubmit,
        reset,
        setValue,
        watch,
        formState: { errors },
      } = useForm({
        defaultValues: defaultFormValues
      });

    const password = useRef({});
    password.current = watch("password", "");


    const onClear = () => {
      reset();
    }

    const onPageOneToTwo = () => {
      setPage(2)
    }

    const onPageTwoToOne = () => {
        setPage(1)
    }

    const onChangeRole = () => {
      setValue("isWorkerProfileType", !isWorker)
      setValue("isEmployerProfileType", isWorker)
      setIsWorker(!isWorker)  
  }
    console.log('defaultFormValues', defaultFormValues)

  return (
    <form className='createProfileForm' onSubmit={handleSubmit(onSubmit)}>

{page === 1 && (
        <div>

        <p><strong>Are you signing up as a prospective:</strong></p>
        <div className='profile-form-checkboxes'>
          <div>
            <label>Worker</label>
            <input 
            type="checkbox"
            name="isWorkerProfileType" 
              {...register("isWorkerProfileType")}
              onChange={onChangeRole}/>
              </div>
              <div>
            <label>Employer</label>
            <input 
            type="checkbox"
            name="isEmployerProfileType" 
            {...register("isEmployerProfileType")}
            onChange={onChangeRole}/>
            </div>
            </div>
        <button className='button-primary' onClick={onPageOneToTwo}>Next</button>     
        </div>        
        )}

{page === 2 && (
  <div>
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

        {isCreateMode && (
          <>
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
            
          </>
        )}

        <div>
        <input className='button-primary' type="submit" value={isCreateMode ? 'Submit' : 'Update Profile'} />
        <button className='button-danger' type="button" onClick={onClear}>{isCreateMode ? 'Clear' : 'Revert'}</button>
        {!isCreateMode && (<button className='button-danger' type="button" onClick={onDelete}>Delete Profile</button>)}
        {!isCreateMode && (<button type="button" className='button-secondary'><Link className='navLink' to={'/'}>Back</Link></button>)}
        {isCreateMode && (<button type='button' className='button-secondary' onClick={onPageTwoToOne}>Back</button>  )}
        </div>
        </div>
                        )}
    </form>

  )
}

export default ProfileDataForm
