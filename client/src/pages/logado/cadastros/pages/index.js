import React, {Component} from "react";
import { connect } from "react-redux";
import * as Actions from "../src/actions";
import { Button } from 'react-bootstrap';
import Navbars from './components/nav';

class Objeto extends Component {
  render() {    
    return (  
      <div>
        <Navbars dados={this.props.dados} />
        <h1>Cadastros</h1>
      </div>
    )
  }
}

export default connect(null,Actions)(Objeto);

