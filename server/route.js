const express = require('express');
const path = require('path');

const app = express();

app.get('/api/', (req, res) => {
    // res.send('Hello World ')
    res.send(JSON.stringify(
      { 
        message: `Hello World`,
      }
    ));
})

module.exports = app;