const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const alumnoSchema = new Schema(
    {
        nombre: {type:String, required:true},
        apellidos: {type:String, required:true},
        edad: {type:Number,required:true},
        curso:[{type:Schema.Types.ObjectId, ref:"cursos"}],
        profesores: [{type: Schema.Types.ObjectId, ref: "profesores"}],
        asignaturas: [{type: Schema.Types.ObjectId, ref: "asignaturas"}],
        correo: {type:String, required:false},
        telefono: {type:Number, required:false},
        foto: {type:String, required:false}
    }

)

const alumno = mongoose.model("alumnos", alumnoSchema);
module.exports = alumno;