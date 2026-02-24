import React from 'react'
import { useParams } from 'react-router-dom'

const Users = () => {

  const{userId} = useParams();


  return (
    <div>
      <p>
        Hellow my name is this as per my userId {userId}
      </p>
    </div>
  )
}

export default Users
