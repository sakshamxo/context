import React from 'react'
import { useParams, useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom';
import Dets from './Dets';

const Timeline = (props) => {
    const {name} = useParams();
    const location = useLocation()
  return (
    <div><h1>Welcome {name} 🫵👋🙌</h1>
    <Dets data={props.data}/>
    <Link to = "/">Home</Link>
    </div>
  )
}

export default Timeline