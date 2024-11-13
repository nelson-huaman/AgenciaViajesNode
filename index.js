import express from 'express';
import router from "./routes/index.js";
import db from "./config/db.js";

const app = express();

// contectar la base de datos
db.authenticate()
   .then( () => console.log('Base de datos conectado'))
   .catch( error => console.log(error))

// Definir puerto
const port = process.env.PORT || 3000;

// Habilitar PUG

app.set('view engine', 'pug');

// Obtner el año actual
app.use( (req, res, next) => {
   const year = new Date();
   res.locals.actualYear = year.getFullYear();
   res.locals.nombreSitio = 'Agencia de Viajes';
   next();
});

// agregar Body parser para leer los datos del fromulario
app.use(express.urlencoded({extended: true}));

// Definir la carpeta publica
app.use(express.static('public'));

// Agregar Router
app.use('/', router);


app.listen(port, () => {
   console.log(`El servidor esta funcionando en el puerto ${port}`);
});