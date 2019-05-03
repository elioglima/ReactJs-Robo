import React, {Component} from "react";
import { connect } from "react-redux";
import * as Actions from "../src/actions";
import Navbars from './components/nav';
import { Alert } from 'react-bootstrap';

class Objeto extends Component {
  constructor() {
    super()
    const base64 = require('base-64');
    const v = localStorage.getItem('cad')    
    this.state = {
      nome: JSON.parse(base64.decode(v)).nome
    }
  }

  render() {    
    return (  
      <div>
        <Navbars dados={this.props.dados} />
        <div className="col-md-12">
          <Alert key='0' variant='warning'>Bem Vindo, {this.state.nome}</Alert>
        </div>
      </div>
    )
  }
}

export default connect(null,Actions)(Objeto);

