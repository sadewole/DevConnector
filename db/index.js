const mongoose = require('mongoose')
const mongoURI = 'mongodb://localhost:27017/dev-connect';

const connectDB = async () => {
    try {
        // connect to mongodb
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useFindAndModify: false,
            useCreateIndex: true
        });

        console.log('Connected to DB')
    } catch (err) {
        console.error(err.message);
        process.exit(1)
    }
}

module.exports = connectDB