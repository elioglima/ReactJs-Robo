import React, {Component} from "react";
import { Provider } from "react-redux";

import store from "./store";
import Routes from "./routes";

const dados = {
  titulo: "Maxtime"
}

class App extends Component {
  render() {    
    return (
      <Provider store={store}>
        <Routes dados={dados} />
      </Provider>
    )
  }
}

export default App
