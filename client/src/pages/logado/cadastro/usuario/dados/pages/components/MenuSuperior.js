import React, { Component } from 'react';
import { connect } from "react-redux";
import { Button } from 'react-bootstrap';

class Objeto extends Component {
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
      </div>
    )
  }
}

export default connect(null,null)(Objeto)
