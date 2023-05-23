//parte de la funcion en la que se compruaba la coneccion con la base de datos

import {pool} from '../db.js'; //este comando importa la funcion pool creada en el archivo db.js, que
//permite la coneccion con la base de datos
//SI ES UNA FUNCION CREADA POR EL USUARIO AGREGAR SIEMPRE LA EXTENSION .JS AL FINAL DE LA RUTAPARA IMPORTAR

export const ping = async (req,res) => {
    const [result] = await pool.query('SELECT "pong" AS result');
    res.json(result[0]);
}