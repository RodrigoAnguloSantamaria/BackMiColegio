const express = require("express");
const {getAsignaturas,getAsignaturaById,postAsignatura,putAsignatura,deleteAsignatura} = require("../controllers/asignaturas.controllers");


const asignaturasRoutes = express.Router();

asignaturasRoutes.get("/", getAsignaturas)
asignaturasRoutes.get("/:id", getAsignaturaById)
asignaturasRoutes.post("/", postAsignatura)
asignaturasRoutes.put("/:id", putAsignatura)
asignaturasRoutes.delete("/:id", deleteAsignatura)

module.exports = asignaturasRoutes;