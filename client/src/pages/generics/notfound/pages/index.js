import React, {Component} from "react";
import { connect } from "react-redux";
import * as Actions from "../src/actions";

class Objeto extends Component {
  
  onSubmit = e => { e.preventDefault(); }  

  render() {

    document.body.className = 'bg-secondary text-white';
    
    return (
      <div>
        <nav className="navbar navbar-expand-md bg-dark navbar-dark ">
        <a className="navbar-brand pb-2" href="scripts:preventDefault()">{this.props.dados.titulo}</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
          
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          
          <ul className="navbar-nav">

            <li className="nav-item">
              <a className="nav-link" href="scripts:preventDefault()" onClick={e=>this.props.dispInicio(e)}>Inicio</a>
            </li>

            <li className="nav-item active">
              <a className="nav-link" href="scripts:preventDefault()">Not Found</a>
            </li>

          </ul>
        </div>

        </nav>
        
   
        <div className="col-md-12 text-center">
          <br />
          <br />
          <h1 className="cover-heading">Pagina não encontrada</h1>
          <p className="lead">Code 404, tente novamente</p>
          <p className="lead">
            <a href="scripts:preventDefault()" className="btn btn-lg btn-secondary" onClick={e => this.props.dispInicio(e)}>Voltar ao Inicio</a>
          </p>       
        </div>
        </div>
      );
      }
      }

export default connect(null,Actions)(Objeto);
