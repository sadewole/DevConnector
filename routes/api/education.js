const router = require('express-promise-router')();
const passport = require('passport');
const eduController = require('../../controller/education');

router
  .route('/edu/')
  .get(
    passport.authenticate('jwt', {
      session: false
    }),
    eduController.getUserEdu
  )
  .post(
    passport.authenticate('jwt', {
      session: false
    }),
    eduController.postUserEdu
  );

router
  .route('/edu/:id')
  .delete(
    passport.authenticate('jwt', {
      session: false
    }),
    eduController.deleteUserEdu
  )
  .put(
    passport.authenticate('jwt', {
      session: false
    }),
    eduController.updateUserEdu
  );

router.route('/user/:id/edu')
  .get(passport.authenticate('jwt', {
    session: false
  }), eduController.getSingleUserEdu);

module.exports = router;