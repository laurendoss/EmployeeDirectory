import React from 'react';
import "../styles/EmployeeTable.css";


function EmployeeTable(props) {
  return (

  
        <tr>
          <td><img alt="employee badge"src={props.image} style={{width:"150px",height:"auto"}}/></td>
          <td>{props.name}</td>
          <td>{props.phone}</td>
          <td>{props.email}</td>
          <td>{props.dob}</td>

        </tr>
        
    
  )
}

export default EmployeeTable; 