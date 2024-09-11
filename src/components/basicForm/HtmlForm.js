import React, { useState } from 'react'

const Form = () => {
    const [name, setName] = useState("");
    const [tnc, setTnc] = useState(false);
    const [interest, setInterest] = useState("");

    function getFormData(e){
        console.log(name,tnc,interest);
        e.preventDefault()
        
    }
    return (
            <div>
                <h2>Handle form in React</h2>
                <form onSubmit={getFormData}>
                    <input type='text' placeholder='Enter Name' onChange={(e)=>setName(e.target.value)}/> <br/>
                    <select onChange={(e)=>setInterest(e.target.value)}>
                        <option>Select Options</option>
                        <option>Marvel</option>
                        <option>DC</option>
                    </select><br/>
                    <input type='checkbox' onChange={(e)=>setTnc(e.target.value)}/><span>Accept terms and conditions</span>
                    <button type='submit' >Submit</button>
                </form>
            </div>
        
    )
}

export default Form