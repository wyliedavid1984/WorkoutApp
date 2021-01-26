const mongoose = require("mongoose");

const WorkoutSchema = new mongoose.Schema({
   day: Date,
   exercise: [{
      weight: {
         type: Number
      },
      sets: {
         type: Number
      },
      reps: {
         type: Number
      },
      type: {
         type: String
      },
      name: {
         type: String,
         trim: true
      },
      distance: {
         type: Number
      },
      duration: {
         type: Number
      }
   }]
});

const Workout = mongoose.model("Workout", WorkoutSchema);
module.exports = Workout;