const express = require('express');
const app = express();
app.listen(3000,function(){
    console.log("this server has started");
});
app.get("/",function(request,response){
   
response.send("<h1>hello folks welcome!!<h2>");

});
app.get("/home",function(request,response){
    response.send("you are in home!");

});
app.get("/midhula",function(req,res){
    res.send("<h2>thuis is midhu<br>im good at js</h2>");
});