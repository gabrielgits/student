// authMiddleware.js
let userRole;
function isAuthenticated(req, res, next) {
    
    if (req.session.authenticated) {
       
        console.log(userRole)
        return next();
    }
    res.redirect('/login'); // Redirect to login if not authenticated
}

module.exports = isAuthenticated
