const express = require('express');
app = express();
const router = express.Router();
const uuid = require('uuid')
const path = require('path');
const fs = require('fs');
const notesDB = require('../db/db.json');


app.use(express.json());

router.get('/notes', (req,res)=>{
    //.send sends data to the browser
    res.sendFile(path.join(__dirname, '../public','notes.html'))
});

// serving the notes file to the /api/notes route 
router.get('/api/notes', (req,res)=>{
    //.send sends data to the browser
    res.send(notesDB)
});

router.post('/api/notes', (req,res)=>{
    // Pulling in data from my json folder and pushing in the new note (sent in req body)
    newNote = {
        id: uuid.v4(),
        title: req.body.title,
        text: req.body.text
    }
    notesDB.push(newNote);
    // converting notes db back to JSON string and storing it in new Var
    note = JSON.stringify(notesDB, null, 2)
    // pushing new not into json file
    fs.writeFile('./db/db.json', note,()=>{console.log('added')})
    // ending response
    res.send(notesDB)
});

router.delete('/api/notes/:id',(req,res)=>{
    // checks data base to see of the note with the id exist 

        const newFile = notesDB.filter(notesDB => notesDB.id !== req.params.id)
        fs.writeFile('./db/db.json', JSON.stringify(newFile, null, 2),()=>{console.log('added')})
        res.end()
    

});


module.exports = router;