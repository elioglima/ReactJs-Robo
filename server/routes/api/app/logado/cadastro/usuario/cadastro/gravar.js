var express = require('express');
var router = express.Router();
var pool = require('../../../../../../../configs/priv_database');

router.post('/', function (req, res) {
    var token = require('../../../../../../../libs/token');            
    const reultado = token.decodificar(req.body.A1)
    if (reultado.Status !== 200) {
        res.status(200).json(reultado);     
        return true
    }

    const dados = req.body.params
    if(!dados.hasOwnProperty('id')) {
        res.status(500).json({response:'faltando parametro'});     
        return false
    }

    var usuario = require('../../../../../../../database/usuarios');
    console.log(dados)
    usuario.update(dados, '')
    .then(() => {        
        res.status(200).json({response:'Dados gravados com sucesso.'});     
    }).catch((err) => {
        res.status(500).json({
            Err:err
        });     
    
    }); 
    

});

module.exports = router;
