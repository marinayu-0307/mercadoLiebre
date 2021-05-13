const express = require("express");
const path = require("path");

const app = express();

app.listen (3000,() => console.log("Server on"));

app.get("/",(req,res) => res.sendFile(path.resolve(__dirname,"./views/home.html")))

app.use (express.static(path.resolve(__dirname, './public')));