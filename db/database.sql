CREATE DATABASE IF NOT EXISTS companydb;

use companydb

CREATE TABLE usuarios (
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) DEFAULT NULL,
    correo VARCHAR(100),
    contrasena VARCHAR(100), 
    PRIMARY KEY(id)
)

CREATE TABLE empleados (
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) DEFAULT NULL,
    salary INT(5), DEFAULT NULL,
    PRIMARY KEY(id)
)

INSERT INTO empleados value 
(3, 'Elizabeth', 1500),
(4, 'Anielka', 1400),
(5, 'Hezel', 1600)