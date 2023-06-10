const profesor = require("../models/profesor.model");

// get de todos los profesores
const getProfesores = async (req,res) =>{
    
    try {
        const allProfesores = await profesor.find().populate("asignaturas", "nombre");
        if (!allProfesores){
            return res.status(500).json({message:"No hay profesores para mostrar"})
        }
        return res.status(200).json(allProfesores)
        
    } catch (error) {
        return res.status(500).json(error);
    } 
}

// get de un profesore por id
const getProfesorById = async (req, res)=>{
    try {
        const {id} = req.params;
        const profesorById = await profesor.find({_id: id}).populate("asignaturas", "nombre");;
        if (!profesorById){
            return res.status(500).json({message:`No existen profesores con id: ${id}`})
        }
        return res.status(200).json(profesorById);
        
    } catch (error) {
        return res.status(500).json(error);
    }
}

// post de un profesor
const postProfesor = async (req, res)=>{
    try {
        const newProfesor = new profesor(req.body);
        const createdProfesor = await newProfesor.save();
        return res.status(201).json(newProfesor);

    } catch (error) {
        return res.status(500).json(error);
    }
}

// put profesor
const putProfesor = async (req, res)=>{
    try {
        const {id} = req.params;
        const putProfesor = new profesor(req.body);
        putProfesor._id = id;
        const updateProfesor = await profesor.findByIdAndUpdate(id, putProfesor,{new:true});
        if (!updateProfesor){
            return res.status(404).json({mesage: "el id no existe"})
        }
        return res.status(200).json(updateProfesor);
    } catch (error) {
        return res.status(500).json(error);
    }
}

// delete profesore
const deleteProfesor = async (req,res) =>{
    try {
        const {id} = req.params;
        //console.log(id)
        const deleteProfesor = await profesor.findByIdAndDelete(id);
        if (!deleteProfesore){
            return  res.status(404).json({message: `no existe profesore con id ${id} para eliminar`});
        }
        return res.status(200).json(deleteMovie)
    } catch (error) {
        return res.status(500).json(error);
    }
}

module.exports ={getProfesores,getProfesorById,postProfesor,putProfesor,deleteProfesor}