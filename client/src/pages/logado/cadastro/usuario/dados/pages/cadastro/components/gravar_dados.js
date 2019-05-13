import React, {Component} from "react";
import { connect } from "react-redux";
import { FormControl, Modal, Button } from 'react-bootstrap';
import * as Actions from "../src";


class Objeto extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleShow = this.handleShow.bind(this);
      this.handleClose = this.handleClose.bind(this);
  
      this.state = {
        show: false,
        msgs:'Deseja Salvar os dados?',
        isLoading: false,
      };
    }
  
    onSave = (e) => {
        if (e !== null)
            e.preventDefault()            

        this.setState({ isLoading:true, msgs: 'Aguarde, salvando dados..' });      
        
        setTimeout(() => {
            this.props.api_dados_usuario_gravar(this.props.dados)
            .then((p) => {
                this.setState({ msgs: p.body.response });
                setTimeout(() => { this.handleClose() }, 1000);
            })
            .catch((p) => { 
                this.setState({ isLoading:false, msgs: p.body.response });                      
            })    
            
        }, 2000);
        
    }


    handleClose() {
      this.setState({ show: false });
    }
  
    handleShow() {
        console.log(this.props.dados)
      this.setState({ show: true });      
    }
  
    render() {        
      return (
        <div>
            <Button 
                variant="info" 
                size="sm" 
                onClick={this.handleShow} >Gravar</Button>
  
          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Atenção</Modal.Title>
            </Modal.Header>
            <Modal.Body>{this.state.msgs}</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClose}>
                Fechar
              </Button>
              <Button variant="primary" 
              disabled={this.state.isLoading}                
              onClick={!this.state.isLoading ? e => this.onSave(e) : null} >{this.state.isLoading ? 'Aguarde…' : 'Gravar'}</Button>

            </Modal.Footer>
          </Modal>
        </div>
      );
    }
  }

export default connect(null, Actions)(Objeto);