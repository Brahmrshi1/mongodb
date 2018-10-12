var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydbtwo");
 dbo.collection("document").find( {status: 'A' }).project({ item: 1, status: 1 ,_id:0}).toArray(function(err, result)
 { 
    //  dbo.collection("document").find( {status: 'A' }).project({ item: 1, status: 1 }).toArray(function(err, result)
     if (err) throw err;
    console.log(result);
    db.close();
  });
});