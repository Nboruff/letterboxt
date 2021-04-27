const Pool = require('pg').Pool
require('dotenv').config()
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'letterboxtdb',
    password: process.env.POSTGRES_PASS,
    port: 5432,
});

const getUser = () => {
    return new Promise(function (resolve, reject) {
        pool.query('SELECT * FROM users ORDER BY id ASC', (error, res) => {
            if (error) {
                reject(error)
            }
            resolve(res.rows);
        })
    })
}
const createUser = (body) => {
    console.log(body)
    return new Promise(function (resolve, reject) {
        const { username, password } = body
        pool.query('INSERT INTO users(username, password) VALUES ($1, $2) RETURNING *', [username, password], (error, res) => {
            if (error) {
                reject(error)
            }
            resolve(`A new User has been added added: ${res.rows[0]}`)
        })
    })
}

const deleteUser= () => {
    return new Promise(function (resolve, reject) {
        const id = parseInt(request.params.id)
        pool.query('DELETE FROM users WHERE id = $1', [id], (error, res) => {
            if (error) {
                reject(error)
            }
            resolve(`User deleted with ID: ${id}`)
        })
    })
}

const checkUser = (body) => {
    return new Promise(function (resolve,reject){
        const {username, password} = body
        pool.query('SELECT CASE WHEN EXISTS(SELECT * FROM users WHERE username = ($1) AND password = ($2)) THEN CAST(1 AS BIT) ELSE CAST(0 AS BIT) END', [username,password], (error,res) =>{
            if(error){
                reject(error)
            }
            resolve(res.rows[0]['case'])
        })
    })
}

module.exports = {
    getUser,
    createUser,
    deleteUser,
    checkUser
}