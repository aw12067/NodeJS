const express = require('express');
let app = express(); // Module & Function
//App is placeholder to recive output from express function which is an object and we can use it in our code,
// by accesing the methods and properties of express
//Express is minimal and flexible nodeJs web app.
//Enhance or customise nodeJs app.

app.get("/",function(r,r1){
    r1.send("Sent");
});

var server = app.listen(8000,function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log(host);
    console.log(port);
});