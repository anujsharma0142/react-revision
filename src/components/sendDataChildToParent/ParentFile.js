import React from 'react'
import ChildFile from './ChildFile'

const ParentFile = () => {
    let data = "Anuj Sharma"
  return (
    <>
    <div>Parent Component</div>
    <ChildFile name ={data}/>
    </>
  )
}

export default ParentFile