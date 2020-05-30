import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from "./components/Header"
import EmployeeTable from "./components/EmployeeTable"
import SearchBar from "./components/SearchBar"
import Employee from "./employees.json"
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
class App extends Component{

  state = {Employee}
  
  render() {
    console.log(this.state.Employee)
    return (
      <div className="App">
        <Header />
        <SearchBar />
        <Table responsive>
      <thead>
        <tr>
        <Button variant="outline-info"> <th>Image</th></Button>
          <Button variant="outline-info"><th>Name</th></Button>
          <Button variant="outline-info"> <th>Phone</th></Button>
          <Button variant="outline-info"><th>Email</th></Button>
          <Button variant="outline-info"><th>DOB</th></Button>

        </tr>
      </thead>
      <tbody>
        {this.state.Employee.map(item => (
          <EmployeeTable 
            key={item.id}
            image={item.image}
            name={item.name}
            phone={item.phone}
            email={item.email}
            dob={item.dob}
          />
          ))}
</tbody>
</Table>
      </div>
    );
  }
}


export default App;
