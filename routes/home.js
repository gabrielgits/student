var express = require('express')
var app = express()
app.get('/', (req, res) => {
    res.render('home/home.ejs');
})

module.exports = app;