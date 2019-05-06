import React, { Component } from "react";
import { connect } from "react-redux";
import * as Actions from "../src/actions";
import { Button, Form, Grid, Header, Image, Message, Segment} from 'semantic-ui-react';
// import Navbars from './components/nav';
import base64 from 'base-64';    

class Objeto extends Component {
  
  state = {
    name:'',
    pass:''
  }

  constructor() {
    super()
    
  }

  onSubmit = e => {
    e.preventDefault();

    var parametros = {
      N: this.state.name,
      P: this.state.pass,
    }

    this.props.Logar(parametros)    

  }  

  onChange = e => {

  }

  onLoadSelect = () => {

  }

  render() {

    // if (this.props.Auth_app()) return false
    this.onLoadSelect()
    
    return (     
      <div className='login-form'>
    {/*
      Heads up! The styles below are necessary for the correct render of this example.
      You can do same with CSS, the main idea is that all the elements up to the `Grid`
      below must have a height of 100%.
    */}
    <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}
    </style>
    <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='teal' textAlign='center'>
            Acesso ao Sistema
        </Header>
        <Form size='large'>
          <Segment stacked>
            <Form.Input fluid icon='user' iconPosition='left' placeholder='Endereço de E-mail' value={base64.decode(this.state.name)} onChange={e => this.setState({name: base64.encode(e.target.value)})} />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
              value={base64.decode(this.state.pass)} onChange={e => this.setState({pass: base64.encode(e.target.value)})}
            />

            <Button color='teal' 
              fluid size='large'
              onClick={(e) => this.onSubmit(e)} >
              Entrar
            </Button>
          </Segment>
        </Form>
        <Message>
           <a href='#'>Esqueci minha senha?</a>
        </Message>
      </Grid.Column>
    </Grid>
  </div>
      )
      }
      }

export default connect(null,Actions)(Objeto);
