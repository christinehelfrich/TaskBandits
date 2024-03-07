import React from 'react';
import { useForm } from 'react-hook-form';
import axios from "axios";
import { baseURL } from '../../utils/constant';

const ProfileForm = ({isCreateMode, profileData}) => {

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
      console.log('errors', errors)
    }

    const onClear = () => {
      console.log('on clear')
      //reset();
    }

    const onDelete = () => {
      console.log('on delete')

    }
   
    const onSubmit = (event) => {
        console.log('on submit', event)
        if(isCreateMode) {
          axios.post(`${baseURL}/profile`, {profile: event}).then((res) => {
            console.log(res.data);
          })
        } else {
          axios.put(`${baseURL}/profile/${profileData._id}`, {profile: event}).then((res) => {
            console.log(res.data);
          })
        }

    }
  return (

    <form className='createProfileForm' onSubmit={handleSubmit(onSubmit)}>


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
          <div className="alert-danger" role="alert">{errors.name.message}</div>
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
          <div className="alert-danger" role="alert">{errors.area.bio}</div>
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
          <div className="alert-danger" role="alert">{errors.area.photo}</div>
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
          <div className="alert-danger" role="alert">{errors.area.skills}</div>
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
          <div className="alert-danger" role="alert">{errors.hourlyWage.message}</div>
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
          <div className="alert-danger" role="alert">{errors.area.message}</div>
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
          <div className="alert-danger" role="alert">{errors.isUnder21.message}</div>
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
          <div className="alert-danger" role="alert">{errors.experience.message}</div>
          )}


        <input className='button-primary' type="submit" value={isCreateMode ? 'Submit' : 'Update Profile'} />
        <button className='button-danger' onClick={isCreateMode ? onClear() : onDelete()}>{isCreateMode ? 'Clear' : 'Delete Profile'}</button>
    </form>
  )
}

export default ProfileForm
