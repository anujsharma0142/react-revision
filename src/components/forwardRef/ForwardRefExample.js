import React, {useRef} from 'react'
import ChildFileforForwardRef from './ChildFileforForwardRef'

const ForwardRefExample = () => {

    let inputRef = useRef(null)

    function inputHandle(){
        inputRef.current.value = "Anuj"

    }



  return (
    <>
        <div>ForwardRefExample</div><br/>
        <ChildFileforForwardRef ref={inputRef}/>
        <button onClick={inputHandle}>Update Input Box</button>
    </>
    
  )
}

export default ForwardRefExample