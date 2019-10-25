const router = require('express-promise-router')()
const postFeedController = require('../../controller/postFeed')
const passport = require('passport')

router.route('/post/')
    .get(passport.authenticate('jwt', {
        session: false
    }), postFeedController.getNewFeed)
    .post(passport.authenticate('jwt', {
        session: false
    }), postFeedController.postNewFeed)

router.route('/post/:id')
    .get(passport.authenticate('jwt', {
        session: false
    }), postFeedController.getSinglePost)
    .delete(passport.authenticate('jwt', {
        session: false
    }), postFeedController.deletePost)

router.route('/post/like/:id')
    .put(passport.authenticate('jwt', {
        session: false
    }), postFeedController.likePost)

router.route('/post/comment/:id')
    .put(passport.authenticate('jwt', {
        session: false
    }), postFeedController.commentPost)

router.route('/post/comment/:id/:commentId')
    .delete(passport.authenticate('jwt', {
        session: false
    }), postFeedController.deleteComment)

module.exports = router