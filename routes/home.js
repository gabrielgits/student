var express = require('express')
var app = express()
app.get('/', (req, res) => {
    res.render('home/landing_page.ejs');
})

module.exports = app;