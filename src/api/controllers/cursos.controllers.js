const curso = require("../models/curso.model");

// get de todas las cursos
const getCursos = async (req,res) =>{
    
    try {
        const allCursos = await curso.find();
        if (!allCursos){
            return res.status(500).json({message:"No hay cursos para mostrar"})
        }
        return res.status(200).json(allCursos);
        
    } catch (error) {
        return res.status(500).json(error);
    } 
}

// get de una curso por id
const getCursoById = async (req, res)=>{
    try {
        const {id} = req.params;
        const cursoById = await curso.find({_id: id});
        if (!cursoById){
            return res.status(500).json({message:`No existe curso con id: ${id}`})
        }
        return res.status(200).json(cursoById);
        
    } catch (error) {
        return res.status(500).json(error);
    }
}

// post de un curso
const postCurso = async (req, res)=>{
    try {
        const newCurso = new curso(req.body);
        const createdCurso = await newCurso.save();
        return res.status(201).json(newCurso);

    } catch (error) {
        return res.status(500).json(error);
    }
}

// put curso
const putCurso = async (req, res)=>{
    try {
        const {id} = req.params;
        const putCurso = new curso(req.body);
        putCurso._id = id;
        const updateCurso = await curso.findByIdAndUpdate(id, putCurso,{new:true});
        if (!updateCurso){
            return res.status(404).json({mesage: "el id no existe"})
        }
        return res.status(200).json(updateCurso);
    } catch (error) {
        return res.status(500).json(error);
    }
}

// delete curso
const deleteCurso = async (req,res) =>{
    try {
        const {id} = req.params;
        //console.log(id)
        const deleteCurso = await curso.findByIdAndDelete(id);
        if (!deleteCurso){
            return  res.status(404).json({message: `no existe curso con id ${id} para eliminar`});
        }
        return res.status(200).json(deleteCurso)
    } catch (error) {
        return res.status(500).json(error);
    }
}

module.exports ={getCursos,getCursoById,postCurso,putCurso,deleteCurso}