var express = require('express');
var router = express.Router();

router.post('/', function (req, res) {
    var token = require('../../../../../../../libs/token');            
    const reultado = token.decodificar(req.body.A1)
    if (reultado.Status !== 200) {
        res.status(200).json(reultado);     
        return true
    }

    var usuario = require('../../../../../../../database/usuarios');
    var sSQL = 'select u.id, u.nome, g.descricao '
    sSQL += ' from usuario u '
    sSQL += ' join usuario_grupo g on u.grupo = g.id '
    sSQL += ' limit 0,100 '
    usuario.query(sSQL).then(() => {        
        
        let Rows = []
        
        for (let index = 0; index < usuario.Rows.length; index++) {
            const element = usuario.Rows[index];
            const Row = {
                id:element[0],
                name:element[1],
                grupo:element[2],
            }

            Rows.push(Row)
        } 

        res.status(200).json({
            Rows:Rows
        });     
    
    }).catch((err) => {
        res.status(500).json({
            Err:err
        });     
    
    }); 

});

module.exports = router;
