import React, {useState } from 'react'

const CreateProfileForm = () => {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
    }
  
    const handleSubmit = (event) => {
        console.log({event})
        console.log({inputs})
      event.preventDefault();
      alert(inputs);
    }
  return (

    <form className='createProfileForm' onSubmit={handleSubmit}>


      <label className='formitem label name'>Enter your name:
      <input 
        className='formitem input name'
        type="text" 
        name="name" 
        value={inputs.name || ""} 
        onChange={handleChange}
      />
      </label>

      <label className='formitem label age'>Enter a bio:
        <textarea 
          className='formitem input age'
          type="text" 
          name="bio" 
          value={inputs.bio || ""} 
          onChange={handleChange}
        />
        </label>

        <label className='formitem label skills'>Enter a list of skills:
        <textarea 
                className='formitem input skills'
          type="text" 
          name="skills" 
          value={inputs.skills || ""} 
          onChange={handleChange}
        />
        </label>

        <label className='formitem label hourlyWage'>Enter an hourly wage:
        <input 
                className='formitem input hourlyWage'
          type="text" 
          name="hourlyWage" 
          value={inputs.hourlyWage || ""} 
          onChange={handleChange}
        />
        </label>

        <label className='formitem label area'>Enter a location area:
        <input 
                className='formitem input area'
          type="text" 
          name="area" 
          value={inputs.area || ""} 
          onChange={handleChange}
        />
        </label>

        <label className='formitem label isUnder21'>Check if you are under 21 years old:
        <input 
                className='formitem input isUnder21'
          type="checkbox" 
          name="isUnder21" 
          value={inputs.isUnder21 || ""} 
          onChange={handleChange}
        />
        </label>

        <label className='formitem label experience'>Enter your experience:
        <textarea 
                className='formitem input experience'
          type="text" 
          name="experience" 
          value={inputs.experience || ""} 
          onChange={handleChange}
        />
        </label>


        <input className='button-primary' type="submit" />
    </form>
  )
}

export default CreateProfileForm
