const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const {
    db
} = require("../models/workoutSchema");

module.exports = function (router) {

    router.get("/api/workouts/range", (req, res) => {
        console.log("api/workout range")
    });

    router.get("/api/workouts", (req, res) => {
        console.log("/api/works get")
        db.Workout.find({}, (err, data) => {
            if (err) {
                res.send(err);
            } else {
                res.json(data);
            }
        })
    });

    router.post("/api/workouts", (req, res) => {
        console.log(req.body.type, "api/works post");
        if ("resistance" === req.body.type) {
            db.Workout.insert(req.body, (err, data) =>{
                if(err){
                    res.send(err)
                }else{
                    res.json(data);
                }
            })
        }
    });

    router.put("/api/workouts/:id", (req, res) => {
        console.log(req.body.type, "api/workouts/:id")
        if ("resistance" === req.body.workoutType) {
            db.Workout.insert({
                _id: mongoose.ObjectId(req.params.id)
            }, {
                $set: {
                    name
                }
            })
        }
    });
}