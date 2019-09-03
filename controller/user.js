const User = require('../model/user')

module.exports = {
    getAllUser: async (req, res, next) => {
        try {
            const allUser = await User.find({})
            if (!allUser || allUser.length < 1) return res.status(200).json({
                msg: 'No registered user'
            })
            return res.status(200).json({
                TYPE: 'GET',
                status: 200,
                count: allUser.length,
                message: 'List of all customers',
                data: allUser
            });

        } catch (error) {
            next(error)
            return res.status(500).json({
                msg: 'Internal server error'
            })
        }
    },

    deleteSingleUser: async (req, res, next) => {
        const {
            id
        } = req.params;

        try {
            const user = await User.findById({
                _id: id
            })
            if (!user) return res.status(404).json({
                msg: 'User doesn\'t exist'
            })
            user.remove()
            res.status(200).json({
                type: 'DELETE',
                status: 200,
                msg: 'User deleted successfully'
            })


        } catch (error) {
            next(error)
            return res.status(400).json({
                msg: error
            })
        }
    }
}