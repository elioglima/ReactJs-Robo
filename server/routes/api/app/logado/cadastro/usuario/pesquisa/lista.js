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

    var sSQL = 'select id, nome from usuarios';
    pool.query(sSQL, function (err, result, fields) {
        if (err) res.json(err)
        console.log(result)
        
    });

    const Rows = [
        {id:1, name:'Elio Gonçalves de Lima', grupo:'Administrador'},
        {id:2, name:'Pedro Alves', grupo:'Administrador'},
        {id:3, name:'Regina Couper', grupo:'Administrador'}
        ]

    res.status(200).json({
        Rows:Rows
    });     

});

module.exports = router;
