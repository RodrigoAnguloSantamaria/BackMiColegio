const express = require("express");
const {getAlumnos,getAlumnoById,postAlumno,putAlumno,deleteAlumno} = require("../controllers/alumnos.controllers");


const alumnosRoutes = express.Router();

alumnosRoutes.get("/", getAlumnos)
alumnosRoutes.get("/:id", getAlumnoById)
alumnosRoutes.post("/", postAlumno)
alumnosRoutes.put("/:id", putAlumno)
alumnosRoutes.delete("/:id", deleteAlumno)

module.exports = alumnosRoutes;