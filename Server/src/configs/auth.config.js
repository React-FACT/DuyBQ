const passport = require('passport');
const passportJWT = require('passport-jwt');
const { UserService } = require('../services/user.service');

let _UserService = new UserService();
let ExtractJwt = passportJWT.ExtractJwt;
let JwtStrategy = passportJWT.Strategy;
let jwtOptions = {};
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = process.env.JWT_SECRET_KEY;

let strategy = new JwtStrategy(jwtOptions, async function(jwt_payload, next) {
    let { isLoggedIn, user } = await _UserService.verifyAuthByUser(jwt_payload.id);
    if (isLoggedIn === true && user) {
        next(null, user);
    } else {
        next(null, false);
    }
});

passport.use(strategy);

module.exports = { passport };