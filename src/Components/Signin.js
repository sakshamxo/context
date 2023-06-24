import React from 'react'
import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Signin = () => {
  const navigate = useNavigate();
  const Signinsubmit = (e)=>{
    e.preventDefault();
navigate('/signin/profile')

  }
  
  return (
    <>
    <form>
      <input className='form-control mb-3' placeholder='@jhonnybhaiya_' type="text" />
      <input className='form-control mb-3' placeholder='*******' type="password" />
      <button onClick={Signinsubmit} className='w-25 btn btn-primary me-1'>Signin</button>
      <button type='button' className='w-25 btn btn-primary' onClick={()=> navigate('/signin/user')}>go to User</button>
    </form>
    <hr />
    <Outlet/>
    </>
  )
}

export default Signin