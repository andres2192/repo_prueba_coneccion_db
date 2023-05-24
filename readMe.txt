pasos del sistema

1- el programa ejecuta index.js: 
al ejecutar index, corre la funcion "app" importada desde app.js, y lee el puerto actual desde el archivo config.js
entonces el sistema queda a la espera de peticiones.

2- funcion app -app.js-:
la funcion app ejecuta tres tareas: la primera, ejecuta el modulo express para el uso de node. Segundo, con el modulo
express se ejecutan 4 funciones:
    A: "app.use(express.json())" : una funcion interna de express para trabajar con los datos json que envia el usuario
    B: "app.use(rutaIndex)" : ejecuta la ruta para la conexion con la base de datos. Previamente se importa la ruta desde
    ./routes/index.routes.js
    C: "app.use('/api', rutaEmpleados)" : ejecuta las rutas para ejecutar localhost:3000/api/rutaEmpleados en el navegador
    o la api de thunder client. Previamente se importa la ruta desde ./routes/empleados.routes.js
    D: una funcion para control de errores

3- conexion con la base de datos
    A- ruta index -index.routes.js-:
    importamos la funcion nativa de node (express) "Router" para poder conectar con la base de datos, y ejecuta el 
    metodo .get() para COMPROBAR la coneccion. Para el metodo get se importa la funcion "ping" desde 
    "../controllers/index.controller.js"
    B- controladores -index.controller.js-:
    ejecuta la funcion ping, la cual mediante el metodo .query() ESTABLECE la coneccion con la base de datos. esta a su vez
    necesita importar la funcion "pool" desde "../db.js", que basicamente contiene las variables de entorno para la coneccion
    C- base de datos -db.js-:
    en esta parte es necesario instalas un paquete llamado "mysql2" que contiene metodos y funciones para la coneccion con 
    bases de datos mysql. A traves de importar la funcion createPool desde el paquete, y los datos de las variables desde
    "./config.js" se puede generar la funcion pool.
    D- configuraciones y variables de entorno -config.js- y -.env-:
    en este ultimo paso se  instala la api "dotenv" donde se cargan las varibles de entorno locales o de la empresa en el 
    archivo ".env". Luego se crean y se exportan estas variables guardadas para ser usadas en la funcion createPool del 
    paso anterior

4- peticiones
    A- 