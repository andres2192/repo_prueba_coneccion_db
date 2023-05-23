import {PORT} from './config.js'
//para importar las variables de entorno
//SI ES UNA FUNCION CREADA POR EL USUARIO AGREGAR SIEMPRE LA EXTENSION .JS AL FINAL DE LA RUTAPARA IMPORTAR
import app from './app.js';

app.listen(PORT); //para que escuche las peticiones a traves del puerto 3000
console.log('server corriendo en puerto', PORT);

//esto hay que ejecutarlo y queda corriendo en segundo plano como un servidor a la espera
//de escuchar peticiones