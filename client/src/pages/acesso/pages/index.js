import React, {Component} from "react";
import { connect } from "react-redux";
import * as Actions from "../src/actions";
import { Container, Row,Form, Button } from 'react-bootstrap';
import Navbars from './components/nav';
import base64 from 'base-64';    

class Objeto extends Component {
  
  state = {
    name:'',
    pass:''
  }

  // constructor() {
  //   super()
  //   // const v = localStorage.getItem('jsonToken')
  //   // console.log('logar encode:' + v,'decode :' + base64.decode(v), parseInt(10, 10))
  // }

  onSubmit = e => {
    e.preventDefault();

    var parametros = {
      N: this.state.name,
      P: this.state.pass,
    }

    this.props.Logar(parametros)    

  }  

  render() {    
    return (
      <div>
        <Navbars dados={this.props.dados} />
        <Container>
          <Row >
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={base64.decode(this.state.name)} onChange={e => this.setState({name: base64.encode(e.target.value)})} />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={base64.decode(this.state.pass)} onChange={e => this.setState({pass: base64.encode(e.target.value)})} />
      </Form.Group>
      <Form.Group controlId="formBasicChecbox">
        <Form.Check type="checkbox" label="Check me out"/>
      </Form.Group>
      <Button variant="primary" type="button" onClick={(e) => this.onSubmit(e)}>
        Submit
      </Button>
      </Form>
      </Row>
      </Container>
      </div>
      );
      }
      }

export default connect(null,Actions)(Objeto);
