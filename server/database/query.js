const pool = require('./pool');

aquery = (sSQL) => {
    // var sSQL = 'select id, nome from usuarios';
    return new Promise(
        function(resolve, reject) { 
            try {
                pool.query(sSQL, function (err, result, fields) {
                    if (err) reject(err)
                    resolve({
                        err:err, 
                        result:result, 
                        fields:fields
                    });
                });            
            } catch (error) {
                reject(error)
            }            
        }
    )     
}

var query 

module.exports = (s)  =>  { 
    async function Execute(x) { return await aquery(x); }
    return Execute(s)
}  