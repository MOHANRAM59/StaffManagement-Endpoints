var express = require('express');
var app=express();
app.get('/user',function(req,res){
    res.send('Hello User');

});
app.get('/home',function(req,res){
    res.send('Home');

});
app.get('/contact',function(req,res){
    res.send('contact');

});
var server =app.listen(8084,function(){
    var host =server.address().address;
    var port =server.address().port;
    console.log("example app listening")

})