const express = require('express');
const app = express();

//links the css to the index page
app.use("/css", express.static("../css"));
app.use("/img", express.static("../img"));
app.use("/js", express.static("../js"));

app.get('/', function (req, res) {
    res.sendFile("index.html", {
        root: "../"
    });
})

app.use(function (req, res, next) {
    res.status(404).send("Nothing there, 404.");
})

// RUN SERVER
let port = 8000;
app.listen(port, function () {
    console.log('Example app listening on port ' + port + '!');
})