var express = require('express')
var app = express()
const bcrypt = require('bcryptjs');

// Define the /signup routes here
app.get('/', (req, res) => {
    let flashMessage = req.flash('message')[0];
    //console.log(flashMessage);
    res.render('login/signup.ejs', { flashMessage: flashMessage });
})

app.post('/', (req, res) => {

    let user = req.body.username.trim();
    let passwd = req.body.password.trim();
    let role = req.body.role;
   

    const saltRounds = 10; // Number of salt rounds for bcrypt

    // Assume 'password' is the user's input password
    bcrypt.genSalt(saltRounds, function (err, salt) {
        bcrypt.hash(passwd, salt, function (err, hash) {
            // console.log(hash);

            var record = {
                username: user,
                password: hash,
                role: role,
                last_seen: new Date() // Use JavaScript Date object
            }

            req.getConnection(function (error, conn) {
                conn.query('INSERT INTO users SET ?', record, function (err, rows, fields) {
                    if (err) {
                        req.flash('message', err.message); // Flash the error message
                        res.render('login/signup.ejs', { flashMessage: req.flash('message')[0] });
                    } else {
                        req.flash('message', 'User created successfully!');
                        res.render('login/login.ejs', { flashMessage: req.flash('message')[0] });
                    }
                })
            })
        });
    });
})

module.exports = app;