import React from 'react'

const User = (props) => {
  return (
    <div>
        <span>
        {props.item.name}
        {props.item.email}
        {props.item.phone}
        </span>
        </div>
  )
}

export default User