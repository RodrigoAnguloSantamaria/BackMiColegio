const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const asignaturaSchema = new Schema(
    {
        nombre: {type:String, required:true}
         
    }

)

const asignatura = mongoose.model("asignaturas", asignaturaSchema);
module.exports = asignatura;