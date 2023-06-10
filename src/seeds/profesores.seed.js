const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const profesor = require("../api/models/profesor.model");

DB_URL = process.env.DB_URL;

const profesors = [
    
    {
        nombre: "Hermenegildo",
        apellidos: "Martinez",
        contacto: ["629555555","hermen44@gmail.com"],
        asignaturas: [],
        foto: ""
    },
    {
        nombre: "Basilio",
        apellidos: "Arengon",
        contacto: ["629514468","basilio1980@gmail.com"],
        asignaturas: [],
        foto: ""
    },
    {
        nombre: "Carmen",
        apellidos: "Arpen",
        contacto: ["618779955","carmenar@colegio.com"],
        asignaturas: [],
        foto: ""
    },
    {
        nombre: "Santiago",
        apellidos: "Lendoiro",
        contacto: ["622669988","santi33@gmail.com"],
        asignaturas: [],
        foto: ""
    },
    {
        nombre: "Maria",
        apellidos: "Indigo",
        contacto: ["722559966","maria-indigo@colegio.com"],
        asignaturas: [],
        foto: ""
    },
    {
        nombre: "Alberto",
        apellidos: "Feijoo",
        contacto: ["655887700","alberto-joo@gmail.com"],
        asignaturas: [],
        foto: ""
    },
    {
        nombre: "Irene",
        apellidos: "Ortiz",
        contacto: ["600551353","ireneOr@colegio.com"],
        asignaturas: [],
        foto: ""
    },
    {
        nombre: "Pedro",
        apellidos: "Sanchez",
        contacto: ["629000053","pedrosan@gmail.com"],
        asignaturas: [],
        foto: ""
    },
    {
        nombre: "Maria Jose",
        apellidos: "Janeiro",
        contacto: ["609551188","Mj_janeiro@colegio.com"],
        asignaturas: [],
        foto: ""
    },

    
    
    
];

mongoose.connect(DB_URL)

// comprueba si hay profesores y los borra !!!OJO!!!
.then (async () =>{
    const allProfesors = await profesor.find();
    if (allProfesors.length > 0){
        await profesor.collection.drop();
        console.log("Borrados todos los profesores")
    }

})
.catch((error => console.log("error borrando profesores", error)))

.then (async () =>{
    const profesorsMap = profesors.map((profe) => new profesor(profe))
    await profesor.insertMany(profesorsMap);
    console.log("Profesores insertados");
})
.catch((error => console.log("error insertando profesores", error)))

.finally(()=> mongoose.disconnect());
