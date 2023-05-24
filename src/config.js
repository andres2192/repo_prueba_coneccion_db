//en este archivo se van a cargar las variables de entorno que estan en el archivo .env
//variables de entorno son las relacionadas al usuario, base de datos, puerto, etc
//para leer el archivo .env se debe instalar la api dotenv

import {config} from 'dotenv';

config();

export const PORT = process.env.PORT || 3000; //la funcion process es nativa de node.js, 
//que permite procesar el archivo .env
export const DB_HOST = process.env.DB_HOST || 'localhost';
export const DB_PORT = process.env.DB_PORT || 3306;
export const DB_USER = process.env.DB_USER || 'root';
export const DB_PASSWORD = process.env.DB_PASSWORD || 'root';
export const DB_DATABASE = process.env.DB_DATABASE || 'conexionejemplodb';