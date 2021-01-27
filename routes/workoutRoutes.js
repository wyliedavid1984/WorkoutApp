const {
    aggregate
} = require("../models/workout");
const Workout = require("../models/workout");

module.exports = function (router) {
    // route for getting workouts to set up charts
    router.get("/api/workouts/range", (req, res) => {
        const startDate = new Date(new Date().setDate(new Date().getDate() - 7));
        console.log(startDate)
        Workout.find({
            day: {
                $gt: startDate
            }
        }, (err, data) => {
            if (err) throw err;
            res.json(data);
        })
        .limit(7);
    });
    // route to get all workout
    router.get("/api/workouts", (req, res) => {
        Workout.find({}, (err, data) => {
            if (err) throw err;
            console.log(data);
            res.json(data);
        });
    });
    // route to create new workout
    router.post("/api/workouts", (req, res) => {
        Workout.create({}, (err, data) => {
            if (err) throw err;
            res.json(data);
        });
    });
    // route to update workouts
    router.put("/api/workouts/:id", ({
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