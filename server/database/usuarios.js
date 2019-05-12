var tool_query = require('./query');

class Objeto {
    
    constructor() {
        this.status = 0
        this.response = 'Aguardando'
        this.Rows = []
        this.Cols = []
    }

    query() {
        const sSQL = 'select * from usuario'
        tool_query(sSQL).then((retorno) => {
            
            if (retorno.err !== null) {
                this.status = 500
                this.response = retorno.err
                return false
            }

            for(var i = 0, len = retorno.fields.length; i < len; ++i) {
                this.Cols.push({
                    name:retorno.fields[i].name,
               })
            }

            // console.log()

            for(var i = 0, leni = retorno.result.length; i < leni; ++i) {    

                const dados = []
                for(var c = 0, lenc = this.Cols.length; c < lenc; ++c) {                    
                    const dd = retorno.result[i][this.Cols[c].name]
                    dados.push(dd)
                }
                this.Rows.push(dados) 
            }

            console.log(this.Rows)
            
        }).catch((err) => {
            console.log(err)
            
        });
    }
}

module.exports = new Objeto()
