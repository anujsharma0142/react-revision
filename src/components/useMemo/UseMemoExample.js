import React, { useMemo, useState } from 'react'

const UseMemoExample = () => {
    const [count, setCount] = useState(0)
    const [item, setItem] = useState(5)

    const multiCountMemo = useMemo(function multiCount(){
        console.log("multicount")
        return count*5
        
    },[count])
    
  return (
    <>
        <div>UseMemoExample</div>
        <h1>Count :{count}</h1>
        <h1>Item : {item}</h1>
        <h2>{multiCountMemo}</h2>
        <button onClick={()=>setCount(count+1)}>update Count</button>
        <button onClick={()=>setItem(item*5)}>update Item</button>

    </>
    

  )
}

export default UseMemoExample