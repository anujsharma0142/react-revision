import React from 'react'
import {Table } from 'react-bootstrap'


export const Example = () => {

    // //array list creation
    // const students = [
    //     'Anuj','Vishal', 'Rohan', 'Rahul'
    // ]

    // //map looping
    // students.map((item)=>{
    //     console.log(item);

    // })

    // for(let i=0; i<students.length; i++){
    //     console.log(students[i]);

    // }

    //creating array objects
    const students = [{
        name: 'Anuj',
        email: 'anuj@gmail.com',
        phone: 9997025107,
    },
    {
        name: 'Vishal',
        email: 'vishal@gmail.com',
        phone: 9997025107,
    }
    ]
    return (
        <>
            <h1>Student List with bootstrap table</h1>
            <Table border={"1"} striped bordered hover>
                <tbody>
                <tr>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Phone</td>
                </tr>
                {

                    students.map((data, i) =>

                        <tr key={i}>
                            <td>{data.name}</td>
                            <td>{data.email}</td>
                            <td>{data.phone}</td>
                        </tr>


                    )

                }
                </tbody>
            </Table>
        </>


    )
}
