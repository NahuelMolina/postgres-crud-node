const { Pool , Client } = require('pg');

const model = {
	host:'localhost',
	database:'firstapp',
	password:'69superContra',
	port:'6969',
	user:'postgres'
	
};

const pool = new Pool(model);

const getUsers =  async (req,res) => {

	const response = await pool.query('SELECT * FROM users;');
	console.log(response.rows);
}

const createUsers = async (req,res) => {
	
	try{
        const { body } = req;
		const query = await pool.query(` insert into users values ('${body.name}' ,'${body.password}'); `);

        const response = pool.query('SELECT * FROM users;');
	    console.log(response.rows);
	}catch(e){
		console.log(`Throw error -> error: ${e}`);
	}
    res.end();
}

const getBooks = async (req,res) => {
    console.log(req.body);
    try{
        let body = req.body;
        console.log(`The databse adopted was -> ${body.db}`);
        const config = {
            port:'6969',
            user:'postgres',
            password:'69superContra',
            host:'localhost',
            database:body.db
        }

        let pooli = new Pool(config);
        let resp = await pooli.query('SELECT * FROM users;');
        res.status(200).json(resp.rows);
        console.log(resp.rows);
    }catch(e){
        console.log(`An error -> ${e}`)
    }
}

module.exports = {
	getUsers,
	createUsers,
    getBooks
}
