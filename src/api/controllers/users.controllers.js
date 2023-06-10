const { generateSign } = require("../../utils/jwt");
const { validateUser, validateEmail, validatePassword, usedEmail, usedUser } = require("../../utils/validators");
const user = require("../models/user.model");
const bcrypt = require("bcrypt");

const login = async(req, res) => {
    try {
        const userInfo = await user.findOne({user: req.body.user});
        
        if(!userInfo){
            return res.status(404).json({message: 'Usuario no registrado'});
        }
        if(!bcrypt.compareSync(req.body.password, userInfo.password)){
            return res.status(404).json({message: 'Password incorrecta'});
        }
        const token = generateSign(userInfo._id, userInfo.user);
        return res.status(200).json({user:userInfo, token:token});
    } catch (error) {
        return res.status(500).json(error); 
    }
};


const register = async(req, res) => {
    try {
        const newUser = new user(req.body);
        //validar nombre usuario
        if(!validateUser(newUser.user)){
            return res.status(400).json({message: "Usuario no valido"})
        }
        //validar Email
        if(!validateEmail(newUser.email)){
            return res.status(400).json({message: "Email no valido"})
        }
        //validarPassword
        if(!validatePassword(newUser.password)){
            return res.status(400).json({message: "Password no valida"})
        }

        //validar email usado
        if(await usedEmail(newUser.email)){
            return res.status(400).json({message: "Email ya existe en BBDD"})
        }

        //validar nombre usuario usado
        if(await usedUser(newUser.user)){
            return res.status(400).json({message: "Usuario ya existe en BBDD"})
        }
        
        //Encriptar Password
        newUser.password = bcrypt.hashSync(newUser.password, 10);
        const createdUser = await newUser.save();

        return res.status(201).json(createdUser)
    } catch (error) {
        return res.status(500).json(error); 
    }
};


module.exports = { login,register}