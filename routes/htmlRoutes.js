// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

module.exports = function (router) {
    // gets index page
    router.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
    // gets exercise page
    router.get("/exercise", function (req, res) {
        console.log("exercise")
        res.sendFile(path.join(__dirname, "../public/exercise.html"));
    });
    // gets stats page
    router.get("/stats", function (req, res) {
        console.log("Stats")
        res.sendFile(path.join(__dirname, "../public/stats.html"))
    })
};
