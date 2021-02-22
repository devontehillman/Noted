const express = require('express');
// node module to deal with file paths
const path = require('path');
const app = express();


//body Parser Middleware 
app.use(express.json());
// allows us to deal with encoded url data
app.use(express.urlencoded({extended: false}));
// this use allows us to use out style and js sheets
app.use(express.static(__dirname + '/public'));

// defining our route where we are serving our data 
app.get('/', (req,res)=>{
    //.send sends data to the browser
    res.sendFile(path.join(__dirname, 'public','index.html'));
});
app.get('/notes', (req,res)=>{
    //.send sends data to the browser
    res.sendFile(path.join(__dirname, 'public','notes.html'));
    //res.sendFile(path.join(__dirname, 'public','css','style.css'));
});

// fs.readFile(`${__dirname}/public/css/style.css`, (err, data) => {
//     if (err) throw err;
//     res.writeHead(200,{'content-type': 'text/css'});
//     res.end(data);
// })  
// fs.readFile(`${__dirname}/public/css/js/index.js`, (err, data) => {
//     if (err) throw err;
//     res.writeHead(200,{'content-type': 'text/css'});
//     res.end(data);
// })  

//this looks at the environment variables in this case PORT an if that port isn't available it runs on 5000
const PORT = process.env.PORT || 5000

app.listen(PORT, ()=> console.log(`Sever started on port ${PORT}`));