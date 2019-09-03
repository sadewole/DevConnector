const router = require('express-promise-router')();
const passport = require('passport');
const profController = require('../../controller/profile');

router
    .route('/pro/')
    .get(
        passport.authenticate('jwt', {
            session: false
        }),
        profController.getUserPro
    )
    .post(
        passport.authenticate('jwt', {
            session: false
        }),
        profController.postUserPro
    );

router
    .route('/pro/:id')
    .delete(
        passport.authenticate('jwt', {
            session: false
        }),
        profController.deleteUserPro
    )
    .put(
        passport.authenticate('jwt', {
            session: false
        }),
        profController.updateUserPro
    );

router.route('/user/:id/pro')
    .get(passport.authenticate('jwt', {
        session: false
    }), profController.getSingleUserPro);

module.exports = router;