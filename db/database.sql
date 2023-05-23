/*este archivo es para guardar el codigo sql creado, a modo informativo
 y como ejecutarlos en la ventana cmd de windows.
 no condiciona la ejecucion del codigo*/

CREATE DATABASE IF NOT EXISTS conexionejemplodb;

USE conexionejemplodb;

CREATE TABLE empleado (
    id INT(11) NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(45) DEFAULT NULL,
    salario INT(5) DEFAULT NULL,
    PRIMARY KEY(id) 
);

/*para hacer las consultas hace falta descargar un npm llamado mysql2
buscando en google y copiando el comando para insertar en la terminal
de vscode*/

INSERT INTO empleado VALUES
(1, 'Pedro', 1000),
(2, 'Juan', 5000),
(3, 'Lucas', 2500),
(4, 'Robertoi', 3000);