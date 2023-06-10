const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const profesorSchema = new Schema(
    {
        nombre: {type:String, required:true},
        apellidos: {type:String, required:true},
        contacto: [{type:String, required:true}],
        asignaturas: [{type: Schema.Types.ObjectId, ref: "asignaturas"}],
        foto: {type:String, required:false}
    }

)

const profesor = mongoose.model("profesores", profesorSchema);
module.exports = profesor;