import React from 'react'
import { useForm } from 'react-hook-form';
// import { Link } from 'react-router-dom';
import Alert from '../atoms/Alert';
import BasicModal from '../atoms/BasicModal';

const TaskDataForm = ({defaultFormValues, onSubmit, isReadOnly}) => {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        defaultValues: defaultFormValues
      });

  return (
    <form className='createProfileForm' onSubmit={handleSubmit(onSubmit)}>
        <div className='formRow'>
              <label className='formitem label'>Title:</label>
                <input 
                readOnly={isReadOnly}
                className='formitem input'
                type="text" 
                name="title" 
                {...register("title", {
                  required: "Title is Required"
                })}
              />

              {errors.title && (
                  <Alert wording={errors.title.message} type={'danger'}></Alert>
                  )}
        </div>

        <div className='formRow'>
              <label className='formitem label'>Description:</label>
                <textarea 
                readOnly={isReadOnly}
                className='formitem input'
                type="text" 
                name="description" 
                {...register("description", {
                  required: "Description is Required"
                })}
              />

              {errors.description && (
                  <Alert wording={errors.description.message} type={'danger'}></Alert>
                  )}
        </div>

        <div className='formRow'>
              <label className='formitem label'>Hours Required:</label>
                <input 
                readOnly={isReadOnly}
                className='formitem input'
                type="text" 
                name="hours" 
                {...register("hours", {
                  required: "Hours is Required"
                })}
              />

              {errors.hours && (
                  <Alert wording={errors.hours.message} type={'danger'}></Alert>
                  )}
        </div>
        <div className='formRow'>
              <label className='formitem label'>Hourly Budget:</label>
                <input
                readOnly={isReadOnly} 
                className='formitem input'
                type="text" 
                name="hourlyBudget" 
                {...register("hourlyBudget", {
                  required: "Hourly Budget is Required"
                })}
              />

              {errors.hourlyBudget && (
                  <Alert wording={errors.hourlyBudget.message} type={'danger'}></Alert>
                  )}
        </div>
        <div className='formRow'>
              <label className='formitem label'>Area:</label>
                <input 
                readOnly={isReadOnly}
                className='formitem input'
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

        <div>
        {!isReadOnly && <input className='button-primary' type="submit"  />}
        {isReadOnly && <BasicModal openButtonType={'button-primary'} openButtonWording={"I'm Interested"}></BasicModal>}
        </div>
        
    </form>
  )
}

export default TaskDataForm
