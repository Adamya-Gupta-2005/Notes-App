const Notes = require('../models/notes');

async function getAllNote(req,res){
    const username = req.query.user;
    const notes = await Notes.find({'username':username});

    res.render('dashboard',{notes,username}); 
}

async function addNote(req,res){
    const { title, content, username } = req.body;
    await Notes.create({
        title: title,
        content: content,
        username: username
    });

    res.redirect(`/dashboard?user=${username}`);
}


module.exports = {
    getAllNote,
    addNote
};