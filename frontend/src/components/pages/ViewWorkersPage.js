import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { baseURL } from '../../utils/constant'
import ProfileList from '../organisms/ProfileList'

const ViewWorkersPage = () => {
  const [profiles, setProfiles] = useState([])

  useEffect(() => {
      axios.get(`${baseURL}/profiles`)
      .then((res) => {
        let workers = res.data.filter((p) => {
          console.log(typeof p._id)
          return p.isWorkerProfileType
        })
          setProfiles(workers)
      })
  }, [])
  return (
    <div>
      <ProfileList profiles={profiles}></ProfileList>
    </div>
  )
}

export default ViewWorkersPage
