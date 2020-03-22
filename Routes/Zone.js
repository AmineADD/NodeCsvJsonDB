var express = require('express');
var ListeZones=[{id:0,name:"Sud-ouest"},{id:1,name:"côtes atlantique"},{id:2,name:"méditerranéenne"},{id:3,name:"Rhône"},{id:4,name:"l’Ile-de-France"},{id:5,name:"la Garonne"},{id:6,name:"La Loire"}];
var indice=6;
module.exports = (function() {
    var api = express.Router();
    api.route("/Zone").get(function(req, res) { 
        res.send(ListeZones);
        console.log("req");
    }).delete((req,res)=>{   
        ListeZones=ListeZones.filter(e=> parseInt(e.id)!==parseInt(req.body.id));
        res.send(ListeZones);
    }).put((req,res)=>{   
        ListeZones[parseInt(req.body.id)]={id:req.body.id,name:req.body.name}
        res.send(ListeZones);
    }).post((req,res)=>{  
        indice++;  
        ListeZones.push({id:indice,name:req.body.name});
        res.send(ListeZones);
    });
    return api;
})();