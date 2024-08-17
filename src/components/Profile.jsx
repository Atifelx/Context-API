import React, {useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {

    const {user}=useContext(UserContext)

if(!user) return <div>please Login</div>

  return (
    <div className='font-extrabold text-lime-500 capitalize '>
      Welcome {user.username}
    </div>
  )
}

export default Profile
