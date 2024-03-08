import React from 'react'

const Alert = ({type, wording}) => {
  return (
    <div role="alert" className={'alert-' + type}>
      {wording}
    </div>
  )
}

export default Alert
