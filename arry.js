var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydbtwo");
 dbo.collection("customers").find( { tags: { $size: 3 } }).toArray(function(err, result)
 {
  //  dbo.collection("customers").find( { dim_cm: { $elemMatch: { $gt: 22, $lt: 30 } } }).toArray(function(err, result)
  //  dbo.collection("customers").find( {  dim_cm: { $gt: 25 } }).toArray(function(err, result)
//  dbo.collection("customers").find( {  tags: { $all: [ 'red', 'blank']} }).toArray(function(err, result)
 //dbo.collection("customers").find( {  tags: [ 'red', 'blank'} }).toArray(function(err, result) 
    if (err) throw err;
    console.log(result);
    db.close();
  });
});