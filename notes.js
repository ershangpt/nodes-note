console.log("Starting notes.js");

var fs = require("fs");

var fetchNote = () => {
    try{
        var notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    } catch (e) {
        return [];
    }
}

var saveNote = (notes) => fs.writeFileSync('notes-data.json', JSON.stringify(notes));

var addNote = (title, body) => {
    var notes = fetchNote();
    var note = {
        title,
        body
    }

    
    var duplicateNote = notes.filter((n) => n.title === title);
    if(duplicateNote.length === 0){
        notes.push(note);
        saveNote(notes);
        return note;
    }
}

var getAll = () => {
    return fetchNote();
}

var getNote = (title) => {
    var notes = fetchNote();
    var filteredNote = notes.filter((n) => n.title === title);
    return filteredNote[0];
}

var removeNote = (title) => {
    var notes = fetchNote();
    var filteredNotes = notes.filter((n) => n.title !== title);
    saveNote(filteredNotes);
    return notes.length !== filteredNotes.length;
}
var logNote = (note) => {
    console.log("--");
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
}

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote,
    logNote
}