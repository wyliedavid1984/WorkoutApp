const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: new Date().setDate(new Date().getDate() - 10),
    exercises: [
    "resistance": {
        name: {type: String},
        weight: {type: Number},
        sets: {type: Number},
        reps: {type: Number},
        duration:{type: Number}
    },
    "cardio": {
        name: {type:String},
        distance: {type:Number},
        duration: {type:Number}
    }        
]
});

const Workout = mongoose.model("workout", workoutSchema);
module.exports = Workout;