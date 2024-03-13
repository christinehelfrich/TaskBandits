import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from "axios";
import { baseURL } from '../../utils/constant';
import Alert from '../atoms/Alert';
import Spinner from '../atoms/Spinner';
import { Link, useNavigate } from "react-router-dom";
import ProfileDataForm from '../molecules/ProfileDataForm';

const ProfileForm = ({isCreateMode, profileData}) => {

  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const [isLoading, setisLoading] = useState(false)
  const navigate = useNavigate();

    // const {
    //     register,
    //     handleSubmit,
    //     reset,
    //     formState: { errors },
    //   } = useForm({
    //     defaultValues: {
    //         isWorkerProfileType: isCreateMode ? true : profileData?.isWorkerProfileType,
    //         isEmployerProfileType: isCreateMode ? false : profileData?.isEmployerProfileType,
    //         name: isCreateMode ? '' : profileData.name,
    //         email: isCreateMode ? '' : profileData.email,
    //         bio: isCreateMode ? '' : profileData.bio,
    //         photo: isCreateMode ? '' : profileData.photo,
    //         skills: isCreateMode ? '' : profileData.skills,
    //         hourlyWage: isCreateMode ? '' : profileData.hourlyWage,
    //         area: isCreateMode ? '' : profileData.area,
    //         isUnder21: isCreateMode ? false : profileData.isUnder21,
    //         experience: isCreateMode ? '' : profileData.experience
    //     }
    //   });
    const defaultValues = {
              isWorkerProfileType: isCreateMode ? true : profileData?.isWorkerProfileType,
              isEmployerProfileType: isCreateMode ? false : profileData?.isEmployerProfileType,
              name: isCreateMode ? '' : profileData.name,
              email: isCreateMode ? '' : profileData.email,
              bio: isCreateMode ? '' : profileData.bio,
              photo: isCreateMode ? '' : profileData.photo,
              skills: isCreateMode ? '' : profileData.skills,
              hourlyWage: isCreateMode ? '' : profileData.hourlyWage,
              area: isCreateMode ? '' : profileData.area,
              isUnder21: isCreateMode ? false : profileData.isUnder21,
              experience: isCreateMode ? '' : profileData.experience
          }

    // const handleChange = (event) => {
    // }

    // const onClear = () => {
    //   //reset();
    // }

    const onDelete = () => {
      setisLoading(true)
      axios.delete(`${baseURL}/profile/${profileData._id}`)
      .then((res) => {
        setisLoading(false)
        resetFormAndPushSuccessMessage()
        navigate("/", {state: {showDeleteSuccess: true}})
        
      })


    }
   
    const onSubmit = (event) => {
        setisLoading(true)
        if(isCreateMode) {
          axios.post(`${baseURL}/profile`, {profile: event}).then((res) => {
            setisLoading(false)
            resetFormAndPushSuccessMessage()
          })
        } else {
          axios.put(`${baseURL}/profile/${profileData._id}`, {profile: event}).then((res) => {
            setisLoading(false)
            resetFormAndPushSuccessMessage()
          })
        }
    }

    const resetFormAndPushSuccessMessage = () => {
      //reset();
      setShowSuccessMessage(true)
      setTimeout(() => {
        setShowSuccessMessage(false)
      }, 2000)
    }
  return (
    <div>
      {showSuccessMessage && <Alert wording={`Success! Profile successfully ${isCreateMode ? 'Created' : 'Updated'}`} type={'success'}></Alert>}
      {isLoading && <Spinner></Spinner>}
      <ProfileDataForm defaultFormValues={defaultValues} onSubmit={onSubmit} isCreateMode={isCreateMode} onDelete={onDelete}></ProfileDataForm>
      </div>
    // <form className='createProfileForm' onSubmit={handleSubmit(onSubmit)}>



    //   <div className='formRow'>
    //           <label className='formitem label name'>Name:</label>
    //             <input 
    //             className='formitem input name'
    //             type="text" 
    //             name="name" 
    //             {...register("name", {
    //               required: "Name is Required"
    //             })}
    //           />

    //           {errors.name && (
    //               <Alert wording={errors.name.message} type={'danger'}></Alert>
    //               )}
    //   </div>


    //   <div className='formRow'>
    //           <label className='formitem label email'>Email:</label>
    //           <input 
    //             className='formitem input email'
    //             type="email" 
    //             name="email" 
    //             {...register("email", {
    //               required: "Email is Required"
    //             })}
    //           />
              
    //           {errors.email && (
    //               <Alert wording={errors.email.message} type={'danger'}></Alert>
    //               )}
    //   </div>


    //   <div className='formRow'>
    //           <label className='formitem label age'>Bio:</label>
    //             <textarea 
    //               className='formitem input age'
    //               type="text" 
    //               name="bio" 
    //               {...register("bio")}
    //             />
                
    //             {errors.bio && (
    //               <Alert wording={errors.bio.message} type={'danger'}></Alert>
    //               )}
    //   </div>

    //   <div className='formRow'>
    //             <label className='formitem label photo'>Photo:</label>
    //             <input 
    //                     className='formitem input photo'
    //               type="text" 
    //               name="photo" 
    //               {...register("photo")}
    //             />
                
    //             {errors.photo && (
    //                <Alert wording={errors.photo.message} type={'danger'}></Alert>
    //               )}
    //    </div>

    //    <div className='formRow'>
    //             <label className='formitem label skills'>Skills:</label>
    //             <textarea 
    //                     className='formitem input skills'
    //               type="text" 
    //               name="skills" 
    //               {...register("skills")}
    //             />
                
    //             {errors.skills && (
    //               <Alert wording={errors.skills.message} type={'danger'}></Alert>
    //               )}
    //     </div>

    //     <div className='formRow'>
    //             <label className='formitem label hourlyWage'>Hourly wage:</label>
    //             <input 
    //                     className='formitem input hourlyWage'
    //               type="text" 
    //               name="hourlyWage" 
    //               {...register("hourlyWage")}
    //             />
                
    //             {errors.hourlyWage && (
    //               <Alert wording={errors.hourlyWage.message} type={'danger'}></Alert>
    //               )}
    //     </div>

    //     <div className='formRow'>
    //             <label className='formitem label area'>Area:</label>
    //             <input 
    //                     className='formitem input area'
    //               type="text" 
    //               name="area" 
    //               {...register("area", {
    //                 required: "Area is Required"
    //             })}
    //             />
                
    //             {errors.area && (
    //                <Alert wording={errors.area.message} type={'danger'}></Alert>
    //               )}
    //     </div>

    //     <div className='formRow'>
    //             <label className='formitem label isUnder21'>Is under the age of 21 years old:</label>
    //             <input 
    //                     className='formitem input isUnder21'
    //               type="checkbox" 
    //               name="isUnder21" 
    //               {...register("isUnder21")}
    //             />
                
    //             {errors.isUnder21 && (
    //                <Alert wording={errors.isUnder21.message} type={'danger'}></Alert>
    //               )}
    //     </div>

    //     <div className='formRow'>
    //             <label className='formitem label experience'>Experience:</label>
    //             <textarea 
    //                     className='formitem input experience'
    //               type="text" 
    //               name="experience" 
    //               {...register("experience")}
    //             />
                
    //             {errors.experience && (
    //               <Alert wording={errors.experience.message} type={'danger'}></Alert>
    //               )}
    //     </div>

    //     <div>
    //     <input className='button-primary' type="submit" value={isCreateMode ? 'Submit' : 'Update Profile'} />
    //     <button className='button-danger' onClick={isCreateMode ? onClear : onDelete}>{isCreateMode ? 'Clear' : 'Delete Profile'}</button>
    //     <button className='button-secondary'><Link className='navLink' to={'/'}>Back</Link></button>
    //     </div>
        
    // </form>
  )
}

export default ProfileForm
