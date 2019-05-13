var database = require('./database')
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

    update(campos, where) {        
        let sSQL = 'update usuarios set '
        sSQL += ' nome ' + campos.nome
        // sSQL += ' ,email ' + campos.email
        sSQL += ' where id = ' + campos.id
        return this.tupdate(sSQL)
    }
}

module.exports = new Objeto()
