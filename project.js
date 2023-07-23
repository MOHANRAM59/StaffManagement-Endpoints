var express=require('express')
var bodyParser=require('body-parser')
var staffs=require("./staff")
var cors = require('cors')


var app=express()
var jsonBodyParser=bodyParser.json()
app.use(jsonBodyParser)
app.use(cors())
// var urlEncodvedBodyParser=bodyParser.urlencoded({extended:false})
//display all users
app.get('/staff',function (req,res){
    res.json(staffs);
})

//display users by id
app.get('/staff/:id',function (req,res){
    const id=req.params["id"]
    res.json(staffs.filter((el)=>el.id==id));
})

//post or add individual users
app.post('/staff', function (req, res) {
    var newStaff = req.body; // Retrieve the staff data from the request body
    staffs.push(newStaff); // Push the newStaff object into the staffs array
    res.json(staffs); // Respond with the updated staffs array as JSON
});


//update on individual staff

app.put('/staff/:id',function (req,res){
    var id=req.params["id"]
    var chUser=null
    var {name}=req.body
    for(let i=0;i<staff.length;i++){
        if(staffs[i].id==id){
               if(name)
                 staffs[i].name=name
               
            chUser=staffs[i]
        }
    }
    res.json(chUser);
});

app.put('/staff/:id', function (req, res) {
    var Job = req.params.Job;
    var chUser = null;
    var { Job, Position, Company, Location, Salary } = req.body;
    for (let i = 0; i < users.length; i++) {
      if (Job) users[i].Job = Job;
      if (Position) users[i].Position = Position;
      if (Company) users[i].Company = Company;
      if (Location) users[i].Location = Location;
      if (Salary) users[i].Salary = Salary;
      chUser = users[i];
      break;
    }
  });
  app.put('/staff/:id',function(req ,res){
    var id=req.params["id"];
    var chUser=null;
    var {image,id ,name,email,mobile}=req.body;
    for(let i=0;i<users.length;i++){
        if(id)
           users[i].id=id;
        if(name)
           users[i].name=name;
        if(email)
           users[i].email=email;
        if(mobile)
           users[i].mobile=mobile;
        if(image)
           users[i].image=image;
    chUser=users[i];
    break;
    }
});


//delete users by id
app.delete('/staff/:id',function (req,res){
    const id=req.params["id"]
    staffs=staffs.filter((el)=>el.id!=id)
    res.send("Deleted successfully "+id);
})

var server = app.listen(8099,function(){
    var host=server.address().address;
    var port=server.address().port
    console.log("Project is running")
})