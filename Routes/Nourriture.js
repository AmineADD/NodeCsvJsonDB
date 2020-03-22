var express = require('express');
var ListeNourri=[{id:0,name:"autre termites"}];
var indice=0;
module.exports = (function() {
    var api = express.Router();
    api.route("/Nourriture").get(function(req, res) { 
        res.send(ListeNourri);
    }).delete((req,res)=>{   
        ListeNourri=ListeNourri.filter(e=> parseInt(e.id)!==parseInt(req.body.id));
         res.send(ListeNourri);
    }).put((req,res)=>{   
        ListeNourri[parseInt(req.body.id)]={id:req.body.id,name:req.body.name}
        res.send(ListeNourri);
    }).post((req,res)=>{  
        indice++;  
        ListeNourri.push({id:indice,name:req.body.name});
        res.send(ListeNourri);
    });
    return api;
})();