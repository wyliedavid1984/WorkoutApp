const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
// const Workout = require("./models/workout");

module.exports = function (router) {

    router.get("/api/workouts/range", (req, res) => {
        console.log(req.body, "api/workout range")
    });

    router.get("/api/workouts", (req, res) => {
        console.log(req.body, "/api/works get")
        Workout.find({}, (err, data) => {
            if (err) {
                res.send(err);
            } else {
                res.json(data);
            }
        })
    });

    router.post("/api/workouts", (req, res) => {
        console.log(req.body, "api/works post");
        if ("resistance" === req.body.type) {
            const resistance = new Workout({
                type: req.body.type,
                name: req.body.name,
                duration: req.body.duration,
                weight: req.body.weight,
                reps: req.body.reps,
                sets: req.body.sets
            }, (err, data) => {
                if (err) {
                    res.send(err)
                } else {
                    res.json(data)
                };
            });
            resistance.save();
        } else {
            const cardio = new Workout({
                type: req.body.type,
                name: req.body.name,
                duration: req.body.duration,
                distance: req.body.distance
            }, (err, data) => {
                if (err) {
                    res.send(err)
                } else {
                    res.json(data)
                };
            });
            cardio.save();
        }

    });

    router.put("/api/workouts/:id", (req, res) => {
        console.log(req.body, "api/workouts/:id")
        if ("resistance" === req.body.workoutType) {
            Workout.update({
                _id: mongoose.ObjectId(req.params.id)
            }, {
                $set: {
                    type: req.body.type,
                    name: req.body.name,
                    duration: req.body.duration,
                    weight: req.body.weight,
                    reps: req.body.reps,
                    sets: req.body.sets
                }
            }, (err, data) => {
                if (err) {
                    res.send(err)
                } else {
                    res.json(data)
                };
            })
        } else {
            Workout.update({
                _id: mongoose.ObjectId(req.params.id)
            }, {
                $set: {
                    type: req.body.type,
                    name: req.body.name,
                    duration: req.body.duration,
                    distance: req.body.distance
                }
            }, (err, data) => {
                if (err) {
                    res.send(err)
                } else {
                    res.json(data)
                };
            })
        }
    });
}