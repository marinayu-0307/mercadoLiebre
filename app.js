const express = require("express");
const path = require("path");

const app = express();

app.listen (3000,() => console.log("Server on"));

app.get("/",(req,res) => res.sendFile(path.resolve(__dirname,"./views/home.html")))
app.get("/register",(req,res) => res.sendFile(path.resolve(__dirname,"./views/register.html")))
app.get("/login",(req,res) => res.sendFile(path.resolve(__dirname,"./views/login.html")))
app.get("/prueba",(req,res) => res.sendFile(path.resolve(__dirname,"./views/prueba.html")))


app.use (express.static(path.resolve(__dirname, './public')));