export function secure(req, res, next) {
    const {token} = req.params;
    if (token.length > 3) {
        next();
    } else {
        res.redirect('/unauthorised');
    }
}
