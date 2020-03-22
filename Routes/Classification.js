var express = require('express');
var ListeClassification=[{id:0,name:"Dangereux"}];
var indice=0;
module.exports = (function() {
    var api = express.Router();
    api.route("/Classification").get(function(req, res) { 
        res.send(ListeClassification);
    }).delete((req,res)=>{   
        ListeClassification=ListeClassification.filter(e=> parseInt(e.id)!==parseInt(req.body.id));
         res.send(ListeClassification);
    }).put((req,res)=>{   
        ListeClassification[parseInt(req.body.id)]={id:req.body.id,name:req.body.name}
        res.send(ListeClassification);
    }).post((req,res)=>{  
        indice++;  
        ListeClassification.push({id:indice,name:req.body.name});
        res.send(ListeClassification);
    });
    return api;
})();