import React, { useRef, useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Alert from '../atoms/Alert';

const ProfileDataForm = ({defaultFormValues, onSubmit, isCreateMode, onDelete, isReadOnly}) => {

  const [isWorker, setIsWorker] = useState(isCreateMode ? true : defaultFormValues?.isWorkerProfileType)
  const [isFormEdited, setIsFormEdited] = useState(false)
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

  const onFormChange = (event) => {
    setIsFormEdited(true)
  }

  return (
    <form className='createProfileForm' onSubmit={handleSubmit(onSubmit)}>

{page === 1 && (
        <div>

        <p><strong>Are you signing up as a prospective:</strong></p>
        <div className='profile-form-checkboxes'>
          <div>
            <label>Worker</label>
            <input 
            readOnly={isReadOnly}
            type="checkbox"
            name="isWorkerProfileType" 
              {...register("isWorkerProfileType", {
                onChange: (e) => {onFormChange(e)}
              })}
              onChange={onChangeRole}/>
              </div>
              <div>
            <label>Employer</label>
            <input 
            type="checkbox"
            name="isEmployerProfileType" 
            {...register("isEmployerProfileType", {
              onChange: (e) => {onFormChange(e)}
            })}
            onChange={onChangeRole}/>
            </div>
            </div>
        <button className='button-primary profilenext' onClick={onPageOneToTwo}>Next</button>     
        </div>        
        )}

{page === 2 && (
  <div>
      <div className='formRow'>
              <label className='formitem label name'>Name:</label>
                <input 
                readOnly={isReadOnly}
                className='formitem input name'
                type="text" 
                name="name" 
                {...register("name", {
                  required: "Name is Required",
                  onChange: (e) => {onFormChange(e)}
                })}
              />

              {errors.name && (
                  <Alert wording={errors.name.message} type={'danger'}></Alert>
                  )}
      </div>


      <div className='formRow'>
              <label className='formitem label email'>Email:</label>
              <input 
              readOnly={isReadOnly}
                className='formitem input email'
                type="email" 
                name="email" 
                {...register("email", {
                  required: "Email is Required",
                  onChange: (e) => {onFormChange(e)}
                })}
              />
              
              {errors.email && (
                  <Alert wording={errors.email.message} type={'danger'}></Alert>
                  )}
      </div>


      <div className='formRow'>
              <label className='formitem label age'>Bio:</label>
                <textarea 
                readOnly={isReadOnly}
                  className='formitem input age'
                  type="text" 
                  name="bio" 
                  {...register("bio", {
                    onChange: (e) => {onFormChange(e)}
                  })}
                />
                
                {errors.bio && (
                  <Alert wording={errors.bio.message} type={'danger'}></Alert>
                  )}
      </div>

      <div className='formRow'>
                <label className='formitem label photo'>Photo:</label>
                <input 
                readOnly={isReadOnly}
                        className='formitem input photo'
                  type="text" 
                  name="photo" 
                  {...register("photo", {
                    onChange: (e) => {onFormChange(e)}
                  })}
                />
                
                {errors.photo && (
                   <Alert wording={errors.photo.message} type={'danger'}></Alert>
                  )}
       </div>

        <div className='formRow'>
                <label className='formitem label area'>Area:</label>
                <input 
                readOnly={isReadOnly}
                        className='formitem input area'
                  type="text" 
                  name="area" 
                  {...register("area", {
                    required: "Area is Required",
                    onChange: (e) => {onFormChange(e)}
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
                readOnly={isReadOnly}
                        className='formitem input skills'
                  type="text" 
                  name="skills" 
                  {...register("skills", {
                    onChange: (e) => {onFormChange(e)}
                  })}
                />
                
                {errors.skills && (
                  <Alert wording={errors.skills.message} type={'danger'}></Alert>
                  )}
        </div>

        <div className='formRow'>
                <label className='formitem label hourlyWage'>Hourly wage:</label>
                <input 
                readOnly={isReadOnly}
                        className='formitem input hourlyWage'
                  type="text" 
                  name="hourlyWage" 
                  {...register("hourlyWage", {
                    onChange: (e) => {onFormChange(e)}
                  })}
                />
                
                {errors.hourlyWage && (
                  <Alert wording={errors.hourlyWage.message} type={'danger'}></Alert>
                  )}
        </div>

        <div className='formRow'>
                <label className='formitem label isUnder21'>Is under the age of 21 years old:</label>
                <input 
                readOnly={isReadOnly}
                        className='formitem input isUnder21'
                  type="checkbox" 
                  name="isUnder21" 
                  {...register("isUnder21", {
                    onChange: (e) => {onFormChange(e)}
                  })}
                />
                
                {errors.isUnder21 && (
                   <Alert wording={errors.isUnder21.message} type={'danger'}></Alert>
                  )}
        </div>

        <div className='formRow'>
                <label className='formitem label experience'>Experience:</label>
                <textarea 
                readOnly={isReadOnly}
                        className='formitem input experience'
                  type="text" 
                  name="experience" 
                  {...register("experience", {
                    onChange: (e) => {onFormChange(e)}
                  })}
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
                readOnly={isReadOnly}
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
                  },
                    onChange: (e) => {onFormChange(e)}
                  
                })}
                />

                {errors.password && (
                  <Alert wording={errors.password?.message} type={'danger'}></Alert>
                  )}
            </div>

            <div className='formRow'>
                <label className='formitem label passwordRetype'>Retype Password:</label>
                <input 
                readOnly={isReadOnly}
                className='formitem input passwordRetype'
                type="password" 
                name="passwordRetype" 
                {...register("passwordRetype", {          
                    validate: value =>
                    value === password.current || "The passwords do not match",
                    onChange: (e) => {onFormChange(e)}})}
                />

                {errors.passwordRetype && (
                  <Alert wording={errors.passwordRetype?.message} type={'danger'}></Alert>
                  )}
            </div>
            
          </>
        )}

        <div>
        {!isReadOnly && <input className={`button-primary ${isFormEdited ? '' : 'button-disabled'}`} type="submit" disabled={!isFormEdited} aria-disabled={!isFormEdited} value={isCreateMode ? 'Submit' : 'Update Profile'} />}
        {!isReadOnly && <button className={`button-danger ${isFormEdited ? '' : 'button-disabled'}`} disabled={!isFormEdited} aria-disabled={!isFormEdited} type="button" onClick={onClear}>{isCreateMode ? 'Clear' : 'Revert'}</button>}
        {!isCreateMode && !isReadOnly && (<button className='button-danger' type="button" onClick={onDelete}>Delete Profile</button>)}
        {!isCreateMode && (<button type="button" className='button-secondary'><Link className='navLink' to={'/'}>Back</Link></button>)}
        {isCreateMode && !isReadOnly && (<button type='button' className='button-secondary' onClick={onPageTwoToOne}>Back</button>  )}
        {isReadOnly && isWorker && <button type="button" className={`button-primary`}>Contact</button>}
        </div>
        </div>
                        )}
    </form>

  )
}

export default ProfileDataForm
