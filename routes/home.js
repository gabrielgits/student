var express = require('express')
var app = express()
app.get('/', (req, res) => {
    res.render('home/landing_page.ejs');
})

// SEARCH USER
// app.get('/search', isAuthenticated, function(req, res, next) {
// 	console.log(req);
// })

module.exports = app;