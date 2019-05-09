import React, {Component} from "react";
import { connect } from "react-redux";
import * as Actions from "../src/actions";
import { FormControl,Form, Button } from 'react-bootstrap';
import base64 from 'base-64';

class Objeto extends Component {
  
  state = {
    name:'',
    pass:''
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
        <nav className="navbar navbar-expand-md bg-dark navbar-dark ">
        <a className="navbar-brand pb-2" href="scripts:preventDefault()">{this.props.dados.titulo}</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
          
            <div className="collapse navbar-collapse" id="navbarNavDropdown">          
            
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
