require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')

//express app
const app = express()

// middleware
app.use(express.json())      // any req that comes, it checks if there is some json data in it and attaches it to request object

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/api/workouts', workoutRoutes)

// connect to db
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log('connected to mongo')

    // listen for request
    app.listen(process.env.PORT, () => {
        console.log('Server is running on port', process.env.PORT)
    })

})
.catch((err) => {
    console.log(err)
})