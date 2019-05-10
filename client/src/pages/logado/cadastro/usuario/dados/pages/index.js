import React, { Component } from "react";
import { connect } from "react-redux";
import * as Actions from "../src/actions";

// importações da tela
import MenuSuperior from "./components/MenuSuperior";
import Pesquisa from "./pesquisa";
import Cadastro from "./cadastro";

class Objeto extends Component {

  onSubmit = e => { e.preventDefault(); }

  componentWillMount() {     
    this.setState({
      pg_pesquisar: true,
      pg_novo: false
    })
    this.handleClick = this.handleClick.bind(this);   
  }

  handleClick(acao) {
    if (acao == 'novo') {
      this.setState({
        pg_pesquisar: false,
        pg_cadastro: true
      })
    
    } else if (acao == 'pesquisar') {
      this.setState({
        pg_pesquisar: true,
        pg_cadastro:false
      })
    }
  }

  render() {
    return (      
      <div>
        <MenuSuperior dados={this.props.dados} />

        <div className='col-md-12 bg-secondary text-white pa mb-3' >Cadastro de Usuários</div>
          <div className="col-md-3 float-left m-0 p-0">
            <div className="card ml-2">
              <ul className="list-group list-group-flush">
                <li className="list-group-item p-1"><a href="scripts:preventDefault()" className="form-control btn btn-lg btn-success display-1 p-1" onClick={e => this.props.dispInicio(e)}>Inicio</a></li>
                <li className="list-group-item p-1"><a href="scripts:preventDefault()" className="form-control btn btn-lg btn-secondary display-1 p-1" onClick={e => this.handleClick('novo')}>Novo Cadastro</a></li>
                <li className="list-group-item p-1"><a href="scripts:preventDefault()" className="form-control btn btn-lg btn-secondary display-1 p-1" onClick={e => this.handleClick('pesquisar')}>Pesquisar</a></li>
              </ul>
            </div>
          </div>

          <div className="col-md-9 float-left m-0">
            <div className="card">
              { 
                (() => {
                  
                  if (this.state.pg_cadastro) 
                    return <Cadastro />

                  else if (this.state.pg_pesquisar) 
                    return <Pesquisa />

                })()
              }
            </div>
          </div>  

      </div>
    );
  }
}

export default connect(null, Actions)(Objeto);
