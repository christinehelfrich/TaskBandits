import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import Alert from '../atoms/Alert';

const SignUpPage = () => {

    const [isWorker, setIsWorker] = useState(true)
    const [page, setPage] = useState(1)

    const {
        register,
        handleSubmit,
        reset,
        setValue,
        formState: { errors },
      } = useForm({
        defaultValues: {
            isWorkerProfileType: false,
            name:  '',
            email: '',
            bio: '',
            photo: '',
            skills: '',
            hourlyWage: '',
            area:  '',
            isUnder21: false,
            experience:  '',
        }
      });



    const onPageOneToTwo = () => {
        setPage(2)
    }

    const onPageTwoToOne = () => {
        setPage(1)
    }

    const onCreate = () => {
    }

    const onChangeRole = () => {
        setIsWorker(!isWorker)
        console.log('changed', isWorker)
        setValue("isWorkerProfileType", !isWorker)
    }

  return (
    <div>
        <h2>Sign Up</h2>
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
        onChange={onChangeRole}
        value={isWorker}/>
        <br></br>
        <button className='button-primary' onClick={onPageOneToTwo}>Next</button>     
        </div>        
        )}



        {page === 2 && (
            <div className='createProfileForm'> <h3>PAGE TWO</h3>
      <label className='formitem label name'>Name:
      <input 
        className='formitem input name'
        type="text" 
        name="name" 
        {...register("name", {
          required: "Name is Required"
        })}
      />
      </label>
      {errors.name && (
          <Alert wording={errors.name.message} type={'danger'}></Alert>
          )}


      <label className='formitem label name'>Email:
      <input 
        className='formitem input email'
        type="text" 
        name="email" 
        {...register("email", {
          required: "Email is Required"
        })}
      />
      </label>
      {errors.email && (
          <Alert wording={errors.email.message} type={'danger'}></Alert>
          )}


      <label className='formitem label age'>Bio:
        <textarea 
          className='formitem input age'
          type="text" 
          name="bio" 
          {...register("bio")}
        />
        </label>
        {errors.bio && (
          <Alert wording={errors.bio.message} type={'danger'}></Alert>
          )}

        <label className='formitem label photo'>Photo:
        <input 
                className='formitem input photo'
          type="text" 
          name="photo" 
          {...register("photo")}
        />
        </label>
        {errors.photo && (
           <Alert wording={errors.photo.message} type={'danger'}></Alert>
          )}

        <label className='formitem label skills'>Skills:
        <textarea 
                className='formitem input skills'
          type="text" 
          name="skills" 
          {...register("skills")}
        />
        </label>
        {errors.skills && (
          <Alert wording={errors.skills.message} type={'danger'}></Alert>
          )}

        <label className='formitem label hourlyWage'>Hourly wage:
        <input 
                className='formitem input hourlyWage'
          type="text" 
          name="hourlyWage" 
          {...register("hourlyWage")}
        />
        </label>
        {errors.hourlyWage && (
          <Alert wording={errors.hourlyWage.message} type={'danger'}></Alert>
          )}

        <label className='formitem label area'>Area:
        <input 
                className='formitem input area'
          type="text" 
          name="area" 
          {...register("area", {
            required: "Area is Required"
        })}
        />
        </label>
        {errors.area && (
           <Alert wording={errors.area.message} type={'danger'}></Alert>
          )}

        <label className='formitem label isUnder21'>Is under the age of 21 years old:
        <input 
                className='formitem input isUnder21'
          type="checkbox" 
          name="isUnder21" 
          {...register("isUnder21")}
        />
        </label>
        {errors.isUnder21 && (
           <Alert wording={errors.isUnder21.message} type={'danger'}></Alert>
          )}

        <label className='formitem label experience'>Experience:
        <textarea 
                className='formitem input experience'
          type="text" 
          name="experience" 
          {...register("experience")}
        />
        </label>
        {errors.experience && (
          <Alert wording={errors.experience.message} type={'danger'}></Alert>
          )}
                        <button className='button-secondary' onClick={onPageTwoToOne}>Back</button>  
                        <input type="submit" className='button-primary' onClick={onPageTwoToOne} /> 
            </div>
        )}
        </form>
    </div>
  )
}

export default SignUpPage
