const express = require('express');
const path = require('path');

const app = require('./route');

//production mode
if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../build')));
    //
    app.get('*', (req, res) => {
      res.sendfile(path.join(__dirname = '../build/index.html'));
    })
  }
  else {

        // Server static assets
        app.use(express.static(path.resolve(__dirname, '..', 'build')));

        app.get('*', (req, res) => {
            res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
        });
  }

module.exports = app;