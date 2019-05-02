import { push } from "connected-react-router"
import axios from 'axios'
import qs from 'qs';

function jsonToURI(jsonObj) {
  var output = '';
  var keys = Object.keys(jsonObj);
  keys.forEach(function(key) {
      
      const CHAVE = (key).toString().trim() 
      const VALOR = jsonObj[key].toString().trim()
      const PARAMETRO = CHAVE+'='+VALOR+'&'
      output +=  PARAMETRO;
  })

  return output.slice(0, -1);
}


function testJSON(text){
  if (typeof text!=="string"){
      return (typeof text);
  }

  try{
      JSON.parse(text);
      return true;
  }
  catch (error){
      return error;
  }
}

export const Logar = () => dispatch => {

  const request = require('request');

  const URLS = 'http://localhost:5125/api/acesso/auth'

  var token = require('../../../libs/token');

  const jsonToken = {CHVA:token.CHVA().toString(), DVS:token.Atdvs(), CDE:1, TPI:6001, IDT:'10101010'}
  const sJSON = JSON.stringify(jsonToURI(jsonToken).toString().trim());
  let config = {
  };
  console.log(jsonToken)
  
  request({
    url: URLS,
    method: 'POST',   
    json:true, 
    body: jsonToken,
}, (err, response, body) => {
    if (!err) {
      console.log(err)
      return false
    }

    console.log(body)

});

 

  // var token = require('../../../libs/token');
  // const json = {CHVA:token.CHVA, DVS:token.Atdvs(), CDE:1, TPI:6001, IDT:'10101010'}
  // console.log(json);
  // const jsonRetorno = token.keygen(json)
  // console.log(jsonRetorno);
  

}
