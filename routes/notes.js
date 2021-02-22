const express = require('express');
const router = express.Router()
const path = require('path');
const fs = require('fs');
const notesDB = require('../db/db.json');



router.get('/notes', (req,res)=>{
    //.send sends data to the browser
    res.sendFile(path.join(__dirname, '../public','notes.html'))
});

router.get('/api/notes', (req,res)=>{
    //.send sends data to the browser
    res.send(notesDB)
});

router.post('/api/notes', (req,res)=>{
    notesDB.push(req.body)
    note = JSON.stringify(notesDB, null, 2)
    fs.writeFile('./db/db.json', note,()=>{console.log('added')})
    res.end()
});

router.get('/api/notes/:id',(req,res)=>{
    console.log(req.params.id)
    });

router.get('/api/notes/:id',(req,res)=>{
console.log(req.params.id)
});

module.exports = router;