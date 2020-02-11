--If the database already exists, drop it before creating a new one
CREATE DATABASE IF NOT EXISTS burgers_db;
--Create burgers_db database
USE burgers_db;

--If the table already exists, drop it before creating a new one
DROP TABLE IF EXISTS burgers;
--Create burgers table
CREATE TABLE burgers (
  id INT NOT NULL AUTO_INCREMENT,
  burger_name VARCHAR(255) NOT NULL,
  devoured BOOL DEFAULT false,
  PRIMARY KEY (id)
);