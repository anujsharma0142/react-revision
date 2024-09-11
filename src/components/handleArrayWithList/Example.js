import React from 'react'


export const Example = () => {

    //array list creation
    const students = [
        'Anuj','Vishal', 'Rohan', 'Rahul'
    ]

    // //map looping
    // students.map((item)=>{
    //     console.log(item);
        
    // })

    // for(let i=0; i<students.length; i++){
    //     console.log(students[i]);
        
    // }
  return (
    <>
    <div>Handle array with List</div>
    {
        students.map((data)=>
            <h2>{data}</h2>
        )
    }
    </>
    
    
  )
}
