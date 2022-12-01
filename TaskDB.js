const MongoClient = require('mongodb').MongoClient;//MongoDB module included
const url = "mongodb://localhost:27017/"

MongoClient.connect(url, function(err,database){

    if(err) 
        throw err;

    console.log("1.Database Connected")//Task ONE: Database connected

    const db = database.db("db");

    db.collection("Student").find({}).toArray(function(err,result){

        if(err)
            throw err;

        console.log(result);//Task TWO: Fetched the Document
        console.log("Fetched the document");
    });

    db.collection("Student").updateOne({age:"22"},{$set:{name:"Nawin"}}, function(err,result){

        if(err) 
            throw err;

        console.log("3,4.Field Updated");//Task THREE & FOUR: Found the field and updated the value
        database.close();
    });
});