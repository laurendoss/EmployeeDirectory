import React from 'react'; 
import "../styles/SearchBar.css"; 
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'


function SearchBar(){
    return(
       <div>
    <InputGroup className="mb-3">
    <FormControl
      placeholder="Search for an Employee"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
    />
    <InputGroup.Append>
      <Button variant="outline-secondary">Search</Button>
    </InputGroup.Append>
  </InputGroup>
       </div>
        
      
       
    )
}

export default SearchBar; 