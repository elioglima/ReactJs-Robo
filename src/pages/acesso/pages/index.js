import React, {Component} from "react";
import { connect } from "react-redux";
import * as Actions from "../src/actions";
import { Container, Row,Form, Button } from 'react-bootstrap';
import Navbars from './components/nav';

class Objeto extends Component {
  
  render() {    
    return (
      <div>
        <Navbars dados={this.props.dados} />
        <Container>
          <Row >
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group controlId="formBasicChecbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="button" onClick={this.props.Logar}>
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
