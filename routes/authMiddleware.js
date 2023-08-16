// authMiddleware.js
let userRole;
function isAuthenticated(req, res, next) {
    
    if (req.session.authenticated) {
       
        //console.log(userRole)
       // console.log(req.session)
        return next();
    }
    res.redirect('/login'); // Redirect to login if not authenticated
}

module.exports = isAuthenticated
