import React, {Component} from "react";
import { connect } from "react-redux";
import { Navbar, Nav, FormControl, Form, Button } from 'react-bootstrap';
import * as Actions from "../../src/actions";

class Objeto extends Component {
  render() {    
    return (  
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">{this.props.dados.titulo}</Navbar.Brand>
        <Nav className="mr-auto" size="sm" defaultActiveKey="/home">
          <Nav.Link href="/home">Cadastros</Nav.Link>
          <Nav.Link href="#features">Relatórios</Nav.Link>
          <Nav.Link href="#pricing" >Ajuda</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Pesquisar" className="mr-sm-2" size="sm" />
          <Button variant="secondary" size="sm">Pesquisar</Button>
        </Form>
        &nbsp;&nbsp;<Button variant="danger" size="sm" onClick={this.props.SairSistema}>Sair</Button>

      </Navbar>
      <br />
  </div>
)
}
}

export default connect(null,Actions)(Objeto)
