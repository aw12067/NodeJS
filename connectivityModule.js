exports.connection = function() {
    const MongoClient = require('mongodb').MongoClient;//MongoDB module included
    const url = "mongodb://localhost:27017/"
    
    MongoClient.connect(url, function(err,database){
        
        if(err) 
            return err;

        database.close();

        return "connected";

    });
};