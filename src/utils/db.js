const mongoose = require("mongoose")
DB_URL = process.env.DB_URL;

const connect=  async () =>{
    try {
        const db = await mongoose.connect(DB_URL);
        const {name, host} = db.connection;// datos de la conexion para el log siguiente
        console.log(`Conectado a ${name} en el host: ${host}`)
    } catch (error) {
        console.log("Error al conectar a BBDD", error)
    }
}

module.exports = {connect}