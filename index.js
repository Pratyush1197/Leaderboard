const express = require('express')
const app = express()
const port = 3000
var router = express.Router();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use('/js', express.static(__dirname + '/js'));
app.use('/css', express.static(__dirname + '/css'));
app.use('/vendor/bootstrap', express.static(__dirname + '/vendor/bootstrap'));
app.use('/fonts', express.static(__dirname + '/fonts'));
app.use('/vendor/select2', express.static(__dirname + '/vendor/select2'))

app.get("/index.html",function(req,res){
    res.sendFile(__dirname + "/index.html");
  });
  app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html");
  });
  app.get("/form.html",function(req,res){
    res.sendFile(__dirname + "/form.html");
  });
  app.get("/index2.html",function(req,res){
    res.sendFile(__dirname + "/index2.html");
  });
  app.get("/index_ios.html",function(req,res){
    res.sendFile(__dirname + "/index_ios.html");
  });
  app.get("/index_react.html",function(req,res){
    res.sendFile(__dirname + "/index_react.html");
  });
  app.get("/index_electron.html",function(req,res){
    res.sendFile(__dirname + "/index_electron.html");
  });



app.listen(port, () => console.log(`Example app listening on port ${port}!`))