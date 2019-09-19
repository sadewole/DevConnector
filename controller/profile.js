const User = require('../model/user');

module.exports = {
    updateUserPro: async (req, res, next) => {
        const {
            id
        } = req.params;

        const pro = {
            bio: req.body.bio,
            status: req.body.status,
            location: req.body.location,
            skills: req.body.skills,
            website: req.body.website,
            company: req.body.company,
            github: req.body.github,
            facebook: req.body.facebook,
            twitter: req.body.twitter,
            instagram: req.body.instagram,
            linkedin: req.body.linkedin,
            youtube: req.body.youtube
        };

        try {
            const Pro = await User.findById({
                _id: id
            });

            if (!Pro) {
                return res.status(404).json({
                    msg: 'Error, User not found'
                });
            }

            const newPro = await User.findByIdAndUpdate(id, pro).select('-password');
            await newPro.save();
            res.status(200).json({
                type: 'PUT',
                status: 200,
                data: newPro,
                msg: 'Profile updated successfully'
            });
        } catch (error) {
            res.status(400).json({
                msg: error
            });
        }
    },

    getSingleUserPro: async (req, res, next) => {
        const {
            id
        } = req.params

        try {
            const Pro = await User.findOne({
                _id: id
            }).select('-password');

            if (!Pro || Pro.length < 1)
                return res.status(404).json({
                    msg: 'Error, User record not found'
                });
            // await Pro.select('-password');
            res.status(200).json({
                type: 'GET',
                status: 200,
                count: Pro.length,
                msg: 'List of posted profile details',
                data: Pro
            });
        } catch (error) {
            res.status(400).json({
                msg: error
            });
        }
    }
};