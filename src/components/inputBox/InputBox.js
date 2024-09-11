import React from 'react'
import { useState } from 'react'


const InputBox = () => {

    const [data, setData] = useState(null)
    const [print, setPrint] = useState(false)

    function getData(val) {
        console.log(val.target.value);
        setData(val.target.value);
        setPrint(false);
    }
    return (
        <>
            <div>{print ? <h1>{data}</h1> : null}</div>
            <input type="text" onChange={getData}></input>
            <button onClick={() => setPrint(true)}>Print Data</button>
        </>
    )
}

export default InputBox