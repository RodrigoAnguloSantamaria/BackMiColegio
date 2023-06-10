const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const asignatura = require("../api/models/asignatura.model");

DB_URL = process.env.DB_URL;

const baseAsignaturas = [
    
    {
        nombre: "Matematicas",
        
    },
    {
        nombre: "Lenguaje",
        
    },
    {
        nombre: "Sociales",
        
    },
    {
        nombre: "Naturales",
        
    },
    {
        nombre: "Etica",
        
    },
    {
        nombre: "Ingles",
        
    },
    {
        nombre: "Frances",
        
    },
    {
        nombre: "Quimica",
        
    },
    {
        nombre: "Biologia",
        
    },
    {
        nombre: "Gimnasia",
        
    },
    {
        nombre: "Religion",
        
    },
    {
        nombre: "Filosofia",
        
    },
    {
        nombre: "Informatica",
        
    },
    {
        nombre: "Plastica",
        
    },

    
];

mongoose.connect(DB_URL)

// comprueba si hay asignaturas y los borra !!!OJO!!!
.then (async () =>{
    const allAsignaturas = await asignatura.find();
    if (allAsignaturas.length > 0){
        await asignatura.collection.drop();
        console.log("Borrados todos los asignaturas")
    }

})
.catch((error => console.log("error borrando asignaturas", error)))

.then (async () =>{
    const asignaturasMap = baseAsignaturas.map((baseAsignatura) => new asignatura(baseAsignatura))
    await asignatura.insertMany(asignaturasMap);
    console.log("Asignaturas insertados");
})
.catch((error => console.log("error insertando asignaturas", error)))

.finally(()=> mongoose.disconnect());
