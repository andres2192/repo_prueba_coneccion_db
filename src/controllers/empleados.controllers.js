//en este archivo se desarrolla la funcion que esta en el archivo empleados.routes.js
//para poder mantener el codigo separado y legible, luego se importara y se exportara
//nuevamente en el archivo empleados.routes.js

import {pool} from '../db.js'; //este comando importa la funcion pool creada en el archivo db.js, que
//permite la coneccion con la base de datos y los diferentes request
//SI ES UNA FUNCION CREADA POR EL USUARIO AGREGAR SIEMPRE LA EXTENSION .JS AL FINAL DE LA RUTAPARA IMPORTAR

////////Obtener Datos del Empleado////////
export const getEmpleados = async (req,res) => {
    try {
        //throw new Error('error inesperado'); //linea para simular un error
        //hay una api que maneja errores: express-promise-router
        const [rows] = await pool.query('SELECT * FROM empleado');
        res.json(rows);
    } catch (error) {
        return res.status(500).json({message: 'algo salio mal'});
    }
};

export const getEmpleado = async (req,res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM empleado WHERE id = ?', [req.params.id]);
        //el ".params.id" guarda el parametro que pasamos en el request empleados/id, con este
        //es posible obtener el empleado con ese id desde la base de datos
        if (rows.length <= 0) return res.status(404).json({message: 'no se encontro el empleado'});
        res.json(rows[0]);
    } catch (error) {
        return res.status(500).json({message: 'algo salio mal'});
    }
};

////////Cargar Datos del Empleado////////
export const createEmpleados = async (req,res) => {
    try {
        const {nombre, salario} = req.body; //aca antes de recibir los datos se pueden ejecutar validaciones
        const [rows] = await pool.query('INSERT INTO empleado (nombre, salario) VALUES (?, ?)', [nombre, salario]);
        res.send({
            id: rows.insertId, //el.insertId es una propiedad de rows que se crea cuando se inserta el dato
            nombre,
            salario
        });
        //en este punto ya trabaja con datos que pasamos a traves de la api thunder client
        //en la pestaña body de la peticion post, como dato tipo json
    } catch (error) {
        return res.status(500).json({message: 'algo salio mal'});
    }
};

////////Actualizar Datos del Empleado////////
export const updateEmpleados = async (req,res) => {
    try {
        const {id} = req.params;
        const {nombre, salario} = req.body;
        const [result] = await pool.query('UPDATE empleado SET nombre = IFNULL(?, nombre), salario = IFNULL(?, salario) WHERE id = ?', [nombre, salario, id]);
        //el IFNULL es una funcion SQL que hace que el dato que pide quede con el mismo valor en caso de ser un dato nulo, 
        //o no pasemos ningun valor
        if (result.affectedRows === 0) return res.status(404).json({message: 'no se encontro el empleado'});
        //el ".affectedRows" es un parametro de result que indica cuantas filas se modificaron, en este caso
        //indicaria si se actualizaron o no filas con la funcion update
        const [rows] = await pool.query('SELECT * FROM empleado WHERE id = ?', [id]);
        res.json(rows[0]);
    } catch (error) {
        return res.status(500).json({message: 'algo salio mal'});
    }
};

////////Borrar Datos del Empleado////////
export const deleteEmpleados = async (req,res) => {
    try {
        const [result] = await pool.query('DELETE FROM empleado WHERE id = ?', [req.params.id]);
        if (result.affectedRows <= 0) return res.status(404).json({message: 'no se encontro el empleado'});
        //el ".affectedRows" es un parametro de result que indica cuantas filas se modificaron, en este caso
        //indicaria si se eliminaron o no filas con la funcion delete
        res.sendStatus(200);
    } catch (error) {
        return res.status(500).json({message: 'algo salio mal'});
    }
};