import React from 'react'
import User from './User'

const ReUseComponent = () => {

    const users = [
        {
            name: "Anuj",
            email: "anujsharma@gmail.com",
            phone: "11111111"
        },
        {
            name: "Anil",
            email: "anujsharma@gmail.com",
            phone: "11111111"
        },
        {
            name: "Bruce",
            email: "anujsharma@gmail.com",
            phone: "11111111"
        }
    ]
    return (
        <>
        <div>ReUseComponent</div>
        
        {
            users.map((data,i)=>
                // <h1>{data.name}</h1>
            <User item={data}/>

            )
        }
        </>
        
        
    )
}

export default ReUseComponent