const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: Number,
    exercise: [
     {
        type: {type: String},
        name: {type: String},
        weight: {type: Number},
        set: {type: Number},
        rep: {type: Number},
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