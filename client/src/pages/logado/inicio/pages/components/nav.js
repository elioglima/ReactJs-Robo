import React, {Component} from "react";
import { connect } from "react-redux";
import { Dropdown, NavDropdown, Navbar, Nav, FormControl, Form, Button, Drop } from 'react-bootstrap';
import * as Actions from '../../src/actions'
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
          
          <ul class="navbar-nav">
          
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Módulos</a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><a class="dropdown-item" href="#">Negociações</a></li>
                <li class="dropdown-submenu"><a class="dropdown-item dropdown-toggle" href="http://google.com">Cadastro</a>
                  <ul class="dropdown-menu">
                    <li class="dropdown-submenu"><a class="dropdown-item dropdown-toggle" href="#">Usuários</a>
                      <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Cadastro do Usuário</a></li>
                        <li><a class="dropdown-item" href="#">Grupo de Acesso</a></li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>                    
          </ul>
        </div>

        <Form inline>    
          <FormControl type="text" placeholder="Pesquisar" className="mr-sm-2" size="sm" />
          <Button variant="secondary" size="sm">Pesquisar</Button>
        </Form>
        &nbsp;&nbsp;<Button className="" variant="danger" size="sm" onClick={this.props.SairSistema}>Sair</Button>
      </nav>

      
  </div>
  
)
}
}


export default connect(null, Actions)(Objeto)
