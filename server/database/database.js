var tool_query = require('./query');
var tool_update = require('./query');

class Objeto {
    constructor() {
        this.status = 0
        this.response = 'Aguardando'
        this.Rows = []
        this.Cols = []
    }

    getTypeDescricao = (p) => {
        return 'teste';
    }

    tool_query = (s) => { return tool_query(s) }
    tool_update = (s) => { return tool_update(s) }

    getCell = (Row, ColName) => {
        for (let index = 0; index < this.Cols.length; index++) {
            const element = this.Cols[index];
            if (element.name === ColName) {
                return this.Rows[Row][index]
            }            
        }    

        return 'Not Found'
    }

    tquery(sSQL) {

        return this.tool_query(sSQL)
            .then((retorno) => {                            
                if (retorno.err !== null) {
                    this.status = 500
                    this.response = retorno.err
                    return false
                }

                for(var i = 0, len = retorno.fields.length; i < len; ++i) {
                    this.Cols.push({
                        name:retorno.fields[i].name,
                        type: this.getTypeDescricao(retorno.fields[i].type),
                    })
                }

                this.Rows = []
                for(var i = 0, leni = retorno.result.length; i < leni; ++i) {    

                    const dados = []
                    for(var c = 0, lenc = this.Cols.length; c < lenc; ++c) {                    
                        dados.push(retorno.result[i][this.Cols[c].name])
                    }
                    this.Rows.push(dados) 
                }

                return (this.Rows.length > 0)
                
            })
            .catch((err) => {
                throw err
                // this.reject(err)  
                this.status = 500
                this.response = err                     
                return false
            });



    }

    tupdate(sSQL) {

        return this.tool_update(sSQL)
            .then((retorno) => {                            
                if (retorno.err !== null) {
                    this.status = 500
                    this.response = retorno.err
                    return false
                }

                this.status = 200
                this.response = retorno
                return true
                
            })
            .catch((err) => {
                throw err
                this.status = 500
                this.response = err                     
                return false
            });



    }
}

module.exports = Objeto