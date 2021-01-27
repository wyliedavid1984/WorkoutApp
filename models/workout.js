const mongoose = require("mongoose");
const opts = {
   toJSON: {
      virtuals: true
   }
};

const WorkoutSchema = new mongoose.Schema({
   exercises: [{
      type: {
         type: String,
         required: ""
      },
      name: {
         type: String,
         trim: true,
         required: ""
      },
      weight: {
         type: Number,
         required: ""
      },
      sets: {
         type: Number
      },
      reps: {
         type: Number,
         required: ""
      },

      distance: {
         type: Number,
         required: ""
      },
      duration: {
         type: Number,
         required: ""
      }
   }],
   day: {
      type: Date,
      default: new Date(Date.now())
   },

}, opts);


WorkoutSchema.virtual("totalDuration").get(function () {
   return this.exercises.reduce((totalDur, exercise) => {
     return totalDur + exercise.duration
   }, 0)
})


const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;