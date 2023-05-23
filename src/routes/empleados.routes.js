//este archivo es para crear la ruta que va a seguir la consulta de los empleados
import {Router} from 'express'; //Router es una funcion interna de js que permite las peticiones
//get, post, put, delete
import { getEmpleados, getEmpleado, createEmpleados, updateEmpleados, deleteEmpleados } from '../controllers/empleados.controllers.js'; 
//esta funcion completa las peticiones get, post, put y delete para los empleados
//SI ES UNA FUNCION CREADA POR EL USUARIO AGREGAR SIEMPRE LA EXTENSION .JS AL FINAL DE LA RUTAPARA IMPORTAR

const ruta = Router();

///peticiones a enviar///

ruta.get('/empleados', getEmpleados);

ruta.get('/empleados/:id', getEmpleado); //el ":id" es una condicion especial que se puede agregar por 
//la api express, y es un parametro que se debe pasar cuando se llama a una funcion, en este caso
//el parametro que va a pedir es un id para solo retornar un empleado y no toda la lista completa

ruta.post('/empleados', createEmpleados);

ruta.patch('/empleados/:id', updateEmpleados); //a diferencia de la peticion put, que tambien sirve para actaualizar,
//patch actualiza parcialmente los datos, o sea, los parametros que el usuario no pasa para modificar
//los deja intacos; con put estos se modifican igual quedando como null los parametros que no pasemos

ruta.delete('/empleados/:id', deleteEmpleados);

export default ruta;