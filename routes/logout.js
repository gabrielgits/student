var express = require('express')
var app = express()

app.get('/', (req, res) => {
    req.session.destroy(err => {
        if (err) {
            console.error('Error destroying session:', err);
        }
        res.redirect('/login'); // Redirect to login after logout
    });
});

module.exports = app;