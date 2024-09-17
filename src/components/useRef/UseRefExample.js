import React, { useRef } from 'react'

const UseRefExample = () => {
    let inputRef = useRef(null)

    function handleInput(){
        console.log("handle input");
        inputRef.current.value = "1000"
        inputRef.current.style.display="yellow"
        inputRef.current.focus();
        
    }

    
  return (
    <>
        <div>UseRefExample</div>
        <input type='text' ref={inputRef}></input>
        <button onClick={handleInput}>Handle Input</button>

    </>
    
  )
}

export default UseRefExample