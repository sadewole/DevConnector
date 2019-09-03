const Experience = require('../model/experience');

module.exports = {
    getUserExp: async (req, res, next) => {
        try {
            const Exp = await Experience.find({});
            if (!Exp || Exp.length < 1)
                return res.status(200).json({
                    msg: 'No record found'
                });

            res.status(200).json({
                type: 'GET',
                status: 200,
                count: Exp.length,
                msg: 'List of all posted experience details',
                data: Exp
            });
        } catch (error) {
            res.status(500).json({
                msg: error
            });
        }
    },
    postUserExp: async (req, res, next) => {
        const Exp = {
            user_id: req.user.id,
            job: req.body.job,
            company: req.body.company,
            location: req.body.location,
            startDate: req.body.startDate,
            endDate: req.body.endDate,
            currentDate: req.body.currentDate,
            description: req.body.description
        };

        try {
            const newExp = await new Experience(Exp);
            await newExp.save();
            res.status(200).json({
                type: 'POST',
                status: 200,
                data: newExp,
                msg: 'Data added successfully'
            });
        } catch (err) {
            res.status(400).json({
                msg: err
            });
        }
    },

    updateUserExp: async (req, res, next) => {
        const {
            id
        } = req.params;

        const exp = {
            user_id: req.user.id,
            job: req.body.job,
            company: req.body.company,
            location: req.body.location,
            startDate: req.body.startDate,
            endDate: req.body.endDate,
            currentDate: req.body.currentDate,
            description: req.body.description
        };

        try {
            const Exp = await Experience.findById({
                _id: id
            });

            if (!Exp) {
                return res.status(404).json({
                    msg: 'Data not found'
                });
            }

            const newExp = await Experience.findByIdAndUpdate(id, exp);
            await newExp.save();
            res.status(200).json({
                type: 'PUT',
                status: 200,
                data: Exp,
                msg: 'Data updated successfully'
            });
        } catch (error) {
            res.status(500).json({
                msg: error
            });
        }
    },

    deleteUserExp: async (req, res, next) => {
        const {
            id
        } = req.params;

        try {
            const Exp = await Experience.findById({
                _id: id
            });

            if (!Exp)
                return res.status(404).json({
                    msg: 'Data not found'
                });

            await Exp.remove();
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

    getSingleUserExp: async (req, res, next) => {
        const {
            id
        } = req.params

        try {
            const Exp = await Experience.find({
                user_id: id
            });
            if (!Exp || Exp.length < 1)
                return res.status(404).json({
                    msg: 'No record found'
                });

            res.status(200).json({
                type: 'GET',
                status: 200,
                count: Exp.length,
                msg: 'List of posted experience details',
                data: Exp
            });
        } catch (error) {
            res.status(400).json({
                msg: error
            });
        }
    }
};