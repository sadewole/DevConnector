const PostFeed = require('../model/postFeed')
const User = require('../model/user')

module.exports = {
    getNewFeed: async (req, res, next) => {
        try {
            const getPost = await PostFeed.find({}).sort('-date')
            if (!getPost || getPost.length < 1) {
                res.status(404).json({
                    msg: 'There\'s no post available'
                })
            }

            res.status(200).json({
                type: 'GET',
                status: 200,
                count: getPost.length,
                data: getPost,
                msg: 'List of all post available'
            })
        } catch (error) {
            res.status(400).json({
                msg: error
            })
        }
    },
    postNewFeed: async (req, res, next) => {
        if (req.body.text.length < 1 || req.body.text === 'undefined') {
            return res.status(400).json({
                msg: "Field must not be empty"
            })
        }
        try {
            const user = await User.findById(req.user.id).select('-password')

            const data = {
                user: req.user.id,
                name: user.name,
                text: req.body.text
            }
            const newPost = await new PostFeed(data)
            await newPost.save()

            res.status(200).json({
                type: 'POST',
                status: 200,
                msg: 'Post created successfully',
                data: newPost
            })
        } catch (error) {
            res.status(500).json({
                msg: 'Server Error'
            })
        }
    },
    deletePost: async (req, res) => {
        try {
            const post = await PostFeed.findById(req.params.id)
            if (!post) {
                return res.status(404).json({
                    msg: "Post not found"
                })
            }

            // check if its the user post
            if (req.user.id !== post.user.toString()) {
                return res.status(401).json({
                    msg: 'Unauthorize'
                })
            }

            await post.remove()
            res.status(200).json({
                msg: 'Post deleted successfully',
                type: 'DELETE',
                status: '200'
            })
        } catch (error) {
            res.status(500).json({
                msg: 'Server Error'
            })
        }
    },
    getSinglePost: async (req, res) => {
        try {
            const post = await PostFeed.findById(req.params.id)
            if (!post) {
                return res.status(404).json({
                    msg: "Post not found"
                })
            }

            res.status(200).json({
                type: 'GET',
                status: 200,
                data: post,
                msg: 'Success'
            })
        } catch (error) {
            res.status(500).json({
                msg: 'Server Error'
            })
        }
    },
    likePost: async (req, res) => {
        try {
            const post = await PostFeed.findById(req.params.id)
            // check if post exist
            if (!post) {
                return res.status(404).json({
                    msg: "Post not found"
                })
            }

            // check if already liked. if yes, then dislike
            if (post.likes.filter(like => like.user.toString() === req.user.id).length > 0) {
                const removeIndex = post.likes.map(like => like.user.toString().indexOf(req.user.id))
                await post.likes.splice(removeIndex, 1)

                await post.save()
                return res.status(200).json({
                    msg: 'Post disliked successfully'
                })
            }

            // append like if not liked 
            await post.likes.unshift({
                user: req.user.id
            })

            await post.save()
            return res.status(200).json({
                msg: 'Post liked successfully',
                type: 'PUT',
                status: 200
            })
        } catch (error) {
            res.status(500).json({
                msg: 'Server Error'
            })
        }
    },
    commentPost: async (req, res) => {
        if (req.body.text.length < 1 || req.body.text === 'undefined') {
            return res.status(400).json({
                msg: "Field must not be empty"
            })
        }

        try {
            const post = await PostFeed.findById(req.params.id)
            // check if post exist
            if (!post) {
                return res.status(404).json({
                    msg: "Post not found"
                })
            }

            const data = {
                user: req.user.id,
                name: req.user.name,
                text: req.body.text
            }

            await post.comments.unshift(data)
            await post.save()

            res.status(200).json({
                msg: 'Comment added',
                type: 'PUT',
                status: 200,
                data: post.comments
            })
        } catch (error) {
            res.status(500).json({
                msg: 'Server Error'
            })
        }
    },
    deleteComment: async (req, res) => {
        try {
            const post = await PostFeed.findById(req.params.id)

            // pull out comment
            const comment = await post.comments.find(comment => comment.id.toString() === req.params.commentId)
            // check if exist
            if (!comment) {
                return res.status(404).json({
                    msg: 'Not found'
                })
            }
            // check for authorization
            if (comment.user.toString() !== req.user.id) {
                return res.status(401).json({
                    msg: "Unauthorised"
                })
            }
            // pull out the comment index
            const removeIndex = post.comments.map(comment => comment.id.toString().indexOf(req.params.commentId))
            post.comments.splice(removeIndex, 1)

            await post.save()

            res.status(200).json({
                msg: 'Comment deleted successfully',
                type: 'Delete',
                status: 200
            })

        } catch (error) {
            console.log(error.msg)
            res.status(500).json({
                msg: 'Server Error'
            })
        }
    }
}