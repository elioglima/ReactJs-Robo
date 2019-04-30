import React, {Component} from "react"
import { Switch, Route } from "react-router-dom"
import { ConnectedRouter } from "connected-react-router"

import Acesso from "../pages/acesso/pages/index"

import Logado_Inicio from '../pages/logado/inicio/pages/index'
import Logado_Cadastros from '../pages/logado/cadastros/pages/index'
import Logado_Relatorios from '../pages/logado/relatorios/pages/index'
import Logado_Ajuda from '../pages/logado/ajuda/pages/index'

import history from "./history"

function withProps(Component, props) {
  return function(matchProps) {
    return <Component {...props} {...matchProps} />
  }
}

class Routes extends Component {  

  render() {            
    return (
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path="/" component={withProps(Acesso, {dados:this.props.dados})} />

          <Route exact path="/logado" component={withProps(Logado_Inicio, {dados:this.props.dados})} />
          <Route exact path="/logado/cadastros" component={withProps(Logado_Cadastros, {dados:this.props.dados})} />
          <Route exact path="/logado/relatorios" component={withProps(Logado_Relatorios, {dados:this.props.dados})} />
          <Route exact path="/logado/ajuda" component={withProps(Logado_Ajuda, {dados:this.props.dados})} />

        </Switch>
      </ConnectedRouter>
    )
    }
}

export default Routes
