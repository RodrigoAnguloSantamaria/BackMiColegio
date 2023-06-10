const user = require("../api/models/user.model");
const { verifySign } = require("../utils/jwt");



const isAuth = async(req, res, next) => {
    try {
        const authorization = req.headers.authorization; //cojo la authorization
        
        if(!authorization){
            return res.status(401).json({message: "Sin autorizacion"});
        }
        
        //Mi authorization es Bearer XXXX -> hago un split para quedarme con XXX
        const token = authorization.split(" ")[1];
        if(!token){
            return res.status(401).json({message: "token no valido"});
        }
        
        const tokenVerified = verifySign(token);
       
        if(!tokenVerified.id){
            return res.status(401).json(tokenVerified);
        }

        const userLogged = await user.findById(tokenVerified.id);
        req.user = userLogged;
        //console.log(req.user)
        next()
    } catch (error) {
        console.log(req.user)
        return res.status(500).json(error)
    }
}

const isAdmin = async (req, res, next) => {
    try {
        const authorization = req.headers.authorization; //cojo la authorization

        if(!authorization){
            return res.status(401).json({message: "Sin autorizacion "});
        }
        
        //Mi authorization es Bearer XXXX -> hago un split para quedarme con XXX
        const token = authorization.split(" ")[1];
        if(!token){
            return res.status(401).json({message: "token no valido"});
        }

        const tokenVerified = verifySign(token);
        //console.log(tokenVerified)
        if(!tokenVerified.id){
            return res.status(401).json(tokenVerified);
        }

        const userLogged = await user.findById(tokenVerified.id);
        req.user = userLogged;


        if(userLogged.role !== 'admin') {
            return res.status(401).json({message: "Necesitas ser administrador"});
        }
        next()
    } catch (error) {
        return res.status(500).json(error)
    }
}

module.exports = { isAuth, isAdmin}