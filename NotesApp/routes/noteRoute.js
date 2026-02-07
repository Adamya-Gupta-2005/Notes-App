const express = require('express');
const router = express.Router();

const user = require('../controller/userController');

router.get('/dashboard',user.getAllNote);
router.post('/dashboard',user.addNote);

module.exports = router;