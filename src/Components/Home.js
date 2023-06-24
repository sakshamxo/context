import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div className='d-flex flex-column'>
      <Link to = "/user/john">jhonny</Link>
      <Link to = "/user/hohh">hoonn</Link>
      <Link to = "/user/bonny">bonny</Link>
      <Link to = "/user/luffy">luffy</Link>
      <Link to = "/user/ace">ace</Link>
      <Link to = "/user/sas">sas</Link>
    </div>
  )
}

export default Home