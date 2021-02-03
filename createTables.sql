DROP SCHEMA IF EXISTS smugbug CASCADE;
CREATE SCHEMA smugbug
CREATE TABLE smugbug.user (
	id integer PRIMARY KEY,
	lastname varchar(255) NOT NULL,
	firstname varchar(255) NOT NULL,
	email varchar(255) NOT NULL
);
