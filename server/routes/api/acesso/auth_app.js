var express = require('express');
var router = express.Router();


router.post('/', function (req, res) {
    var token = require('../../../libs/token');            
    const reultado = token.keygen(req.body)

    // para authenticação é 
    // necessario passar o usuario 
    // e senha no body do json
    if(!req.body.hasOwnProperty('body')) 
        reultado = {StatusCode:203, Status: 6001, Response:"Authenticação não autorizada."};

    if(!req.body.body.hasOwnProperty('N')) 
        reultado = {StatusCode:203, Status: 6002, Response:"Authenticação não autorizada."};

    if(!req.body.body.hasOwnProperty('P')) 
        reultado = {StatusCode:203, Status: 6003, Response:"Authenticação não autorizada."};        

    if (reultado.StatusCode != 200)
        console.error(reultado);

    reultado.cad = {}
    
    if (reultado.StatusCode == 200) {
        reultado.cad = {
            nome:'Elio Gonçalves de Lima'
        }     
    }
    
    res.status(reultado.StatusCode).json(reultado);     
});

module.exports = router;
