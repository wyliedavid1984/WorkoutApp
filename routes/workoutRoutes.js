const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const Workout = require("../models/workout.js");

module.exports = function (router) {

    router.get("/api/workouts/range", (req, res) => {
        console.log(req.body, "api/workout range")

    });

    router.get("/api/workouts", ({ body }, res) => {
        console.log(body, "/api/works get")
        Workout.find({})
            .then(workoutData => {
                res.json(workoutData);
            })
            .catch(err => {
                res.status.json(err);
            })
    });

    router.post("/api/workouts", ({body}, res) => {
        console.log(body, "api/works post");
        Workout.create({})
            .then(dbWorkout => {
                res.json(dbWorkout)
            })
            .catch(err => {
                res.json(err)
            })

    });

    router.put("/api/workouts/:id", ({
        body
    }, res) => {
        console.log(body, "api/workouts/:id")

        Workout.update({

        });
    })
}