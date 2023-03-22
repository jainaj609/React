import React, { Component } from 'react'
import './CSS/ClassComponent.css'
export default class ClassComponent extends Component {
  render() {
    return (
      <div className='class_component'>
        <h1>This is created using class Component</h1>
        <p>This is done using external CSS</p>
        <p style={{color:'blue'}}>This is done using inline CSS</p>
      </div>
    )
  }
}
