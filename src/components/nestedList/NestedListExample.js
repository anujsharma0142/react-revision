import React from 'react'
import { Table } from 'react-bootstrap'

const NestedListExample = () => {

  const users = [
    {
      name: "Anuj Sharma", email: "anujsharma@gmail.com", phone: "9997025107", address: [
        { city: "Mordabad", pincode: "244001", state: "UP" },
        { city: "Mordabad", pincode: "244001", state: "UP" },
        { city: "Mordabad", pincode: "244001", state: "UP" }
      ]
    },
    {
      name: "Rahul Sharma", email: "anujsharma@gmail.com", phone: "9997025107", address: [
        { city: "Mordabad", pincode: "244001", state: "UP" },
        { city: "Mordabad", pincode: "244001", state: "UP" },
        { city: "Mordabad", pincode: "244001", state: "UP" }
      ]
    },
    {
      name: "Vishal Sharma", email: "anujsharma@gmail.com", phone: "9997025107", address: [
        { city: "Mordabad", pincode: "244001", state: "UP" },
        { city: "Mordabad", pincode: "244001", state: "UP" },
        { city: "Mordabad", pincode: "244001", state: "UP" }
      ]
    }
  ]



  return (
    <>
      <h1>NestedListExample Table</h1>
      <Table  hover>
        <tbody>
          <tr>
            <td>Sr.No</td>
            <td>Name</td>
            <td>Email</td>
            <td>Phone</td>
            <td>Address</td>
          </tr>
          </tbody>

          {
            users.map((data,i) =>
              <tr key={i}>
                <td>{i+1}</td>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.phone}</td>
                <td>
                <Table   hover>
                <tbody>
                  {
                  data.address.map((item)=>
                  <tr>
                    
                    <td>{item.state}</td>
                    <td>{item.city}</td>
                    <td>{item.pincode}</td>
                  </tr>
                  )
                  }
                  </tbody>
                  </Table>
                  </td>
              </tr>
            )
          }
        
      </Table>
    </>

  )
}

export default NestedListExample