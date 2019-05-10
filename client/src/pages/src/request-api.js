import { push } from "connected-react-router"

export const RAPI = (uri, params) => {
    
    return new Promise(
      
      function(resolve, reject) { 
        
        const URLS = 'http://localhost:5125/api/' + uri
        const request = require('request');
        const base64 = require('base-64');
        const var_logado = base64.decode(localStorage.getItem('logado'))    
        
        let retorno = {
            Status:0,
            Response:'',
            body:{}
        }
    
        if ((var_logado === null) || (var_logado === undefined)) {
          retorno.Status = 500 
          retorno.Response = 'Ops, não existe usuário logado.'       
        } else if (var_logado.toString().trim().length === 0) {
          retorno.Status = 500 
          retorno.Response = 'Ops, não existe usuário logado.'     
        }

        var token = require('../../libs/token');  
        const v = localStorage.getItem('A1')
        const json_token =  base64.decode(v)
      
        if (json_token.toString().trim().length > 0) {
        
          try {         
            const json_parse = JSON.parse(json_token)  
            const res_token = token.decodificar(json_parse)

            if (res_token.Status === 200) {
              const sendJSON = {
                A1: json_parse,
                params: params
              }

              request({
                url: URLS,
                method: 'POST',
                json: true,
                body: sendJSON, 
              }, (err, response, body) => {
                try {
        
                  if (response.statusCode !== 200) {                
                    retorno.Status = response.statusCode 
                    retorno.Response = response.statusMessage
                    reject(retorno)
                  }
                
                  retorno.Status = response.statusCode 
                  retorno.Response = response.statusMessage
                  retorno.body = body
                  resolve(retorno)
        
                } catch (error) {
                  retorno.Status = 500 
                  retorno.Response = error    
                  reject(retorno)
                }         
              });    

            } else {
              retorno.Status = res_token.Status 
              retorno.Response = res_token.Response 
              reject(retorno)
            }
        
          } catch (error) {
            retorno.Status = 500 
            retorno.Response = error    
            reject(retorno)
          }
        }
      })
  } 