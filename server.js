const express = require("express");
const app = express();

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended : true}));

app.listen("5000",function(){
    console.log("PORT 5000 RUNNING ");
})
app.use(express.static("public"));

app.post("/",function(req,res){
    
})
app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
})