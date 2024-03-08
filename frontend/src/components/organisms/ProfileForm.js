import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from "axios";
import { baseURL } from '../../utils/constant';
import Alert from '../atoms/Alert';

const ProfileForm = ({isCreateMode, profileData}) => {

  const [showSuccessMessage, setShowSuccessMessage] = useState(false)

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm({
        defaultValues: {
            name: isCreateMode ? '' : profileData.name,
            bio: isCreateMode ? '' : profileData.bio,
            photo: isCreateMode ? '' : profileData.photo,
            skills: isCreateMode ? '' : profileData.skills,
            hourlyWage: isCreateMode ? '' : profileData.hourlyWage,
            area: isCreateMode ? '' : profileData.area,
            isUnder21: isCreateMode ? false : profileData.isUnder21,
            experience: isCreateMode ? '' : profileData.experience
        }
      });

    const handleChange = (event) => {
    }

    const onClear = () => {
      reset();
      setShowSuccessMessage(true)
      setTimeout(() => {
        setShowSuccessMessage(false)
      }, 2000)
      
    }

    const onDelete = () => {
      console.log('profileData._id', profileData._id)
      axios.delete(`${baseURL}/profile/${profileData._id}`)
      .then((res) => {
        reset();
        setShowSuccessMessage(true)
        setTimeout(() => {
          setShowSuccessMessage(false)
        }, 2000)
      })


    }
   
    const onSubmit = (event) => {
        if(isCreateMode) {
          axios.post(`${baseURL}/profile`, {profile: event}).then((res) => {
            console.log(res.data);
            reset();
            setShowSuccessMessage(true)
            setTimeout(() => {
              setShowSuccessMessage(false)
            }, 2000)
          })
        } else {
          axios.put(`${baseURL}/profile/${profileData._id}`, {profile: event}).then((res) => {
            console.log(res.data);
          })
        }

    }
  return (

    <form className='createProfileForm' onSubmit={handleSubmit(onSubmit)}>
      {showSuccessMessage && <Alert wording={`Success! Profile successfully ${isCreateMode ? 'Created' : 'Updated'}`} type={'success'}></Alert>}


      <label className='formitem label name'>Name:
      <input 
        className='formitem input name'
        type="text" 
        name="name" 
        {...register("name", {
          required: "Name is Required"
        })}
        onChange={handleChange}
      />
      </label>
      {errors.name && (
          <Alert wording={errors.name.message} type={'danger'}></Alert>
          )}


      <label className='formitem label age'>Bio:
        <textarea 
          className='formitem input age'
          type="text" 
          name="bio" 
          {...register("bio")}
          onChange={handleChange}
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
          onChange={handleChange}
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
          onChange={handleChange}
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
          {...register("hourlyWage", {
            required: "Hourly Wage is Required"
        })}
          onChange={handleChange}
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
          onChange={handleChange}
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
          onChange={handleChange}
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
          onChange={handleChange}
        />
        </label>
        {errors.experience && (
          <Alert wording={errors.experience.message} type={'danger'}></Alert>
          )}


        <input className='button-primary' type="submit" value={isCreateMode ? 'Submit' : 'Update Profile'} />
        <button className='button-danger' onClick={isCreateMode ? onClear : onDelete}>{isCreateMode ? 'Clear' : 'Delete Profile'}</button>
        
    </form>
  )
}

export default ProfileForm
