const express = require('express');
// node module to deal with file paths
const path = require('path');
const app = express();
const fs = require('fs');

const notesDB = require('./db/db.json');



app.use(express.json());
// allows to ...???
app.use(express.urlencoded({extended: true}));
// this use allows us to use out style and js sheets
app.use(express.static(__dirname + '/public'));

// defining our route where we are serving our data 
app.get('/', (req,res)=>{
    //.send sends data to the browser
    res.sendFile(path.join(__dirname, 'public','index.html'));
});
app.get('/notes', (req,res)=>{
    //.send sends data to the browser
    res.sendFile(path.join(__dirname, 'public','notes.html'))
    //res.sendFile(path.join(__dirname, 'public','css','style.css'));
});
app.get('/api/notes', (req,res)=>{
    //.send sends data to the browser
    res.send(notesDB)
});

app.post('/api/notes', (req,res)=>{
    let note = req.body

    notesDB.push(note)

    note = JSON.stringify(notesDB, null, 2)

    fs.writeFile('./db/db.json', note,()=>{console.log('added')})
    res.json({
        title :note.title,
        text :note.text
    });
});



//this looks at the environment variables in this case PORT an if that port isn't available it runs on 5000
const PORT = process.env.PORT || 5000

app.listen(PORT, ()=> console.log(`Sever started on port ${PORT}`));