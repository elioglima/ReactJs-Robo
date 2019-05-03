var express = require('express');
var router = express.Router();


router.post('/', function (req, res) {
    var token = require('../../../libs/token');    
    const reultado = token.decodificar(req.body)
    
    res.status(200).json(reultado);     
});

module.exports = router;
