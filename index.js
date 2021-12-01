require('dotenv').config()

const express = require('express')

const todo = require('./routes/todos.router')

const PORT = process.env.PORT

const app = express()

app.use(express.json())

// TUGAS
// buat swagger untuk project ini
// jadikan ke format json
// serve swagger.json ke project menggunakan middleware swagger UI

app.use('/v1', todo)

app.use((err, req, res, next) => {
    const {message = 'internal server error', code = 500, } = err
    return res.status(code).json({
        code,
        message,
    })
})

app.listen(PORT, () => console.log(`server load on ${PORT}`))