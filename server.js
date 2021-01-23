const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

const dbURI = "mongodb+srv://wyliedavid1984:DatabasePass!1@cluster0.tsfe6.mongodb.net/Workouts?retryWrites=true&w=majority";
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(results => {
    console.log("Connected to database"), app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
})
.catch(err => {console.log(err)});

app.use(express.static("public"));
app.use(morgan("dev"));
