const express = require('express')
const router = require('express-promise-router')()
const userController = require('../../controller/user')
const passport = require('passport')

// @route GET
// access public
// desc get all user 
router.route('/user/')
    .get(passport.authenticate('jwt', {
        session: false
    }), userController.getAllUser)


// @route DELETE
// access private
// desc delete single user 
router.route('/user/:id')
    .delete(passport.authenticate('jwt', {
        session: false
    }), userController.deleteSingleUser)


module.exports = router