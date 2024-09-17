import React, {forwardRef} from 'react'

const ChildFileforForwardRef = (props, ref) => {


  return (
    <>
        <div>ChildFileforForwardRef</div>
        <input type='text' ref={ref}></input>
    </>
    
  )
}

export default forwardRef(ChildFileforForwardRef)