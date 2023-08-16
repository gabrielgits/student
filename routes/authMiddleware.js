// authMiddleware.js

function isAuthenticated(req, res, next) {
   
    if (req.session.authenticated) {
        console.log('bla1')
        return next();
    }
    res.redirect('/login'); // Redirect to login if not authenticated
}

module.exports = isAuthenticated;
