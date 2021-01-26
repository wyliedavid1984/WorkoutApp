const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();
const router = express.Router();

// Connection to db
// const dbURI = "mongodb+srv://wyliedavid1984:DatabasePass!1@cluster0.tsfe6.mongodb.net/Workouts?retryWrites=true&w=majority";

mongoose.connect(process.env.MONGODB_URI||"mongodb://localhost:27017/workout" , {
    useNewUrlParser: true,
    useFindAndModify: false
});

// middleware
app.use(express.json());
app.use(express.static("public"));
app.use(morgan("dev"));

//routes
require("./routes/htmlRoutes.js")(app);
require("./routes/workoutRoutes.js")(app);

//listening for connection
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));