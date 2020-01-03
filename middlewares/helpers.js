const joi = require('joi')
const JWT = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const dotenv = require('dotenv')
dotenv.config()

module.exports = {
    /**
     * Gen hash password with bcrypt
     */
    hashPassword: (password) => {
        return bcrypt.hashSync(password, bcrypt.genSaltSync(10))
    },

    /** Compare new password with hashed version */
    comparePassword: (password, hashPassword) => {
        return bcrypt.compareSync(password, hashPassword)
    },

    /**
     * This function helps to validate users input
     */
    validateBody: (schema) => {
        return (req, res, next) => {
            const result = joi.validate(req.body, schema);

            if (result.error) return res.status(400).json({
                msg: result.error
            })

            // check if req.value
            if (!req.value) req.value = {}
            req.value['body'] = result.value
            next()
        }
    },

    schemas: {
        authSchema: joi.object().keys({
            name: joi.string().required(),
            email: joi.string().email().required(),
            password: joi.string().required()
        }),
        signSchema: joi.object().keys({
            email: joi.string().email().required(),
            password: joi.string().required()
        })
    },

    /**
     * Generate user token
     */
    signToken: (user) => {
        const token = JWT.sign({
            iss: 'secretCat',
            sub: user.id,
            iat: new Date().getTime(), // gen current date
            exp: new Date().setDate(new Date().getDate() + 1) // gen current date + 1 day
        }, process.env.JWT_Secret)

        return token
    }
}