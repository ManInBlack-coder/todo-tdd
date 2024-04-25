const express = require('express')
const app = express()
PORT = 3015

app.get('/', (req,res) => {
    res.send('express test');
});

app.listen(3015, () => {
    console.log(`serv is running on ${PORT}`)
});