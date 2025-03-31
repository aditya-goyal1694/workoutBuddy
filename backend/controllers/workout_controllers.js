const mongoose = require('mongoose')
const Workout = require('../models/workout_model')

// Get all workouts
const getWorkouts = async (req, res) => {
    const workouts = await Workout.find({}).sort({createdAt: -1})       //descending order

    res.status(200).json(workouts)
}

// Get a single workout
const getWorkout = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'Invalid workout id'})
    }

    const workout = await Workout.findById(id)

    if (!workout) {
        return res.status(404).json({ error: 'Workout not found' })
    }

    res.status(200).json(workout)
}

// Create a new workout
const createWorkout = async (req, res) => {
    const {title, reps, sets} = req.body

    let emptyFields = []
    
    if(!title) emptyFields.push('title')
    if(!reps) emptyFields.push('reps')
    if(!sets) emptyFields.push('sets')

    if (emptyFields.length > 0) {
        return res.status(400).json({ error: 'Please fill in all the fields', emptyFields})
    }
    
    try{
        const workout = await Workout.create({ title, reps, sets })
        res.status(200).json(workout)
    } catch (err) {
        res.status(400).json({error: err.message})
    }
}

// Delete a workout
const deleteWorkout = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'Invalid workout id'})
    }

    const workout = await Workout.findOneAndDelete({_id: id})

    if (!workout) {
        return res.status(404).json({ error: 'Workout not found' })
    }

    res.status(200).json(workout)

}

// Update a  workout
const updateWorkout = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'Invalid workout id'})
    }

    const workout = await Workout.findOneAndUpdate({_id: id}, {...req.body})

    if (!workout) {
        return res.status(404).json({ error: 'Workout not found' })
    }

    res.status(200).json(workout)
}


module.exports = { 
    getWorkouts,
    getWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout 
}