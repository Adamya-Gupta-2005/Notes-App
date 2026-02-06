const mongoose = require('mongoose');

const notesSchema = mongoose.Schema({
    title:String,
    content:String,
    username:String
});

module.exports = mongoose.model("Note",noteSchema);