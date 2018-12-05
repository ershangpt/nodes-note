console.log("Starting App.");

const fs = require("fs");
const _ = require("lodash");
const yargs = require("yargs");

const notes = require("./notes.js");

const argv = yargs.argv;
var command = argv._[0];

switch(command){
    case "add": 
    note = notes.addNote(argv.title, argv.body); 
    if(note){
        console.log("Note Created");
        notes.logNote(note)
    }else{
        console.log("Title already taken")
    }
    break;
    case "list": 
    var allNotes = notes.getAll();
    
    console.log(`Printing ${allNotes.length} note(s)`);
    allNotes.forEach((note) => notes.logNote(note));
    break;
    case "remove": 
    var noteRemoved = notes.removeNote(argv.title); 
    var msg = noteRemoved ? 'Note Removed.' : 'No Note Found';
    console.log(msg)
    break;
    case "read":
    var note = notes.getNote(argv.title);
    if(note){
        console.log("Note Details");
        notes.logNote(note)
    }else{
        console.log("Note Not Found")
    }
    break;
    default: console.log("command not recognized");
}
