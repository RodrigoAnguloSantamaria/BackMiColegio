const express = require("express");
const {getProfesores,getProfesorById,postProfesor,putProfesor,deleteProfesor} = require("../controllers/profesores.controllers");


const profesoresRoutes = express.Router();

profesoresRoutes.get("/", getProfesores)
profesoresRoutes.get("/:id", getProfesorById)
profesoresRoutes.post("/", postProfesor)
profesoresRoutes.put("/:id", putProfesor)
profesoresRoutes.delete("/:id", deleteProfesor)

module.exports = profesoresRoutes;