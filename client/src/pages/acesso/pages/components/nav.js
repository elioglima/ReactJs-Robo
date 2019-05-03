import React, { Component } from 'react';
import { connect } from "react-redux";
import { Navbar } from 'react-bootstrap';

class Objeto extends Component {
  render() {    
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">{this.props.dados.titulo}</Navbar.Brand>
        </Navbar>
        <br />
      </div>
    )
  }
}

export default connect(null,null)(Objeto)
