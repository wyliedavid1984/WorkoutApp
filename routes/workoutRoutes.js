const Workout = require("../models/workout");

module.exports = function (app) {

    app.get("/api/workouts/range", (req, res) => {
        console.log(req.body, "api/workout range")

    });

    app.get("/api/workouts", (req, res) => {
        console.log("/api/works get")
        Workout.find({}, (err, data) => {
            if (err) throw err;
            console.log(data);
            res.json(data);
        });
    });

    app.post("/api/workouts", (req, res) => {
        console.log("api/works post");
        Workout.create({}, (err, data) => {
            if (err) throw err;
            res.json(data);
        });
    });

    app.put("/api/workouts/:id", ({body, params}, res) => {
        console.log(body, "api/workouts/:id")
        Workout.findByIdAndUpdate(params.id, {
            $push: { exercises: body }
        }, (err, data) => {
            if (err) throw err;
            res.json(data)
        })
    });
}