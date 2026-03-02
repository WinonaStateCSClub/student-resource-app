import express from "express";

const app = express();

app.get("/api", (req, res) => {
    res.send("WE are the CCP at WINONA STATE UNIVERSITY");
});

app.listen(6969, () => {
    console.log("Running the CCP");
});