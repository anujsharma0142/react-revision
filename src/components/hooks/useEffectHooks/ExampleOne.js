import React, { useEffect, useState } from 'react'


const ExampleOne = () => {
    const [count,setCount] = useState(0);

    useEffect(()=>{
        console.log("work 1");
        
    })
    
  return (
    <>
        <div>useEffect Example {count}</div>
        <button onClick={()=>setCount(count+1)}> Update center</button>
    </>
    
  )
}

export default ExampleOne