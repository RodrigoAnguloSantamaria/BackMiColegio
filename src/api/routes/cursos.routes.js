const express = require("express");
const {getCursos,getCursoById,postCurso,putCurso,deleteCurso} = require("../controllers/cursos.controllers");


const cursosRoutes = express.Router();

cursosRoutes.get("/", getCursos)
cursosRoutes.get("/:id", getCursoById)
cursosRoutes.post("/", postCurso)
cursosRoutes.put("/:id", putCurso)
cursosRoutes.delete("/:id", deleteCurso)

module.exports = cursosRoutes;