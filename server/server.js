const express = require("express")
const app = express()
const port = 8000
const bodyParser = require('body-parser')
const mongoose = require('mongoose');

// middleware
app.use(express.static( __dirname + '/public-site/dist/public-site' ));

mongoose.Promise = global.Promise;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// server routes 






// serving on port 
app.listen(port,(err)=>{
    if(err){
        console.log('error');
        console.log(err);
    }else{
        console.log(`listening on port ${port}`);
    }
})

