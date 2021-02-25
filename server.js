const express = require('express');

const path = require('path');
const app = express();
const fs = require('fs');//do ineed ?

const notesDB = require('./db/db.json');



app.use(express.json());
// allows to ...???
app.use(express.urlencoded({extended: true}));
// This line tells Express to use the public folder as our static folder from which we can serve static files
app.use(express.static(__dirname + '/public'));

//Importing from our routes 
app.use(require('./routes/index'));
app.use(require('./routes/notes'));


//this looks at the environment variables in this case PORT an if that port isn't available it runs on 5000
const PORT = process.env.PORT || 5000

app.listen(PORT, ()=> console.log(`Sever started on port ${PORT}`));
