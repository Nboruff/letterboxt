const Pool = require('pg').Pool
require('dotenv').config()
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'letterboxtdb',
    password: process.env.POSTGRES_PASS,
    port: 5432,
});

const getUsers = () => {
    return new Promise(function (resolve, reject) {
        pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
            if (error) {
                reject(error)
            }
            resolve(results.rows);
        })
    })
}
const createUser= (body) => {
    console.log(body)
    return new Promise(function (resolve, reject) {
        const { username, password } = body
        pool.query('INSERT INTO users(username, password) VALUES ($1, $2) RETURNING *', [username, password], (error, results) => {
            if (error) {
                reject(error)
            }
            resolve(`A new User has been added added: ${results.rows[0]}`)
        })
    })
}

const deleteUser= () => {
    return new Promise(function (resolve, reject) {
        const id = parseInt(request.params.id)
        pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
            if (error) {
                reject(error)
            }
            resolve(`User deleted with ID: ${id}`)
        })
    })
}

module.exports = {
    getUsers,
    createUser,
    deleteUser
}