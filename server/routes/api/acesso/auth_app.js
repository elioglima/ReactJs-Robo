var express = require('express');
var router = express.Router();


router.post('/', function (req, res) {

    // var token = require('../../../libs/token');    


    
    console.log(req.body)

    // // const stoken = token.keygen(JSON.parse(mensagens))

    res.json({status:400});

     
});

module.exports = router;
