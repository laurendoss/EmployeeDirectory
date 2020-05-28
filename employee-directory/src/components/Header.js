import React from 'react'; 
import "../styles/Header.css"; 
import Jumbotron from 'react-bootstrap/Jumbotron'

function Header(){
    return(
        <div className="container">
        <Jumbotron className="jumbotron">
          <h1>Employee Directory</h1>
          {/* <p>
            <button className="btn btn-primary btn-lg">Learn more</button>
          </p> */}
        </Jumbotron>
        </div>
       
    )
}

export default Header; 