import React, {Component} from "react";
import { connect } from "react-redux";
import * as Actions from "../src/actions";
import { FormControl, Container, Row,Form, Button } from 'react-bootstrap';
import Navbars from './components/nav';
import base64 from 'base-64';


class Objeto extends Component {
  
  state = {
    name:'',
    pass:''
  }

  constructor() {
    super()
    
  }

  gethtml = (template_str) => {
    var __html = require(template_str);
    var template = { __html: __html };

    return React.createClass({
        render: function () {
            return (
                <div dangerouslySetInnerHTML={{__html: '<br><br><br><br><br><br><h1>teste</h1>'}} />
            );
        }
    })
}

  onSubmit = e => {
    e.preventDefault();

    var parametros = {
      N: this.state.name,
      P: this.state.pass,
    }

    this.props.Logar(parametros)    

  }  


  render() {

    this.props.Auth_app()    

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
              <FormControl type="email" className="mr-sm-2" size="sm" placeholder="Enter email" value={base64.decode(this.state.name)} onChange={e => this.setState({name: base64.encode(e.target.value)})} />
              <FormControl type="password" className="mr-sm-2" size="sm" placeholder="Password" value={base64.decode(this.state.pass)} onChange={e => this.setState({pass: base64.encode(e.target.value)})} />
              <Button variant="success" size="sm" type="button" onClick={(e) => this.onSubmit(e)}>Entrar</Button>
            </Form>
          
        </nav>

      </div>
      );
      }
      }

export default connect(null,Actions)(Objeto);
