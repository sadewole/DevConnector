const passport = require('passport')
const JwtStrategy = require('passport-jwt').Strategy
const LocalStrategy = require('passport-local').Strategy
const {
    ExtractJwt
} = require('passport-jwt')
const User = require('./model/user')
const {
    comparePassword
} = require('./middlewares/helpers')
const dotenv = require('dotenv')
dotenv.config()

// JSON web token strategy
passport.use('jwt', new JwtStrategy({
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: process.env.JWT_Secret
}, async (payload, done) => {
    try {
        // find the user specified in token
        const user = await User.findById(payload.sub)
        // if user doesn't exist, handle it
        if (!user) return done(null, false)


        // otherwise, return the user
        return done(null, user)
    } catch (error) {
        return done(error, false)
    }
}))


// Local strategy
passport.use('local', new LocalStrategy({
    usernameField: 'email'
}, async (email, password, done) => {
    try {
        // find the user given the email
        const user = await User.findOne({
            email
        })

        // if not, handle it
        if (!user) return done(null, false)

        // check if the password is correct
        const isValid = await comparePassword(password, user.password)
        if (!isValid) return done(null, false)

        // return user
        return done(null, user)
    } catch (error) {
        return done(error, false)
    }
}))