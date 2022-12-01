const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/"; //URL

MongoClient.connect(url, function(err, database) { //Getting only first name
  if (err) throw err;
  const db = database.db("db");
  db.collection("Student").findOne({}, function(err, result) {
    if (err) throw err;
    console.log(result.name);
    database.close();
  });
});

MongoClient.connect(url, function(err, db) { //Inserting an obejct
    if (err) throw err;
    const dbo = db.db("db");
    const myobj = { name: "Naudi", age:"25",emp:"567876" };
    dbo.collection("Student").insertOne(myobj, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted");
      db.close();
    });
  });

MongoClient.connect(url, function(err, database) { // Printing all the data in collection Student
    if (err) throw err;
    const db = database.db("db");
    db.collection("Student").find({}).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
      database.close();
    });
  });