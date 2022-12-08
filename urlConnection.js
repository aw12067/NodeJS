const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/"; //Task ONE:Connect MongoDB

const express = require('express');
var app = express();

MongoClient.connect(url, function(err, database) { 
  if (err) throw err;
  const db = database.db("db");
  db.collection("Student").find({}).toArray(function(err,result){
        if(err)
            throw err;

        console.log(result);//Task TWO: Store the Document
        console.log("Fetched the document");
        database.close();
//************************************************************************************ */

        app.all('/users/',function(request,response){
            response.send({result});//Task THREE: Sending to app.get()
        });
        
//************************************************************************************ */

        app.listen(8000);//Task FOUR: Displaying the result on localhost/users
    });
});


