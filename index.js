const express = require('express');
const app = express();
const nodemon = require('nodemon');

app.get('/', (req, res)=>{

    res.send({ნიკო: 'there'});
});
const PORT = process.env.PORT || 5000;
app.listen(PORT);
console.log('Server STARTED')