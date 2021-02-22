const express = require('express');
const router = express.Router();


// defining our route where we are serving our data 
router.get('/', (req,res)=>{
    //.send sends data to the browser
    res.sendFile(path.join(__dirname, 'public','index.html'));
});



module.exports = router;