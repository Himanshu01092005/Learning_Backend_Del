const express = require('express')
const app = express()
const port = 3000
require('dotenv').config()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/hello',(req, res)=>{
    res.send('Hello ')
})

app.get('/login',(req, res)=>{
    res.send('<h1>Login page</h1>')
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})