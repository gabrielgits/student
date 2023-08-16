var express = require('express')
var app = express()

var mysql = require('mysql')

var myConnection = require('express-myconnection')

var config = require('./config')
var dbOptions = {
    host: config.database.host,
    user: config.database.user,
    password: config.database.password,
    port: config.database.port,
    database: config.database.db
}

app.use(myConnection(mysql, dbOptions, 'pool'))

app.set('view engine', 'ejs')


var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


var flash = require('express-flash')
var cookieParser = require('cookie-parser');
var session = require('express-session');

app.use(cookieParser('keyboard cat'))
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))

var home = require('./routes/home')
var studets = require('./routes/students')
var login = require('./routes/login')
var signup = require('./routes/signup')
var excelJs = require('./routes/excelJs')


app.use(flash())

app.use('/',home)
app.use('/users', studets)
app.use('/login', login)
app.use('/signup', signup)
app.use(express.static(__dirname + '/dist'));
app.use('/generate-excel',excelJs) ;

var port = process.env.PORT || 80;
app.listen(port, function () {
    console.log('Server running on port ' + port);
})


