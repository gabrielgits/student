var express = require('express')
var app = express()
const bcrypt = require('bcryptjs');


// Define the /login routes here
app.get('/', (req, res) => {
    let flashMessage = req.flash('message')[0];
    console.log(flashMessage);
    res.render('login/login.ejs', { flashMessage: flashMessage });
})

app.post('/', (req, res) => {

    let user = req.body.username;
    let passwd = req.body.password;
    const saltRounds = 10; // Number of salt rounds for bcrypt
  

    req.getConnection(function (error, conn) {
        conn.query('SELECT username, password, role FROM users WHERE username = "' + user + '"', function (err, rows, fields) {
            if (err) throw err

            // if user not found
            if (rows.length <= 0) {
                req.flash('message', 'User not found. Please try again.')
                res.redirect('/login')
            }
            else { // if user found render to main page depend on the role!
                const userRole = rows[0].role; // Get the role from the query result
                const storedHashPasswd = rows[0].password; // Get the pswd from the query result

                bcrypt.compare(passwd, storedHashPasswd, function (err, result) {

                    if (result === true) {
                        // Passwords match, allow user to log in
                       
                        // After successful login
                        req.session.authenticated = true;
                        req.session.username = user;                       

                        if (userRole === 'Professor') {
                            res.redirect('/index'); //Redirect to students page which contain edit and delete buttons
                        } else {
                            // Redirect to students_view page
                            res.redirect('/view');
                        }

                    } else {
                        // Passwords don't match, deny login                       
                        req.flash('message', 'Passwords dont match, deny login.')
                        res.redirect('/login');
                    }

                });
            }
        })
    })


})

module.exports = app;