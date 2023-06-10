const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const alumno = require("../api/models/alumno.model");

DB_URL = process.env.DB_URL;

const alumnos = [
    
    {
        nombre: "Alberto",
        apellidos: "Martinez",
        edad: 10,
        curso: [],
        profesores: [],
        asignaturas: [],
        contacto: ["659555555","alberto@gmail.com"],
        foto: ""
    },
    {
        nombre: "Rodrigo",
        apellidos: "Angulo",
        edad: 10,
        curso: [],
        profesores: [],
        asignaturas: [],
        contacto: ["659444444"],
        foto: ""
    },
    {
        nombre: "Ricardo",
        apellidos: "Gonzalez",
        edad: 10,
        curso: [],
        profesores: [],
        asignaturas: [],
        contacto: ["659666666","ricar33@gmail.com"],
        foto: ""
    },
    {
        nombre: "Maria",
        apellidos: "Perez",
        edad: 10,
        curso: [],
        profesores: [],
        asignaturas: [],
        contacto: ["659111111"],
        foto: ""
    },
    {
        nombre: "Esther",
        apellidos: "Sanchez",
        edad: 12,
        curso: [],
        profesores: [],
        asignaturas: [],
        contacto: ["659777777","uno@oros.es"],
        foto: ""
    },
    {
        nombre: "Lucia",
        apellidos: "Santamaria",
        edad: 12,
        curso: [],
        profesores: [],
        asignaturas: [],
        contacto: ["659555544"],
        foto: ""
    },
    {
        nombre: "Isamel",
        apellidos: "Martinez",
        edad: 9,
        curso: [],
        profesores: [],
        asignaturas: [],
        contacto: ["659554455","papa@colegio.es"],
        foto: ""
    },
    {
        nombre: "Diego",
        apellidos: "Orive",
        edad: 9,
        curso: [],
        profesores: [],
        asignaturas: [],
        contacto: ["659559977","mama@colegio.es"],
        foto: ""
    },
    {
        nombre: "Donovan",
        apellidos: "Schilachi",
        edad: 9,
        curso: [],
        profesores: [],
        asignaturas: [],
        contacto: ["659555500","abuelo@colegio.es"],
        foto: ""
    },
    {
        nombre: "Elena",
        apellidos: "Cordoba",
        edad: 9,
        curso: [],
        profesores: [],
        asignaturas: [],
        contacto: ["688555555"],
        foto: ""
    },
  
    
    
];

mongoose.connect(DB_URL)

// comprueba si hay alumnos y los borra !!!OJO!!!
.then (async () =>{
    const allAlumnos = await alumno.find();
    if (allAlumnos.length > 0){
        await alumno.collection.drop();
        console.log("Borrados todos los alumnos")
    }

})
.catch((error => console.log("error borrando alumnos", error)))

.then (async () =>{
    const alumnosMap = alumnos.map((alumn) => new alumno(alumn))
    await alumno.insertMany(alumnosMap);
    console.log("Alumnos insertados");
})
.catch((error => console.log("error insertando alumnos", error)))

.finally(()=> mongoose.disconnect());
