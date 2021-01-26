const mongoose = require("mongoose");

const workoutSchema = new mongoose.Schema({
    day: Number,
    exercise: [
     {
        type: {type: String},
        name: {type: String},
        weight: {type: Number},
        sets: {type: Number},
        reps: {type: Number},
        duration:{type: Number}
    },
     {
        type: {type: String},
        name: {type:String},
        distance: {type:Number},
        duration: {type:Number}
    }        
]
});

const Workout = mongoose.model("Workout", workoutSchema);
module.exports = workout;