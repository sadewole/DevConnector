const User = require('../model/user')
const {
    signToken,
    hashPassword
} = require('../middlewares/helpers')

module.exports = {
    signup: async (req, res, next) => {
        let {
            name,
            email,
            password
        } = req.value.body
        email = email.toLowerCase()
        password = hashPassword(password)

        try {

            const foundUser = await User.findOne({
                email
            })
            if (foundUser) return res.status(403).json({
                msg: 'Email already exit'
            })

            const newUser = await new User({
                name,
                email,
                password
            })

            await newUser.save()

            // Respond with token
            const token = signToken(newUser)


            res.status(200).json({
                type: 'POST',
                status: 200,
                msg: 'User Created Successfully',
                data: {
                    name,
                    email,
                    password
                },
                token
            })
        } catch (error) {
            res.status(400).json({
                msg: error
            })
        }
    },

    signin: async (req, res, next) => {
        if (req.user) {
            const token = signToken(req.user)

            res.status(200).json({
                type: 'POST',
                status: 200,
                msg: 'Login successfully',
                data: req.user,
                token
            })
        }
    },

    secret: async (req, res, next) => {
        res.status(200).json({
            TYPE: 'GET',
            data: req.user,
            status: 200,
            secret: 'resource'
        });
    },
}