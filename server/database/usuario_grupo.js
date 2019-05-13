var database = require('./database')
var slib = require('../libs/fn_string')

/*
type 
    3 = int
    253 = string
    128 = datetime
*/

class Objeto extends database {
    
    constructor() {
        super()
    }   

    listar() {        
        const sSQL = 'select g.id, g.descricao from usuario_grupo g limit 0,100'
        return this.tquery(sSQL)
    }

    query(where = '', campos = '*', l1 = 0, l2 = 100) {
        var sSQL = 'select ' + campos + ' from usuario'        
        if (where.toString().length > 0)
            sSQL += ' where ' + where
        sSQL += ' limit ' + l1 + ',' + l2
        return this.tquery(sSQL)
    }
    
    query(sSQL) {        
        return this.tquery(sSQL)
    }

    update(campos) {        
        let sSQL = 'update usuario_grupo set '
        sSQL += ' nome = ' + slib.asp(campos.nome)
        // sSQL += ' ,email ' + campos.email
        sSQL += ' where id = ' + campos.id
        console.log(sSQL)

        return this.tupdate(sSQL)
    }
}

module.exports = new Objeto()
