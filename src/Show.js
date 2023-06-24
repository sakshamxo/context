import React, { Component } from 'react'

export default class Show extends Component {
    componentWillUnmount(){
console.log("[Show.js] ComponentWillUnmount")
alert("do you wanna leave this page ?")
    }
  render() {
    return (
      <div>Show</div>
    )
  }
}
