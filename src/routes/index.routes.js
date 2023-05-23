//
import { Router } from "express"; //Router es una funcion interna de js que permite las peticiones
//get, post, put, delete
import { ping } from "../controllers/index.controller.js";
//SI ES UNA FUNCION CREADA POR EL USUARIO AGREGAR SIEMPRE LA EXTENSION .JS AL FINAL DE LA RUTAPARA IMPORTAR

const ruta = Router();

ruta.get('/ping', ping); //esta funcion prueba la coneccion con la base de datos, pero es necesario pasar un parametro
//en el archivo db.js, el "/promise" para que pueda funcionar (video 0:30:00 o por ahi)

export default ruta;