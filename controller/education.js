const Education = require('../model/education');

module.exports = {
  getUserEdu: async (req, res, next) => {
    try {
      const Edu = await Education.find({});
      if (!Edu || Edu.length < 1)
        return res.status(200).json({
          msg: 'No record found'
        });

      res.status(200).json({
        type: 'GET',
        status: 200,
        count: Edu.length,
        msg: 'List of all posted education details',
        data: Edu
      });
    } catch (error) {
      res.status(500).json({
        msg: error
      });
    }
  },
  postUserEdu: async (req, res, next) => {
    const edu = {
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
      const newEdu = await new Education(edu);
      await newEdu.save();
      res.status(200).json({
        type: 'POST',
        status: 200,
        data: newEdu,
        msg: 'Educational details added successfully'
      });
    } catch (err) {
      res.status(400).json({
        msg: err
      });
    }
  },

  updateUserEdu: async (req, res, next) => {
    const {
      id
    } = req.params;

    const edu = {
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
      const Edu = await Education.findById({
        _id: id
      });

      if (!Edu) {
        return res.status(404).json({
          msg: 'Data not found'
        });
      }

      const newEdu = await Education.findByIdAndUpdate(id, edu);
      await newEdu.save();
      res.status(200).json({
        type: 'PUT',
        status: 200,
        data: Edu,
        msg: 'Data updated successfully'
      });
    } catch (error) {
      res.status(500).json({
        msg: error
      });
    }
  },

  deleteUserEdu: async (req, res, next) => {
    const {
      id
    } = req.params;

    try {
      const Edu = await Education.findById({
        _id: id
      });

      if (!Edu)
        return res.status(404).json({
          msg: 'Data not found'
        });

      await Edu.remove();
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

  getSingleUserEdu: async (req, res, next) => {
    const {
      id
    } = req.params

    try {
      const Edu = await Education.find({
        user_id: id
      });
      if (!Edu || Edu.length < 1)
        return res.status(404).json({
          msg: 'No record found'
        });

      res.status(200).json({
        type: 'GET',
        status: 200,
        count: Edu.length,
        msg: 'List of posted education details',
        data: Edu
      });
    } catch (error) {
      res.status(400).json({
        msg: error
      });
    }
  }
};