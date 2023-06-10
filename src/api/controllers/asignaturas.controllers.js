const asignatura = require("../models/asignatura.model");

// get de todas las asignaturas
const getAsignaturas = async (req,res) =>{
    
    try {
        const allAsignaturas = await asignatura.find();
        if (!allAsignaturas){
            return res.status(500).json({message:"No hay asignaturas para mostrar"})
        }
        return res.status(200).json(allAsignaturas);
        
    } catch (error) {
        return res.status(500).json(error);
    } 
}

// get de una asignatura por id
const getAsignaturaById = async (req, res)=>{
    try {
        const {id} = req.params;
        const asignaturaById = await asignatura.find({_id: id});
        return res.status(200).json(asignaturaById);
        if (!asignaturaById){
            return res.status(500).json({message:`No existe asignatura con id: ${id}`})
        }
    } catch (error) {
        return res.status(500).json(error);
    }
}

// post de un asignatura
const postAsignatura = async (req, res)=>{
    try {
        const newAsignatura = new asignatura(req.body);
        const createdAsignatura = await newAsignatura.save();
        return res.status(201).json(newAsignatura);

    } catch (error) {
        return res.status(500).json(error);
    }
}

// put asignatura
const putAsignatura = async (req, res)=>{
    try {
        const {id} = req.params;
        const putAsignatura = new asignatura(req.body);
        putAsignatura._id = id;
        const updateAsignatura = await asignatura.findByIdAndUpdate(id, putAsignatura,{new:true});
        if (!updateAsignatura){
            return res.status(404).json({mesage: "el id no existe"})
        }
        return res.status(200).json(updateAsignatura);
    } catch (error) {
        return res.status(500).json(error);
    }
}

// delete asignatura
const deleteAsignatura = async (req,res) =>{
    try {
        const {id} = req.params;
        //console.log(id)
        const deleteAsignatura = await asignatura.findByIdAndDelete(id);
        if (!deleteAsignatura){
            return  res.status(404).json({message: `no existe asignatura con id ${id} para eliminar`});
        }
        return res.status(200).json(deleteAsignatura)
    } catch (error) {
        return res.status(500).json(error);
    }
}

module.exports ={getAsignaturas,getAsignaturaById,postAsignatura,putAsignatura,deleteAsignatura}