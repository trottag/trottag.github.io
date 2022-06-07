/*Actividad obligatoria DB*/

clientesCREATE TABLE CLIENTES  (
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	nombre VARCHAR(40) COLLATE latin1_spanish_ci NOT NULL,
	apellido VARCHAR(40) COLLATE latin1_spanish_ci NOT NULL, 
	edad TINYINT NOT NULL,
	fecha TIMESTAMP NOT NULL,
	provincia VARCHAR(30) COLLATE latin1_spanish_ci NOT NULL 
);
clientes
INSERT INTO CLIENTES (nombre,apellido,edad,fecha,provincia) VALUES ('Guillermo','Trotta','25','2022-06-07 18:15:44','Buenos Aires')
INSERT INTO CLIENTES (nombre,apellido,edad,fecha,provincia) VALUES ('Carlos','Lopez','30','2022-06-07 18:15:44','Buenos Aires')
INSERT INTO CLIENTES (nombre,apellido,edad,fecha,provincia) VALUES ('Victor','Gonzalez','37','2022-06-07 18:15:44','Buenos Aires')
INSERT INTO CLIENTES (nombre,apellido,edad,fecha,provincia) VALUES ('Sofia','Gutierrez','24','2022-06-07 18:15:44','Santa Fe')
INSERT INTO CLIENTES (nombre,apellido,edad,fecha,provincia) VALUES ('Eugenia','Lopez','24','2022-06-07 18:15:44','Neuquen')
SELECT * FROM clientes;

