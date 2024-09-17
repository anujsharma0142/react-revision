import React from 'react'

const UserOne = (props) => {


  return (
    <>
    <div>Name :  {props.data.name}</div>
    <div>Age :  {props.data.age}</div>
    </>
    
  )
}

export default UserOne