import React,{useContext} from 'react'
import { Datacontext } from '../Context/Context'
const Dets = () => {
  const [Data,setData] = useContext(Datacontext)
  return (
    <div>
      <h3>No Data : {Data}</h3>
    </div>
  )
}

export default Dets