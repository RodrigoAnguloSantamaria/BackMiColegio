const express = require("express");
const { login,register} = require("../controllers/users.controllers");


const usersRoutes = express.Router();


usersRoutes.post("/login", login)
usersRoutes.post("/register", register)


module.exports = usersRoutes;