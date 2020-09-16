const { Pool } = require('pg');

const config = {
	username:'postgres',
	password:'69superContra',
	port:'6969',
	database:'library'
}

const pool = new Pool(config);

const getUsers = () => {
	const res = pool.query('SELECT * FROM books');
	console.log(res)
}
