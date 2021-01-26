// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

module.exports = function (router) {
    router.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/views/index.html"));
    });

    router.get("/exercise", function (req, res) {
        console.log("exercise")
        res.sendFile(path.join(__dirname, "../public/views/exercise.html"));
    });

    router.get("/stats", function (req, res) {
        console.log("Stats")
        res.sendFile(path.join(__dirname, "../public/views/stats.html"))
    })
};
