import React, { Component } from "react";
import { connect } from "react-redux";
import * as Actions from "../src/actions";
import { Button } from 'react-bootstrap';

import Pesquisa from "./pesquisa";
import Cadastro from "./cadastro";

class Objeto extends Component {

  onSubmit = e => { e.preventDefault(); }

  constructor() {
    super();   

  }

  componentWillMount() { 
    
    this.setState({
      pg_pesquisar: true,
      pg_novo: false
    })

    this.handleClick = this.handleClick.bind(this);   
  }

  componentWillUnmount() {    
  }

  handleClick(acao) {
    if (acao == 'novo') {
      this.setState({
        pg_pesquisar: false,
        pg_cadastro: true
      })
    
    } else if (acao == 'pesquisar') {
      this.setState({
        pg_pesquisar: true,
        pg_cadastro:false
      })
    }
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
              <li className="nav-item">
                <a className="nav-link" href="scripts:preventDefault()" onClick={e => this.props.dispInicio(e)}>Inicio</a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="scripts:preventDefault()">Usuário</a>
              </li>
            </ul>
          </div>

          &nbsp;&nbsp;<Button className="" variant="danger" size="sm" onClick={this.props.dispSair}>Sair</Button>
        </nav>

        <div className='col-md-12 bg-secondary text-white pa mb-3' >Cadastro de Usuários</div>

          <div className="col-md-3 float-left m-0 p-0">
            <div className="card ml-2">
              <ul className="list-group list-group-flush">
                <li className="list-group-item p-1"><a href="scripts:preventDefault()" className="form-control btn btn-lg btn-success display-1 p-1" onClick={e => this.props.dispInicio(e)}>Inicio</a></li>
                <li className="list-group-item p-1"><a href="scripts:preventDefault()" className="form-control btn btn-lg btn-secondary display-1 p-1" onClick={e => this.handleClick('novo')}>Novo Cadastro</a></li>
                <li className="list-group-item p-1"><a href="scripts:preventDefault()" className="form-control btn btn-lg btn-secondary display-1 p-1" onClick={e => this.handleClick('pesquisar')}>Pesquisar</a></li>
              </ul>
            </div>
          </div>

          <div className="col-md-9 float-left m-0">
            <div className="card">
              {
                (() => {
                  
                  if (this.state.pg_cadastro) 
                    return <Cadastro />

                  else if (this.state.pg_pesquisar) 
                    return <Pesquisa />

                })()
              }
            </div>
          </div>  

      </div>
    );
  }
}

export default connect(null, Actions)(Objeto);
