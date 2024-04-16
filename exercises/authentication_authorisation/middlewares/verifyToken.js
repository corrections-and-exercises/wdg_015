import jwt from 'jsonwebtoken';
export function verifyToken(req, res, next) {
    const {
        query: { token },
    } = req;
    const isVerified = jwt.verify(
        token,
        process.env.JWT_SECRET,
        (err, user) => {
            if (err) return res.send('No surprise for you!');
            req.user = {};
            req.user.admin = true;
            next();
        }
    );
}
