const PostFeed = require('../model/postFeed')

module.exports = {
    getNewFeed: async (req, res, next) => {
        try {
            const getPost = await PostFeed.find({})
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
    likePost: async (req, res, next) => {
        try {
            const isLike = PostFeed(req.user)
            if (isLike) {

            }



        } catch (error) {
            res.status(400).json({
                msg: error
            })
        }
    },

    postNewFeed: async (req, res, next) => {
        try {
            const data = {
                user_id: req.user.id,
                name: req.body.name
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
            res.status(400).json({
                msg: error
            })
        }
    },
    // in progress
    updatePostStatus: async (req, res, next) => {
        const {
            id
        } = req.params;
        const {
            liked,
            disliked
        } = req.body
        const data = {
            liked,
            disliked
        }

        try {
            const post = await PostFeed.findById({
                _id: id
            });

            if (!post)
                return res.status(404).json({
                    msg: 'Data not found'
                });
            const updatePost = new PostFeed(data)
            await updatePost.save()
            res.status(200).json({
                type: 'PUT',
                status: 200,
                msg: 'Post updated successfully',
                data: newPost
            })

        } catch (error) {
            res.status(400).json({
                msg: error
            })
        }
    },
    deletePost: async (req, res, next) => {
        const {
            id
        } = req.params;

        try {
            const post = await PostFeed.findById({
                _id: id
            });

            if (!post)
                return res.status(404).json({
                    msg: 'Data not found'
                });

            await post.remove();
            res.status(200).json({
                type: 'DELETE',
                status: 200,
                msg: 'Data deleted successfully'
            });
        } catch (error) {
            res.status(500).json({
                msg: error
            });
        }
    }
}