import React,{useEffect, useState} from 'react'


const SpecificHooks = () => {
    const[data,setData] = useState(10)
    const[count,setCount] = useState(100)

    useEffect(()=>{
        console.log("use effect called");
        
    },[data])

  return (
    <>
    <div>Data {data}</div>
    <div>Count {count}</div>
    <button onClick={()=>setData(data+1)}>data update</button>
    <button onClick={()=>setCount(count+1)}>count update</button>
    </>
    
  )
}

export default SpecificHooks