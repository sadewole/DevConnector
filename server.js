const express = require('express')
const bodyParser = require('body-parser')
const logger = require('morgan')
const cors = require('cors')
const db = require('./db')

// connected to database
db()

const app = express();

// middlewares
app.use(cors())
app.use(logger('dev'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));


app.use('/api/v1', require('./routes/api/auth'))
app.use('/api/v1', require('./routes/api/user'))
app.use('/api/v1', require('./routes/api/education'))
app.use('/api/v1', require('./routes/api/experience'))
app.use('/api/v1', require('./routes/api/profile'))
// app.use('/api/v1', require('./routes/api/postFeed'))



const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`)
})