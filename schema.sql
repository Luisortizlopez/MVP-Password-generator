DROP DATABASE IF EXISTS passwords;

CREATE DATABASE passwords;

USE passwords;

CREATE TABLE givenpasswords (
  id int NOT NULL AUTO_INCREMENT,
  randompassword varchar(150) NOT NULL,
  PRIMARY KEY (ID)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < schema.sql
 *  to create the database and the tables.*/

INSERT INTO givenpasswords (randompassword) VALUES ("fbkld23mpl");
INSERT INTO givenpasswords (randompassword) VALUES ("j568snklns");
INSERT INTO givenpasswords (randompassword) VALUES ("lsj4201ias");
INSERT INTO givenpasswords (randompassword) VALUES ("sjda546jia");
