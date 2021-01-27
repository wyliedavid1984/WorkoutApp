// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

module.exports = function (app) {
    // gets index page
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
    // gets exercise page
    app.get("/exercise", function (req, res) {
        console.log("exercise")
        res.sendFile(path.join(__dirname, "../public/exercise.html"));
    });
    // gets stats page
    app.get("/stats", function (req, res) {
        console.log("Stats")
        res.sendFile(path.join(__dirname, "../public/stats.html"))
    })
};
