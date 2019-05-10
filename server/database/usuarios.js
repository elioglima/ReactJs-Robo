var conexao = require('./conexao');


query = () => {
    var sSQL = 'select id, nome from adv_usuario';
    conexao.query(sSQL, function (err, result, fields) {
        if (err) res.json(err)
        // res.json(result);
    });
}
        
module.exports = router;
