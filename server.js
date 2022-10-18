const express = require('express')
const app = express()
const http = require('http')
const server = http.createServer(app)
require('dotenv').config()

const PORT = process.env.PORT

// Middleware
app.use(express.static('public'))

app.use('/',(req,res) => {
    res.send("Server on")
})

server.listen(PORT , () => {
    console.log("Server on in PORT : " ,PORT)
})

console.log("Test")