// import React, { Component } from 'react'
// import axios from "axios"
// import Show from './Show';

//  class App extends Component {
//   // constructor(props){
//   //   super(props) ;
//   //   this.state = {
//   //     images : null,
//   //     counter: 0,
//   //     show : false
//   //   }
//   //   console.log("[App.js]Constructor")

//   // }

//   async getImages()  {
//     try{
//       const {data} = await axios.get('https://picsum.photos/v2/list')
//       console.log(data)
//       this.setState(
//         {images:data}
//       )
//     }
//     catch(err){
//         console.log(err)
//     }

//   }

//   // increment = ()=>{
//   //   this.setState({counter : this.state.counter + 1})
//   // }

//   // decrement = ()=>{
//   //   this.setState({counter : this.state.counter - 1})
//   // }

//   // componentDidMount() {

//   //   this.getImages()
//   //   console.log("[App.js] ComponetDidMount")
//   // }

//   // componentDidUpdate (prevProps,prevState){
//   //   console.log("[App.js]componentdidupdate")
//   //   console.log(prevProps,prevState)
//   // }
//   render() {
//     console.log("[App.js]render")

//     return (
//       <div> <h1>this is app component</h1>

//         {/* <button onClick={this.increment}>+</button> <h1>{this.state.counter}</h1> <button onClick={this.decrement}>-</button>
//         <hr />
//         <button onClick={()=>this.setState.show}>show/hide</button>
//         {this.state.show ? <Show /> : "nothing...." } */}
//       </div>
//     )
//   }
// }

// export default App

// import React from 'react'
// import axios from 'axios'
// import { useState } from 'react'
// import { useEffect } from 'react'

// const App = () => {
//   const [Images, setImages] = useState(null)
//   const [Toggle, setToggle] = useState(false)

//   const getImages = async() => {
//     const {data} = await axios.get('https://picsum.photos/v2/list')
//     setImages(data)
//   };
//   useEffect(() => {
//     if(Images === null){
//       // console.log("component Created")
//       console.log('images called')
//       getImages();
//     }
//     // console.log(Images)
//     // console.log("inside UseEffect")
//     return()=>{
//       console.log('deletetion....')
//     }
//   },[Toggle]);
//   // console.log(Images)

//     return (
//       <div>
//         <button onClick={()=>setToggle(!Toggle)}>Toggle</button>
//         {Toggle?"no hello" : "hello there"}
//         <hr />
//         <button onClick={getImages}>Get Images</button>
//         <br />
//         {Images? JSON.stringify(Images):<h1>loading...</h1>}
//       </div>
//     )
//   }

//   export default App


// import ReactDOM  from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css";
// import axios from 'axios'
// import { useState } from 'react'
// import { useEffect } from 'react'

// const App = () => {
//   const [Images, setImages] = useState(null);
//   const [Toggle, setToggle] = useState(false)
//   const getImages = async () => {
//     const {data} = await axios.get("https://picsum.photos/v2/list")
//     setImages(data);
//   }

//   useEffect(() => {
//     if(Images === null){
//       console.log("GEt Images Called")
//       getImages();
//     }

//     return () => {
//       console.log("delete")
//     }
//   }, [Images])

//     return (
//     <div>
//       <h1>UseEffect</h1>
//       <button onClick={()=>setToggle(!Toggle)}>Toggle</button>
//       {Toggle ? "HIii" : "No Hiii"}
// <hr />
//       <button onClick={getImages}>Get images</button>
//       {Images? JSON.stringify(Images) : <h1>Loading.....</h1>}
//     </div>
//     )

// }
import React,{useState, createContext,useContext} from "react";
import Home from "./Components/Home";
import { Route, Routes, NavLink } from "react-router-dom";
import Signin from "./Components/Signin";
import Signup from "./Components/Signup";
import "./Stylesheets/nav.css";
import Profile from "./Components/Profile";
import User from "./Components/User";
import Timeline from "./Components/Timeline";
import Navigation from "./Components/Navigation";
import { Datacontext } from "./Context/Context";

// export const DataContext = createContext(null);

const App = () => {
const d = useContext(Datacontext)
  console.log(d)
  
  const [Data, setData] = useState("Normal Data")
  return (
    <div className="container w-50 mt-5">
    <Navigation/>
      <hr />
      <Datacontext.Provider value = {[Data, setData]}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:name" element={<Timeline />} />
        <Route path="/signin" element={<Signin />}>
          <Route path="/signin/profile" element={<Profile/>}/>
          <Route path="/signin/user" element={<User/>}/>
        </Route>
        <Route path="/signup" element={<Signup />} />
      </Routes>
   </Datacontext.Provider>
      {/* <Home/>
      <Signin/>
      <Signup/> */}
    </div>
  );
};

export default App;
