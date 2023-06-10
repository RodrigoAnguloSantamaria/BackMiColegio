const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const notaSchema = new Schema(
    {
        nota: {type:Number, required:true},
        profesor: {type: Schema.Types.ObjectId, ref: "profesores"},
        asignatura: {type: Schema.Types.ObjectId, ref: "asignatura"}
        
    }

)

const nota = mongoose.model("nota", notaSchema);
module.exports = nota;