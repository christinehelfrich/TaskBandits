import React, {useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from "axios";
import { baseURL } from '../../utils/constant';

const CreateProfileForm = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        defaultValues: {
            name: '',
            bio: '',
            photo: '',
            skills: '',
            hourlyWage: '',
            area: '',
            isUnder21: false,
            experience: ''
        }
      });

    const handleChange = (event) => {
    }
  
    const onSubmit = (event) => {
        console.log('event', event)
        axios.post(`${baseURL}/profile`, {profile: event}).then((res) => {
            console.log(res.data);

        })
    }
  return (

    <form className='createProfileForm' onSubmit={handleSubmit(onSubmit)}>


      <label className='formitem label name'>Enter your name:
      <input 
        className='formitem input name'
        type="text" 
        name="name" 
        {...register("name")}
        onChange={handleChange}
      />
      </label>

      <label className='formitem label age'>Enter a bio:
        <textarea 
          className='formitem input age'
          type="text" 
          name="bio" 
          {...register("bio")}
          onChange={handleChange}
        />
        </label>

        <label className='formitem label photo'>Enter an photo:
        <input 
                className='formitem input photo'
          type="text" 
          name="photo" 
          {...register("photo")}
          onChange={handleChange}
        />
        </label>

        <label className='formitem label skills'>Enter a list of skills:
        <textarea 
                className='formitem input skills'
          type="text" 
          name="skills" 
          {...register("skills")}
          onChange={handleChange}
        />
        </label>

        <label className='formitem label hourlyWage'>Enter an hourly wage:
        <input 
                className='formitem input hourlyWage'
          type="text" 
          name="hourlyWage" 
          {...register("hourlyWage")}
          onChange={handleChange}
        />
        </label>

        <label className='formitem label area'>Enter a location area:
        <input 
                className='formitem input area'
          type="text" 
          name="area" 
          {...register("area")}
          onChange={handleChange}
        />
        </label>

        <label className='formitem label isUnder21'>Check if you are under 21 years old:
        <input 
                className='formitem input isUnder21'
          type="checkbox" 
          name="isUnder21" 
          {...register("isUnder21")}
          onChange={handleChange}
        />
        </label>

        <label className='formitem label experience'>Enter your experience:
        <textarea 
                className='formitem input experience'
          type="text" 
          name="experience" 
          {...register("experience")}
          onChange={handleChange}
        />
        </label>


        <input className='button-primary' type="submit" />
    </form>
  )
}

export default CreateProfileForm
