// how to run the program
const express = require('express')
const app = express()
const fruits = require('./routes/fruits')

app.get('/',(req, res) => {
    res.send("Hello from the fruits api")
})

app.use('/fruits', fruits) //https://localhost:3000/fruits

app.use('/:name', fruits)

module.exports = app
