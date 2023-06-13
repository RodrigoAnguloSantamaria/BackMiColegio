const alumno = require("../models/alumno.model");

// get de todos los alumnos
const getAlumnos = async (req,res) =>{
    
    try {
        const allAlumnos = await alumno.find().populate("profesores", "nombre contacto")
        .populate({
            path: "asignaturas",
            select: "nombre"
        })
        .populate({
            path: "curso",
            select: "nombre"
        });
        if (!allAlumnos){
            return res.status(500).json({message:"No hay alumnos para mostrar"})
        }
        return res.status(200).json(allAlumnos)
        
    } catch (error) {
        return res.status(500).json(error);
    } 
}

// get de un alumno por id
const getAlumnoById = async (req, res)=>{
    try {
        const {id} = req.params;
        // const alumnoById = await alumno.find({_id: id})
        //             .populate("profesores","nombre contacto")
        //             .polulate({path:"asignaturas", select:"nombre"});
                  
        const alumnoById = await alumno.findById(id)
                .populate("profesores", "nombre contacto")
                .populate({
                    path: "asignaturas",
                    select: "nombre"
                })
                .populate({
                    path: "curso",
                    select: "nombre"
                });
        

        //console.log(alumnoById)
        if (!alumnoById){
            return res.status(500).json({message:`No existe alumno con id: ${id}`})
        }
        return res.status(200).json(alumnoById);
        
    } catch (error) {
        return res.status(500).json(error);
    }
}

// post de un alumno
const postAlumno = async (req, res)=>{
    //console.log(req.file)
    try {
        const newAlumno = new alumno(req.body);
        if(req.file){
            
            newAlumno.foto = req.file.path;
            console.log(newAlumno)
        }
        else{
            newAlumno.foto = "https://static.vecteezy.com/system/resources/previews/002/318/271/non_2x/user-profile-icon-free-vector.jpg"
        }
        
        const createdAlumno = await newAlumno.save();
        
        return res.status(201).json(newAlumno);

    } catch (error) {
        return res.status(500).json(error);
    }
}

// put alumno
const putAlumno = async (req, res)=>{
    try {
        console.log(req.params)
        const {id} = req.params;
        
        const putAlumno = new alumno(req.body);
        putAlumno._id = id;
        if(req.file){
            putAlumno.foto = req.file.path;
        }
        
        const updateAlumno = await alumno.findByIdAndUpdate(id, putAlumno);
        if (!updateAlumno){
            return res.status(404).json({mesage: "el id no existe"})
        }
        return res.status(200).json(updateAlumno);
    } catch (error) {
        return res.status(500).json(error);
    }
}

// delete alumno
const deleteAlumno = async (req,res) =>{
    try {
        const {id} = req.params;
        //console.log(id)
        const deleteAlumno = await alumno.findByIdAndDelete(id);
        if (!deleteAlumno){
            return  res.status(404).json({message: `no existe alumno con id ${id} para eliminar`});
        }
        return res.status(200).json(deleteAlumno)
    } catch (error) {
        return res.status(500).json(error);
    }
}

module.exports ={getAlumnos,getAlumnoById,postAlumno,putAlumno,deleteAlumno}