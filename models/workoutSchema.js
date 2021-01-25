const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: Number,
    exercises: [
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

const Workout = mongoose.model("workout", WorkoutSchema);
module.exports = Workout;