var query = require('./query');
var Rows = []

listar = () => {
    var sSQL = 'select id, nome from adv_usuario';
    query(sSQL, function (err, result, fields) {
        if (err) console.log(err)
        console.log(result)
    });
}
        
module.exports = listar;
