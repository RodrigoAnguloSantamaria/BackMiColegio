const express = require("express")
const dotenv= require("dotenv").config();
const cors = require('cors');
const cloudinary = require('cloudinary').v2;
const {isAuth} =require("./src/middlewares/auth")
const {connect} = require("./src/utils/db");
const usersRoutes = require("./src/api/routes/user.routes");
const alumnosRoutes = require("./src/api/routes/alumnos.routes");
const profesoresRoutes = require("./src/api/routes/profesores.routes");
const asignaturasRoutes = require("./src/api/routes/asignaturas.routes");
const cursosRoutes = require("./src/api/routes/cursos.routes");

PORT=process.env.PORT;

// configuracion cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET
  });

const app = express();
connect();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Method', 'POST, GET, PUT, DELETE, PATCH'); //Decimos que metodos tenemos permitidos
    res.header('Access-Control-Allow-Credentials', 'true'); //permitimos la conexión con credenciales(Bearer token)
    res.header('Access-Control-Allow-Headers', 'Content-Type'); // permitimos los headers del tipo Content-Type
    next();
 })
 app.use(cors(
    {
      //origin: ["http://localhost:3000","http://localhost:4200","http://127.0.0.1:5500"],  //si sabemos origenes podemos ponerlos en un array
      origin: "*", // permito todas las conexiones
      credentials: true
    }
))

// para que lea las url y los json
app.use(express.json()); 
app.use(express.urlencoded({extended: false}));

// rutas de la api
app.use("/user",usersRoutes);
app.use("/alumnos",alumnosRoutes);
app.use("/profesores", profesoresRoutes);
app.use("/asignaturas",asignaturasRoutes);
app.use("/cursos", cursosRoutes);

// escucha
app.listen(PORT,console.log(`servidor arrancado escuchando en el puerto ${PORT}`));
