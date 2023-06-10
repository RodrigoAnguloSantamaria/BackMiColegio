const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const curso = require("../api/models/curso.model");

DB_URL = process.env.DB_URL;

const baseCursos = [
    
    {
        nombre: "1-A",
        
    },
    {
        nombre: "1-B",
        
    },
    {
        nombre: "2-A",
        
    },
    {
        nombre: "2-B",
        
    },
    {
        nombre: "3-A",
        
    },
    {
        nombre: "3-B",
        
    },
    {
        nombre: "4-A",
        
    },
    {
        nombre: "4-B",
        
    },
    {
        nombre: "5-A",
        
    },
    {
        nombre: "5-B",
        
    },
    {
        nombre: "5-C",
        
    },
    {
        nombre: "6-A",
        
    },
    {
        nombre: "6-B",
        
    },
    {
        nombre: "6-C",
        
    },

    
];

mongoose.connect(DB_URL)

// comprueba si hay cursos y los borra !!!OJO!!!
.then (async () =>{
    const allCursos = await curso.find();
    if (allCursos.length > 0){
        await curso.collection.drop();
        console.log("Borrados todos los cursos")
    }

})
.catch((error => console.log("error borrando cursos", error)))

.then (async () =>{
    const cursosMap = baseCursos.map((baseCurso) => new curso(baseCurso))
    await curso.insertMany(cursosMap);
    console.log("Cursos insertados");
})
.catch((error => console.log("error insertando cursos", error)))

.finally(()=> mongoose.disconnect());
