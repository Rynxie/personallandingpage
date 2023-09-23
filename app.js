const express = require('express')
const app = express()
const port = 80
const path = require('path');

app.use(express.static('public'))

app.get('/', (req, res) => {
    console.log("Hello World")
    res.sendFile(path.join(__dirname+'/index.html'));
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})