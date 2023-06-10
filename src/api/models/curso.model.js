const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const cursoSchema = new Schema(
    {
        nombre: {type:String, required:true}
        
        
    }

)

const curso = mongoose.model("cursos", cursoSchema);
module.exports = curso;