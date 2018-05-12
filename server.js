//server
var ex = require("express");
var express = ex();
var server_http = require("http").Server(express);
express.use(ex.static("."));
server_http.listen(3000,function(){
    console.log("Start");
});
express.get('/',function(req,res){
    res.sendFile(__dirname + '/index.html');
});
//

