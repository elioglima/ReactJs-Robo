var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res) {
    var token = require('../../../../libs/token');
    var mensagens = req.body;    
    res.json(token.keygen(req.body));
});

module.exports = router;
