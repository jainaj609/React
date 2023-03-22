import React from 'react'
import './CSS/FunctionComponent.css'
export default function FunctionComponent() {
  return (
    <div className='function_component'>
      <h1>This is created using functional Component</h1>
      <p>This is done using external CSS</p>
      <p style={{color:'blue'}}>This is done using inline CSS</p>
    </div>
  )
}

