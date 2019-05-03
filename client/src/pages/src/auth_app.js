import { push } from "connected-react-router"

export const Auth_app = () => dispatch => {
  
    const request = require('request');
    const base64 = require('base-64');
    const URLS = 'http://localhost:5125/api/acesso/auth'

    var token = require('../../libs/token');

    const v = localStorage.getItem('A1')
    const json_token =  base64.decode(v)
    if (json_token.toString().trim().length > 0) {
      try {       

        const json_parse = JSON.parse(json_token)  
        const res_token = token.decodificar(json_parse)
        if (res_token.Status === 200) {
          console.log('json_parse',json_parse)
          request({
            url: URLS,
            method: 'POST',
            json: true,
            body: json_parse,
          }, (err, response, body) => {
        
            try {
        
              if (response.statusCode === 200) {
                dispatch(push('logado'))
              }
        
            } catch (error) {
              console.log(response)
            }
        
          });
          
        }
        
      } catch (error) {
        
      }
    } 
    
}
