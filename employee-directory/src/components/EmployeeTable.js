import React from 'react';
import "../styles/EmployeeTable.css";
// import Table from 'react-bootstrap/Table'
// import  '../employees.json'

// const sortName = {
//   up: {
//     class: 'sort-up', 
//     fn: (a,b) => a.name - b.name
//   }, 
//   down: {
//     class: 'sort-down',
//     fn: (a,b) => b.name - a.name
//   }, 
//   default: {
//     class: 'sort',
//     fn: (a,b) => a
//   }
// };
// class EmployeeTable extends React.Component{
//   state = {
//     currenSort: 'default'
//   }
//   onSortChange =() => {
//     const [currenSort] = this.state; 
//     let nextSort; 

//     if (currenSort === 'down') nextSort = 'up'; 
//     else if (currenSort === 'up') nextSort = 'default'; 
//     else if (currenSort === 'default') nextSort = 'down'; 
//     this.setState({
//       currenSort: nextSort
//     })
//   }; 
//   render(){
//     const {data} = this.props; 
//     const {currenSort} = this.state; 

//     return (
//       (
//         <Table>
//           <thead>
//             <tr>
//         <th><button>Image</button></th>
//        <th><button onCLick ={this.onSortChange}>Name</button></th>
//        <th><button onClick={this.onSortChange}>Phone</button></th>
//        <th><button onClick={this.onSortChange}>Email</button></th>
//         <th><button onClick={this.onSortChange}>DOB</button></th>
//         </tr>
//         </thead>
//         <tbody>
//           {[data].sort(sortName[currenSort].fn).map(p=> {

//             return (
//             <tr>
//             <td><img alt="employee badge"src={data.image} style={{width:"150px",height:"auto"}}/></td>
//             <td>{p.name}</td>
//             <td>{p.phone}</td>
//             <td>{p.email}</td>
//             <td>{p.dob}</td>
//             </tr>
//             )
//           })}
//         </tbody>
//         </Table>
//       )
//     )
//   }
// }



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