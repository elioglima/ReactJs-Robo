import React, { Component } from 'react';
import { connect } from "react-redux";
import { FormControl, Form, Button } from 'react-bootstrap';
import DataGrids from './components/data-grid'
import * as Actions from "./src";

class Objeto extends Component {

  state = {
    Rows: [],
    pesquisa: ''
  }

  onPesquisar = (e) => {
    e.preventDefault()
    this.props.api_lista_usuarios(this.state.pesquisa)
      .then((p) => {
        this.setState({ Rows: p.body.Rows })
      })
      .catch((p) => { console.log(p) })
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand">Pesquisa</a>
          <Form inline>
            <FormControl type="text" placeholder="Pesquisar" className="mr-sm-2" size="sm" value={this.state.pesquisa} onChange={e => this.setState({ pesquisa: e.target.value })} />
            <Button variant="info" size="sm" onClick={e => this.onPesquisar(e)} >Pesquisar</Button>
          </Form>
        </nav>
        <DataGrids Rows={this.state.Rows} />
      </div>
    );
  }
}

export default connect(null, Actions)(Objeto);