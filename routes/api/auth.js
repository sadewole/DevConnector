const express = require('express')
const router = require('express-promise-router')()
const UserController = require('../../controller/auth')
const {
    validateBody,
    schemas
} = require('../../middlewares/helpers')
const passport = require('passport')
require('../../passport') //bringing the passport file

// @route POST 
// @access public
// desc create a new user account
router.route('/auth/signup')
    .post(validateBody(schemas.authSchema), UserController.signup)


// @route POST 
// @access public 
// desc auth user
router.route('/auth/signin')
    .post(passport.authenticate('local', {
        session: false
    }), validateBody(schemas.signSchema), UserController.signin)

// secret api for auth.
router.route('/auth/secret')
    .get(passport.authenticate('jwt', {
        session: false
    }), UserController.secret)

module.exports = router