const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const { db } = require("../models/workoutSchema");

module.exports = function (router) {

    router.get("/api/workouts/range", (req, res) => {

    });

    router.get("/api/workouts", (req, res) => {
        db.Workouts.find({}, (err, data) =>{
            if(err){
                res.send(err);
            }else{
                res.json(data);
            }
        })
    });

    router.post("/api/workouts", (req, res) => {
        console.log(req.body);
        if("resistance" === req.body.workoutType )
        db.notes.insert
    });

    router.put("/api/workouts/:id", (req, res) => {
        console.log(req.body)
        // db.Workouts.
    });
}