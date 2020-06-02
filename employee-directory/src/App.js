import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from "./components/Header"
import EmployeeTable from "./components/Table"
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
        <EmployeeTable/>
        {/* <Table responsive>
      <thead>
        <tr>
        <th><button>Image</button></th>
       <th><button>Name</button></th>
       <th><button>Phone</button></th>
       <th><button>Email</button></th>
        <th><button>DOB</button></th>

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
</Table> */}
      </div>
    );
  }
}


export default App;
