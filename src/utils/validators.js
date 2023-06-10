const user = require("../api/models/user.model");

// validacion con expresion regular de la sintaxis del user minimo 6 caracteres y al menos 1 numero ej: rodrigo6
const validateUser = (user) => {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

    return regex.test(String(user).toLowerCase());
}

// validacion con expresion regular de la sintaxis del email
const validateEmail = (email) => {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return regex.test(String(email).toLowerCase());
}

// validacion con regex de password (minimo una mayuscula, un numero, un caracter especial y entre 6 y 16 caracteres) ej: User11!
const validatePassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/; // password valida Abcd123$

    return regex.test(String(password));
}

// comprueba si email existe en BBDD en coleccion users
const usedEmail = async(email) => {
    const users = await user.find({ email: email });
    //console.log(cliente.length)
    return users.length;
}

// comprueba si usuario existe en BBDD en coleccion users
const usedUser = async(usuario) => {
    const users = await user.find({ user: usuario });
    //console.log(cliente.length)
    return users.length;
}

module.exports = { validateUser,validatePassword, validateEmail, usedEmail,usedUser }