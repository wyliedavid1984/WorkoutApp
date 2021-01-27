const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();
const router = express.Router();

// connecting to DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/workout", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

// middleware
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json());
app.use(express.static("public"));
app.use(morgan("dev"));

//routes
require("./routes/htmlRoutes.js")(app);
require("./routes/workoutRoutes.js")(app);

//listening for connection
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));