// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

module.exports = function (router) {
    router.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../index.html"));
    });

    router.get("/exercise", function (req, res) {
        console.log("exercise")
        res.sendFile(path.join(__dirname, "../exercise.html"));
    });

    router.get("/stats", function (req, res) {
        console.log("Stats")
        res.sendFile(path.join(__dirname, "../stats.html"))
    })
};
