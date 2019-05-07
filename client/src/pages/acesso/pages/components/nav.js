import React, { Component } from 'react';
import { connect } from "react-redux";
import { Dropdown, NavDropdown, Navbar, Nav, FormControl, Form, Button, Drop } from 'react-bootstrap';

class Objeto extends Component {
  render() {    
    return (
      <div>
        <nav class="navbar navbar-expand-md bg-dark navbar-dark ">
        <a class="navbar-brand pb-2" href="#">{this.props.dados.titulo}</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
          
            <div class="collapse navbar-collapse" id="navbarNavDropdown">          
            
            </div>

            <Form inline>    
              <FormControl type="text" placeholder="Pesquisar" className="mr-sm-2" size="sm" />
              <Button variant="secondary" size="sm">Pesquisar</Button>
            </Form>
          
        </nav>
      </div>
    )
  }
}

export default connect(null,null)(Objeto)
