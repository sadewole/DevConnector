const router = require('express-promise-router')();
const passport = require('passport');
const profController = require('../../controller/profile');

router
    .route('/pro/:id')
    .get(passport.authenticate('jwt', {
        session: false
    }), profController.getSingleUserPro)
    .put(
        passport.authenticate('jwt', {
            session: false
        }),
        profController.updateUserPro
    );


module.exports = router;