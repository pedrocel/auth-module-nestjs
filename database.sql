CREATE DATABASE nest_users;

CREATE TABLE user(
	id INT PRIMARY KEY auto_increment,
    name VARCHAR(256) NOT NULL,
    email VARCHAR(256) NOT NULL,
    password VARCHAR(256) NOT NULL,
    status VARCHAR(50) NOT NULL
);

CREATE TABLE movement(
	id INT PRIMARY KEY AUTO_INCREMENT,
    description VARCHAR(256),
    amount DECIMAL,
    status INTEGER,
    type INTEGER,
    id_sent INTEGER,
    id_received INTEGER,
    created_at DATETIME,
    updated_at DATETIME
)