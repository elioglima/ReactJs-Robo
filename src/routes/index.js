import React, {Component} from "react"
import { Switch, Route } from "react-router-dom"
import { ConnectedRouter } from "connected-react-router"

import Acesso from "../pages/acesso/pages/index"
import Logado from "../pages/logado/pages/index"
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
          <Route path="/logado" component={withProps(Logado, {dados:this.props.dados})} />
        </Switch>
      </ConnectedRouter>
    )
    }
}

export default Routes
