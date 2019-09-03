const Profile = require('../model/profile');

module.exports = {
    getUserPro: async (req, res, next) => {
        try {
            const Pro = await Profile.find({});
            if (!Pro || Pro.length < 1)
                return res.status(200).json({
                    msg: 'No record found'
                });

            res.status(200).json({
                type: 'GET',
                status: 200,
                count: Pro.length,
                msg: 'List of all posted profile details',
                data: Pro
            });
        } catch (error) {
            res.status(500).json({
                msg: error
            });
        }
    },
    postUserPro: async (req, res, next) => {
        const pro = {
            user_id: req.user.id,
            school: req.body.school,
            study: req.body.study,
            degree: req.body.degree,
            startDate: req.body.startDate,
            endDate: req.body.endDate,
            currentDate: req.body.currentDate,
            description: req.body.description
        };

        try {
            const newPro = await new Profile(pro);
            await newPro.save();
            res.status(200).json({
                type: 'POST',
                status: 200,
                data: newPro,
                msg: 'Data added successfully'
            });
        } catch (err) {
            res.status(400).json({
                msg: err
            });
        }
    },

    updateUserPro: async (req, res, next) => {
        const {
            id
        } = req.params;

        const pro = {
            user_id: req.user.id,
            school: req.body.school,
            study: req.body.study,
            degree: req.body.degree,
            startDate: req.body.startDate,
            endDate: req.body.endDate,
            currentDate: req.body.currentDate,
            description: req.body.description
        };

        try {
            const Pro = await Profile.findById({
                _id: id
            });

            if (!Pro) {
                return res.status(404).json({
                    msg: 'Data not found'
                });
            }

            const newPro = await Profile.findByIdAndUpdate(id, pro);
            await newPro.save();
            res.status(200).json({
                type: 'PUT',
                status: 200,
                data: Pro,
                msg: 'Data updated successfully'
            });
        } catch (error) {
            res.status(500).json({
                msg: error
            });
        }
    },

    deleteUserPro: async (req, res, next) => {
        const {
            id
        } = req.params;

        try {
            const Pro = await Profile.findById({
                _id: id
            });

            if (!Pro)
                return res.status(404).json({
                    msg: 'Data not found'
                });

            await Pro.remove();
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
    },

    getSingleUserPro: async (req, res, next) => {
        const {
            id
        } = req.params

        try {
            const Pro = await Profile.findOne({
                user_id: id
            });
            if (!Pro || Pro.length < 1)
                return res.status(404).json({
                    msg: 'No record found'
                });

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