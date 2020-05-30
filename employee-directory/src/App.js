import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from "./components/Header"
import EmployeeTable from "./components/EmployeeTable"
import SearchBar from "./components/SearchBar"
import Employee from "./employees.json"
import Table from 'react-bootstrap/Table'

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
        <button> <th>Image</th></button>
        <button> <th>Name</th></button>
        <button> <th>Phone</th></button>
        <button> <th>Email</th></button>
        <button> <th>DOB</th></button>

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
