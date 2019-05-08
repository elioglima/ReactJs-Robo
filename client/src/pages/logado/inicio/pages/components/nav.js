import React, {Component} from "react";
import { connect } from "react-redux";
import { FormControl, Form, Button } from 'react-bootstrap';
import * as Actions from '../../src/actions'
import base64 from 'base-64';

class Objeto extends Component {
  state = {
    pesquisa:''
  }

  render() {    
    return (  
      <div>     
        <nav className="navbar navbar-expand-md bg-dark navbar-dark ">
          <a className="navbar-brand pb-2" href="scripts:preventDefault()">{this.props.dados.titulo}</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse" id="navbarNavDropdown">            
            <ul className="navbar-nav">            
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="scripts:preventDefault()" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onClick={e => {e.preventDefault()}}>Módulos</a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><a className="dropdown-item" href="scripts:preventDefault()" onClick={e=>{e.preventDefault();}}>Negociações</a></li>
                  <div className="dropdown-divider"></div>
                  <li className="dropdown-submenu">
                    <a className="dropdown-item dropdown-toggle" href="scripts:preventDefault()" onClick={e=>{e.preventDefault();}}>Cadastro</a>
                    <ul className="dropdown-menu">
                      <li className="dropdown-submenu">
                        <a className="dropdown-item dropdown-toggle" href="scripts:preventDefault()" onClick={e=>{e.preventDefault();}}>Usuários</a>
                        <ul className="dropdown-menu">
                          <li><a className="dropdown-item" href="scripts:preventDefault()" onClick={e => this.props.dispCadUsuario(e) }>Cadastro do Usuário</a></li>
                          <li><a className="dropdown-item" href="scripts:preventDefault()" onClick={e=>this.props.dispCadGrupoAcessoUsuarios(e)}>Grupo de Acesso</a></li>
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
            <Button variant="info" size="sm" onClick={e=>this.props.disPesquisaGeral(e, base64.decode(localStorage.getItem('inp_pesquisa')))} value={base64.decode(this.state.pesquisa)} onChange={e => localStorage.setItem('inp_pesquisa', base64.encode(e.target.value))}>Pesquisar</Button>
          </Form>
          &nbsp;&nbsp;<Button className="" variant="danger" size="sm" onClick={this.props.dispSair}>Sair</Button>
        </nav>
      
      </div>  
    )
  }
}

export default connect(null, Actions)(Objeto)
