const express = require("express");
const {getAlumnos,getAlumnoById,postAlumno,putAlumno,deleteAlumno} = require("../controllers/alumnos.controllers");
const upload = require("../../middlewares/upload.file")
const cochesRoutes = express.Router();

const alumnosRoutes = express.Router();

alumnosRoutes.get("/", getAlumnos)
alumnosRoutes.get("/:id", getAlumnoById)
alumnosRoutes.post("/", upload.single("foto"),postAlumno)
alumnosRoutes.put("/:id",upload.single("foto"), putAlumno)
alumnosRoutes.delete("/:id", deleteAlumno)

module.exports = alumnosRoutes;