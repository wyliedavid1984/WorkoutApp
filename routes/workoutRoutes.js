const { aggregate } = require("../models/workout");
const Workout = require("../models/workout");

module.exports = function (app) {
    // route for getting workouts to set up charts
    app.get("/api/workouts/range", (req, res) => {
        Workout.find({}, (err, data) => {
            if (err) throw err;
            res.json(data);
        }).limit(7);
    });
    // route to get all workout
    app.get("/api/workouts", (req, res) => {
        Workout.find({}, (err, data) => {
            if (err) throw err;
            console.log(data);
            res.json(data);
        });
    });
    // route to create new workout
    app.post("/api/workouts", (req, res) => {
        Workout.create({}, (err, data) => {
            if (err) throw err;
            res.json(data);
        });
    });
    // route to update workouts
    app.put("/api/workouts/:id", ({
        body,
        params
    }, res) => {
        Workout.findByIdAndUpdate(params.id, {
            $push: {
                exercises: body
            }
        }, {
            new: true
        }, (err, data) => {
            if (err) throw err;
            res.json(data)
        })
    });
}