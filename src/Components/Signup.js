import React from 'react'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
const Signup = () => {
  const navigate = useNavigate();
  const [Username, setUsername] = useState("")
  const [email, setemail] = useState("");
  const [Password, setPassword] = useState("")

  const SignupSubmit = (e)=>{
    e.preventDefault();
    const user = {Username,email,Password}
    console.log(user)
    navigate("/signin")
  }
  return (
    <form>
      <input className='form-control mb-3' onChange={(e)=>setUsername(e.target.value)} value={Username} placeholder='@jhonnyBhaiya_' type="text" />
      <input className='form-control mb-3' onChange={(e)=>setemail(e.target.value)} value={email} placeholder='jhonnybhaiya@gmail.com' type="email" />
      <input className='form-control mb-3' onChange={(e)=>setPassword(e.target.value)} value={Password} placeholder='*******' type="password" />
      <button onClick={SignupSubmit} className='w-25 btn btn-primary'>Signup</button>
    </form>
  )
}

export default Signup