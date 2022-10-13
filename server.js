const express = require('express')
const app = express()
require('dotenv').config()

const PORT = process.env.PORT

app.use('/',(req,res) => {
    res.send("Server on")
})

app.listen(PORT , () => {
    console.log("Server on in PORT : " ,PORT)
})