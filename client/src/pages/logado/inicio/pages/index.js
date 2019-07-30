import React, { Component } from "react";
import { connect } from "react-redux";
import * as Actions from "../src/actions";
import Navbars from './components/nav';
import base64 from 'base-64'
import '../css/styles.css'

class Objeto extends Component {  
  
  timeout = 0
  months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
  days = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sabado"]

  constructor() {
    super()
    const v = localStorage.getItem('cad')
    let d = new Date()
    this.state = {
      nome: JSON.parse(base64.decode(v)).nome,
      day: d.getDay(),
      month: d.getMonth(),
      date: d.getDate(),
      year: d.getFullYear(),
      time: d.toLocaleTimeString(),
      data_exibicao: ''    
    }
    this.countingSecond = this.countingSecond.bind(this)
  }

  componentWillMount() {    
    this.timeout = setInterval(this.countingSecond, 1000) 
    this.countingSecond()
    
  }

  componentWillUnmount() {    
    clearInterval(this.timeout);    
  }

  countingSecond() {   
    let d = new Date()
    this.setState({
      day: d.getDay(),
      month: d.getMonth(),
      date: d.getDate(),
      year: d.getFullYear(),
      time: d.toLocaleTimeString(),
      data_exibicao: this.state.day 
            + '/' + this.state.month 
            + '/' + this.state.year 
            + ' ' + this.state.time
    })



  }


  render() {
    this.props.dispChkAuth()

    return (
      <div>
        <Navbars dados={this.props.dados} />
        <div className='TesteBemVindo col-md-12 bg-secondary text-white' >Bem Vindo, {this.state.nome}
        <span className="float-right">{this.state.data_exibicao}</span>
        </div>
        <div className="base_tela">

          <div className='timeclock-main'>
          </div>

        </div>
      </div>
    )
  }
}

export default connect(null, Actions)(Objeto);

