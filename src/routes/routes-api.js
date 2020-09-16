const express = require('express');
const { getBooks, getUsers , createUsers } = require('../controllers/controllers');

const router = express.Router();

router.get("/toPsql", createUsers);
router.get("/toBooks", getBooks);
router.get("/toPsqlGet", getUsers);

module.exports = router;
