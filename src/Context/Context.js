import {createContext,useState} from 'react'
export const Datacontext = createContext(null) 

const Context = (props) => {
    const [data, setData] = useState("Dummy")
  return (
    <Datacontext.Provider value = {[data,setData]}>
        {props.children}
    </Datacontext.Provider>
  )
}

export default Context;