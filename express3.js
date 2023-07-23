var express=require('express')
var bodyParser=require('body-parser')
var users=require("./users")

var app=express()
var jsonBodyParser=bodyParser.json()
app.use(jsonBodyParser)
// var urlEncodedBodyParser=bodyParser.urlencoded({extended:false})
//display all users
app.get('/user',function (req,res){
    res.json(users);
})

//display users by id
app.get('/user/:id',function (req,res){
    const id=req.params["id"]
    res.json(users.filter((el)=>el.id==id));
})

//post or add individual users
app.post('/user',function (req,res){
    var user=req.body;
    users.push(user)
    res.json(user)
})


//update on individual users
app.put('/user/:id',function (req,res){
    var id=req.params["id"]
    var chguser=null
    var {fname,lname}=req.body
    for(let i=0;i<users.length;i++){
        if(users[i].id==id){
               if(fname)
                 users[i].fname=fname
               if(lname)
                 users[i].lname=lname
            chUser=users[i]
        }
    }
    res.json(chUser);
})


//delete users by id
app.delete('/user/:id',function (req,res){
    const id=req.params["id"]
    users=users.filter((el)=>el.id!=id)
    res.send("Deleted "+id);
})

var server = app.listen(8080,function(){
    var host=server.address().address;
    var port=server.address().port
    console.log("Example app listening")
})