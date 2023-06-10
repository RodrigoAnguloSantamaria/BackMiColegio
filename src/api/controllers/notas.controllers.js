const nota = require("../models/nota.model");

// get de todas las notas
const getNotas = async (req,res) =>{
    
    try {
        const allNotas = await nota.find();
        if (!allNotas){
            return res.status(500).json({message:"No hay notas para mostrar"})
        }
        return res.status(200).json(allNotas);
        
    } catch (error) {
        return res.status(500).json(error);
    } 
}

// get de una nota por id
const getNotaById = async (req, res)=>{
    try {
        const {id} = req.params;
        const notaById = await nota.find({_id: id});
        
        if (!notaById){
            return res.status(500).json({message:`No existe nota con id: ${id}`})
        }
        return res.status(200).json(notaById);
    } catch (error) {
        return res.status(500).json(error);
    }
}

// post de un nota
const postNota = async (req, res)=>{
    try {
        const newNota = new nota(req.body);
        const createdNota = await newNota.save();
        return res.status(201).json(newNota);

    } catch (error) {
        return res.status(500).json(error);
    }
}

// put nota
const putNota = async (req, res)=>{
    try {
        const {id} = req.params;
        const putNota = new nota(req.body);
        putNota._id = id;
        const updateNota = await nota.findByIdAndUpdate(id, putNota,{new:true});
        if (!updateNota){
            return res.status(404).json({mesage: "el id no existe"})
        }
        return res.status(200).json(updateNota);
    } catch (error) {
        return res.status(500).json(error);
    }
}

// delete nota
const deleteNota = async (req,res) =>{
    try {
        const {id} = req.params;
        //console.log(id)
        const deleteNota = await nota.findByIdAndDelete(id);
        if (!deleteNota){
            return  res.status(404).json({message: `no existe nota con id ${id} para eliminar`});
        }
        return res.status(200).json(deleteNota)
    } catch (error) {
        return res.status(500).json(error);
    }
}

module.exports ={getNotas,getNotaById,postNota,putNota,deleteNota}