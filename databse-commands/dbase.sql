create database firstapp;

create table users(
	id serial primary key,
	name varchar(40),
	email text
);

insert into users (name, email) values
	('joe','joe@bim.com'),
	('ryan','ryan@uff.com');