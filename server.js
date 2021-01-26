const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();
const router = express.Router();

// Connection to db
const dbURI = "mongodb+srv://wyliedavid1984:DatabasePass!1@cluster0.tsfe6.mongodb.net/Workouts?retryWrites=true&w=majority";

mongoose.connect("mongodb://localhost:27017/workoutdb" || dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection
.once("open", () => console.log("Connected to database"),
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`)))
.on("err", (err) => {
    console.log(err)});

// middleware
app.use(express.json());
app.use(express.static("public"));
app.use(morgan("dev"));


require("./routes/htmlRoutes.js")(router);
require("./routes/workoutRoutes.js")(router);

app.use(router);