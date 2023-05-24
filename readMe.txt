pasos del sistema

1- el programa ejecuta index.js: 
al EJECUTAR index, corre la funcion "app" importada desde app.js, y lee el puerto actual desde el archivo config.js
entonces el sistema queda a la espera de peticiones. Si no se ejecuta este codigo, no se establece la coneccion y 
las rutas de peticiones no funcionaran

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
    ejecuta la funcion ping, la cual mediante el metodo .query() termina de comprobar la coneccion con la base de datos. esta 
    a su vez necesita importar la funcion "pool" desde "../db.js", que basicamente contiene las variables de entorno para la 
    coneccion
    C- base de datos -db.js-:
    en esta parte es necesario instalar un paquete llamado "mysql2" que contiene metodos y funciones para la coneccion con 
    bases de datos mysql. A traves de importar la funcion createPool desde el paquete, y los datos de las variables desde
    "./config.js" se puede generar la funcion pool. Esta es la que ESTABLECE la coneccion con la base de datos
    D- configuraciones y variables de entorno -config.js- y -.env-:
    en este ultimo paso se  instala la api "dotenv" donde se cargan las varibles de entorno locales o de la empresa en el 
    archivo ".env". Luego se crean y se exportan estas variables guardadas para ser usadas en la funcion createPool del 
    paso anterior

4- peticiones
    A- -.app.js-:
    las peticiones inician con la ejecucion de la funcion "app.use('/api', rutaEmpleados)", donde es necesario usar
    la direccion local: "localhost:3000/api/...", que se define en la primera parte de la funcion. Luego segun lo que 
    pasemos como parametro de rutaEmpleados, importado desde "./routes/empleados.routes.js", se dara una respuesta desde
    la base de datos.
    B- -empleados.routes.js-:
    en este archivo definimos en funciones las diferentes rutas que siguen las peticiones a la base de datos: get, post,
    patch y delete. Para cada peticion, se define en primer lugar la ruta que va a seguir luego de la ruta inicial que
    definimos anteriormente ("localhost:3000/api/..."), y que sera "/empleados" o "/empleados/id" segun el tipo de peticion
    En segundo lugar definimos una funcion que se importara desde ../controllers/empleados.controllers.js, y que pedira
    la informacion en la base de datos segun el tipo de peticion que se desencadene
    C- -empleados.controllers.js-:
    aca se desarrollan las funciones para las distintas solicitudes a la base de datos, dependiendo de las peticiones
    que se requieran ejecutar. Es necesario importar la funcion "pool" desde ../db.js para ejecutar la peticion a la 
    base de datos