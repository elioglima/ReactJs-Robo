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

    var usuario = require('../../../../../../../database/usuarios');
    var usuario_grupo = require('../../../../../../../database/usuario_grupo');

    var sSQL = 'select u.id, u.nome, u.email, u.senha, u.grupo, g.descricao '
    sSQL += ' from usuario u '
    sSQL += ' join usuario_grupo g on u.grupo = g.id '
    sSQL += ' where u.id = ' + req.body.params.id
    sSQL += ' limit 0,1 '
    usuario.query(sSQL).then(() => {

        let Row = {
            id: usuario.getCell(0, 'id'),
            nome: usuario.getCell(0, 'nome'),
            email: usuario.getCell(0, 'email'),
            senha: usuario.getCell(0, 'senha'),
            grupo: usuario.getCell(0, 'grupo'),
            grupo_descricao: usuario.getCell(0, 'descricao'),
        }

        usuario_grupo.listar()
            .then((p) => {

                let RowsGrupo = []

                for (let index = 0; index < usuario_grupo.Rows.length; index++) {
                    const element = usuario_grupo.Rows[index];
                    const Row = {
                        id: element[0],
                        descricao: element[1],
                    }

                    RowsGrupo.push(Row)
                }

                res.status(200).json({
                    Row: Row,
                    RowsGrupo:RowsGrupo,
                });

            })
            .catch((err) => {
                res.status(500).json({
                    Err: err
                });

            });


    }).catch((err) => {
        res.status(500).json({
            Err: err
        });

    });

});

module.exports = router;
