const express = require("express");
const path = require("path");
// const chalk = require("chalk");
const hbs = require("hbs");
// const validator = require("validator");

// middleware:--
// const checkUrl = function (req, res, next) {
//     console.log("current url is ", req.originalUrl)
//     next()      
// } 
// app.use(checkUrl);

const { registerPartials } = require("hbs");
const { default: validator } = require("validator");

const app = express();

const staticpath = path.join(__dirname, "../public");
const partialpath = path.join(__dirname, "../templates/partials")
const templatepath = path.join(__dirname, "../templates/views")

app.use(express.urlencoded({ extended: true }));

const port = 5000;

app.use(express.static(staticpath));

app.set("view engine", "hbs");

app.set("views", templatepath);
hbs.registerPartials(partialpath);

// home
app.get("/", (req, res) => {
    res.render("home");
});
   
// fevicon         
app.get("/fevicon", (req, res) => {
    res.render("fevicon");
});

// about
app.get("/about", (req, res) => {
    res.render("about");
});

// careers
app.get("/careers", (req, res) => {
    res.render("careers");
});

// contact
app.get("/contact", (req, res) => {
    res.render("contact");
});

// services
app.get("/services", (req, res) => {
    res.render("services");
});

// admin
app.get("/admin", (req, res) => {
    res.render("admin");
});

//user   
app.get("/user", (req, res) => {
    res.render("user");
});

// user registration
app.get("/register", (req, res) => {
    res.render("register");
});

// forgot password
app.get("/forgot", (req, res) => {
    res.render("forgot");
});

// slide
app.get("/slide", (req, res) => {
    res.render("slide");
});

app.listen(port, () => {
    console.log(`Server is running at port no: ${port}`);
});

// const mail = validator.isEmail("chetan@gmail.com");
// console.log(res);
                       
// console.log("hello chetan");
// console.log(chalk.green("hello chetan"));