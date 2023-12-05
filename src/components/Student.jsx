import React from 'react'

function Student(props) {

    const {name, dob, city} = props;

  return (
    <div style={{border: "1px solid red", width: "400px", margin:"10px", padding: "10px"}}>
      <h3 style={{color:"orange", fontSize:"36px"}}>Name: {name}</h3>
      <p style={{color:"green", fontSize:"28px"}}>Dob: {dob}</p>
      <p style={{color:"blue", fontSize:"28px"}}>City: {city}</p>
    </div>
  )
}

export default Student
