import React , {useState,useContext} from 'react'
import UserContext  from '../context/UserContext'

function login() {

    const [username ,setUsername] = useState('')
    const [password ,setPassword] = useState('')


const {setUser}=useContext(UserContext)


    const handleSubmit=(e)=>{
        e.preventDefault()
        setUser({username,password})


    }



  return (
    <div classname="items-center">
      <h2 >Login</h2>
      <input className='bg-slate-300 mx-0.5 p-0.5 rounded-md drop-shadow-2xl'     type='text' placeholder='username' value ={username} onChange={(e)=>setUsername(e.target.value)}/>
      <input  className='bg-slate-300 mx-0.5 p-0.5 rounded-md drop-shadow-2xl'     type='text' placeholder='password'  value ={password} onChange={(e)=>setPassword(e.target.value)}/>
      <button  onClick={handleSubmit} className='shadow-md bg-slate-400 outline-2 rounded-md drop-shadow-2xl'>Submit</button>
    </div>
  )
}

export default login
