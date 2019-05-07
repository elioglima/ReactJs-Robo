import React, {Component} from "react";
import { connect } from "react-redux";
import * as Actions from "../src/actions";
// import Navbars from './components/nav';
// import { Span, Alert } from 'react-bootstrap';

import { Icon } from 'react-icons-kit'
import * as Inc from 'react-icons-kit/fa'


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
        {/* <Navbars dados={this.props.dados} />
        <div className="col-md-12">
          <Alert key='0' variant='warning'>Pagina não localizada</Alert>
        </div> */}
      </div>
    )
  }
}

export default connect(null,Actions)(Objeto);

