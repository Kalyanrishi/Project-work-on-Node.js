const express =  require("express");
var app = express();
app.get("/", function (request, response) {
    response.send("Hi I am implementing my first Node.js project!!");
});
app.listen(10000, function () {
    console.log("Started Node.js application on port %d", 10000);
});