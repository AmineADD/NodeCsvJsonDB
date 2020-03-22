var express = require('express');
var opn = require('opn');

var app = express();
var bodyParser = require("body-parser");

var routeZone = require('./Routes/Zone');
var routeType = require('./Routes/Type');
var routeNourriture = require('./Routes/Nourriture');
var routeClassification = require('./Routes/Classification');


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
//
app.use(routeZone);
app.use(routeType);
app.use(routeNourriture);
app.use(routeClassification);
//
app.use(express.static('public'))




app.listen(2020,()=>{
    console.log("Server in Progress");
    opn('http://localhost:2020/vues/Termites.html');
});