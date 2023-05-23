// const express = require(express); codigo antiguo, pero en uso, para importar modulos

import express from 'express'; //codigo nuevo para importar modulos: para que funcione hay que agregar
//en el package.json la linea -"type": "module",-
import rutaEmpleados from './routes/empleados.routes.js' //este comando importa las rutas que generemos
//para conectar los registros de los empleados con la base de datos
//SI ES UNA FUNCION CREADA POR EL USUARIO AGREGAR SIEMPRE LA EXTENSION .JS AL FINAL DE LA RUTAPARA IMPORTAR
import rutaIndex from './routes/index.routes.js' //este comando importa las rutas que generemos
//para la conexion con la base de datos
//SI ES UNA FUNCION CREADA POR EL USUARIO AGREGAR SIEMPRE LA EXTENSION .JS AL FINAL DE LA RUTAPARA IMPORTAR

const app = express(); //linea para ejecutar el modulo express

app.use(express.json()); //funcion interna de express para trabajar con los datos json que envia el usuario

app.use(rutaIndex); //esta funcion usa la ruta para la conexion con la base de datos
app.use('/api', rutaEmpleados); //esta funcion usa las rutas impoortadas desde el archivo empleados.routes.js
//para ejecutar esto en el navegador: localhost:3000/api/rutaEmpleados

app.use((req, res, next) => {
    res.status(404).json({message: 'not found'});
}); //funcion para que el usuario vea un error si el servidor no encuentra la ruta especificada, o se introdujo mal
//si esta le aparece un html con el error en ves de un json como se pasa en la funcion

export default app;