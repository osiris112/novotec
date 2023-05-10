const express = require('express')
const app = express()
const port = 3000

app.get('/',(req, res) => {
    res.send('Hello world!')
})

app.listen(port,() =>{
    console.log('o servidor esta sendo executado em http:${port}')
})