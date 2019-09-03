const router = require('express-promise-router')();
const passport = require('passport');
const expController = require('../../controller/experience');

router
    .route('/exp/')
    .get(
        passport.authenticate('jwt', {
            session: false
        }),
        expController.getUserExp
    )
    .post(
        passport.authenticate('jwt', {
            session: false
        }),
        expController.postUserExp
    );

router
    .route('/exp/:id')
    .delete(
        passport.authenticate('jwt', {
            session: false
        }),
        expController.deleteUserExp
    )
    .put(
        passport.authenticate('jwt', {
            session: false
        }),
        expController.updateUserExp
    );

router.route('/user/:id/exp')
    .get(passport.authenticate('jwt', {
        session: false
    }), expController.getSingleUserExp);

module.exports = router;