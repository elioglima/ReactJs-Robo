
export const logar = (autorizacao) => new Promise(resolve => {
    setTimeout(() => {        
        console.log(autorizacao)
        resolve(autorizacao)
    }, 50)
})
