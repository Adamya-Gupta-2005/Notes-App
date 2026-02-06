const bcrypt = require('bcrypt');
const User = require('../models/user');

function getSignup(req, res) {
    res.render('signup');
}

async function postSignup(req, res) {
    const hashed = await bcrypt.hash(req.body.pass, 10);

    await User.create({
        username: req.body.name,
        password: hashed
    });

    res.redirect('/login');
}

function getLogin(req, res) {
    res.render('login');
}

async function postLogin(req, res) {
    const user = await User.findOne({ username: req.body.name });
    if (!user) return res.render('login');

    const match = await bcrypt.compare(req.body.pass, user.password);
    if (!match) return res.render('login');

    res.redirect(`/dashboard?user=${user.username}`);
}

async function getDashboard(req, res) {
    const username = req.query.user;
    if (!username) return res.redirect('/login');

    const user = await User.findOne({ username });
    if (!user) return res.redirect('/login');

    res.render('dashboard', { username });
}

module.exports = {
    getSignup,
    postSignup,
    getLogin,
    postLogin,
    getDashboard
};
