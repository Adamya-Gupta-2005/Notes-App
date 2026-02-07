const express = require('express');
const router = express.Router();

const auth = require('../controller/authController');


router.get('/signup',auth.getSignup);
router.post('/signup',auth.postSignup);

router.get('/',auth.getLogin);
router.get('/login',auth.getLogin);
router.post('/login',auth.postLogin);

module.exports = router;