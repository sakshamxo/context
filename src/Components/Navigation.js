import React,{useContext} from 'react'
import { NavLink } from 'react-router-dom'
import { Datacontext } from '../Context/Context'

const Navigation = () => {
    const d = useContext(Datacontext)
    console.log(d)
  return (
   
          <nav>
        <NavLink className={({isActive})=>(isActive ? "red" : "")} to="/">Home</NavLink>
        <NavLink className={({isActive})=>(isActive ? "red" : "")} to="/signup">Signup</NavLink>
        <NavLink className={({isActive})=>(isActive ? "red" : "")} to="/signin">Signin</NavLink>
      </nav>
    
  )
}

export default Navigation