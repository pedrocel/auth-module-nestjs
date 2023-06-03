CREATE DATABASE nest_users;

CREATE TABLE user(
	id INT PRIMARY KEY auto_increment,
    name VARCHAR(256) NOT NULL,
    email VARCHAR(256) NOT NULL,
    password VARCHAR(256) NOT NULL,
    status VARCHAR(50) NOT NULL
);