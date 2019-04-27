let USERS = [
    { id: 1, name: 'Guilhermão Gostosão' },
    { id: 2, name: 'Goiaba' },
    { id: 3, name: 'Kaio' },
    { id: 4, name: 'Errera' },  
]

export const addUser = name => new Promise(resolve => {
    setTimeout(() => {
        const created = { id: USERS.length + 1, name }
        USERS = [...USERS, created]
        console.log([...USERS])
        resolve(created)
    }, 50)
})

export const listUsers = () => new Promise(resolve => {
    setTimeout(() => {  
        resolve(USERS)
    }, 50)
})

export const deleteUser = id => new Promise(resolve => {
    setTimeout(() => {
        USERS = [...USERS.filter(u => u.id !== id)]
        console.log(id)
        resolve(id)
    }, 50)
})
