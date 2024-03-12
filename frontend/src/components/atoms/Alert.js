import React from 'react'

const Alert = ({type, wording}) => {
  return (
    <div role="alert" className={'alert-' + type}>
      <p className='smalltext'>{wording}</p>
    </div>
  )
}

export default Alert
