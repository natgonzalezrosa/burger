// Imports Express application object
var express = require("express");

// And uses it to get a Router object
var router = express.Router();

// Import the model (burger.js) to use its database functions
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required

// Home page route
router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

// Route to insert a new burger
router.post("/burgers/insertOne", function(req, res) {
    burger.insertOne(["burger_name"], [req.body.name], function(result) {
        
        // Redirect to the index page
        res.redirect("/");
    });
});

// Route to update burger once it's devoured
router.put("/burgers/updateOne:id", function(req, res) {
    var condition = "id = " + req.params.id;
    console.log("condition", condition);

    burger.updateOne(
        {
            devoured: req.body.devoured
        },
        condition,
        function(result) {
            
            // Redirect to the index page
            res.redirect("/");
        }
    );
});

// Export routes for server.js to use
module.exports = router;
