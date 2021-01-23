const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: new Date().setDate(new Date().getDate() - 10),
    exercises: {
        name: String,
        duration: Int,
        weight: Int,
        reps: Int,
        sets: Int
    }
});

module.exports = workoutSchema;