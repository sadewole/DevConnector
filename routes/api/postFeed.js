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
    .put(postFeedController.updatePostStatus)
    .delete(postFeedController.deletePost)

router.route('/post/:id/like')
    .post(postFeedController.likePost)

router.route('/post/:id/dislike')
    .post(postFeedController.dislikePost)
module.exports = router