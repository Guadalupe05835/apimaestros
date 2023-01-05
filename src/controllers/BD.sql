CREATE DATABASE crudnodejs;

USE crudnodejs;

CREATE TABLE tasks(
    id INT PRIMARY KEY auto_increment,
    title VARCHAR(20),
    description VARCHAR(20)
);