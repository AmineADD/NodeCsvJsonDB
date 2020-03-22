var express = require('express');
var ListeTypes=[{id:0,name:"rare"}];
var indice=0;
module.exports = (function() {
    var api = express.Router();
    api.route("/Type").get(function(req, res) { 
        res.send(ListeTypes);
    }).delete((req,res)=>{   
        ListeTypes=ListeTypes.filter(e=> parseInt(e.id)!==parseInt(req.body.id));
         res.send(ListeTypes);
    }).put((req,res)=>{   
        ListeTypes[parseInt(req.body.id)]={id:req.body.id,name:req.body.name}
        res.send(ListeTypes);
    }).post((req,res)=>{  
        indice++;  
        ListeTypes.push({id:indice,name:req.body.name});
        res.send(ListeTypes);
    });
    return api;
})();