import React, {Component} from "react";
import { connect } from "react-redux";
import { Navbar, Nav, FormControl, Form, Button } from 'react-bootstrap';
import * as Actions from '../../../../../routes/routes_actions'
import { compose } from "redux";

class Objeto extends Component {
  render() {    
    console.log(this.props)
    return (  
    <div>      
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#" onClick={this.props.logadoInicio}>{this.props.dados.titulo}</Navbar.Brand>
        <Nav className="mr-auto" size="sm" defaultActiveKey="/logado">
          <Nav.Link href="#" onClick={this.props.logadoCadastros}>Cadastros</Nav.Link>
          <Nav.Link href="#" onClick={this.props.logadoRelatorios}>Relatórios</Nav.Link>
          <Nav.Link href="#" onClick={this.props.logadoAjuda}>Ajuda</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Pesquisar" className="mr-sm-2" size="sm" />
          <Button variant="secondary" size="sm">Pesquisar</Button>
        </Form>
        &nbsp;&nbsp;<Button variant="danger" size="sm" onClick={this.props.logadoSair}>Sair</Button>

      </Navbar>
      <br />
  </div>
)
}
}



export default connect(null,compose(Actions))(Objeto)
