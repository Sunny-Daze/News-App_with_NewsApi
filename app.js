const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const dotenv = require("dotenv");

dotenv.config();
const port = process.env.PORT || 5000;

if (process.env.NODE_ENV === "production") {
    app.use(cors({ origin: "*" }));

    app.use(express.static("build"));
    app.get("*", (req, res) => {
        req.sendFile(path.resolve(__dirname, "build", "index.html"));
    });
}

app.listen(port, (err) => {
    if (err) return console.log(err);
    console.log("Server is running on port : ", port);
});