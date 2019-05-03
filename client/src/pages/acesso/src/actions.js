import { push } from "connected-react-router"

export const Logar = (parametros) => dispatch => {

  const request = require('request');
  const base64 = require('base-64');

  const URLS = 'http://localhost:5125/api/acesso/auth'

  var token = require('../../../libs/token');

  const jsonToken = {    
    CHVA: token.CHVA(),
    DVS: token.Atdvs(),
    CDE: 1,
    TPI: 6001,
    IDT: '10101010',
    body: parametros
  }

  request({
    url: URLS,
    method: 'POST',
    json: true,
    body: jsonToken,
  }, (err, response, body) => {

    try {

      if (response.statusCode === 200) {
        localStorage.setItem('A1', base64.encode(JSON.stringify(response.body.A1)));  
        localStorage.setItem('cad', base64.encode(JSON.stringify(response.body.cad)));  
        dispatch(push('logado'))
      }

      alert(response.body.Response)

    } catch (error) {
      console.log(response)
    }

  });

}
