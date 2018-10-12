var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydbtwo");
  var myobj =[ 
    {
        item: 'journal',
        qty: 25,
        tags: ['blank', 'red'],
        dim_cm: [14, 21]
      },
      {
        item: 'notebook',
        qty: 50,
        tags: ['red', 'blank'],
        dim_cm: [14, 21]
      },
      {
        item: 'paper',
        qty: 100,
        tags: ['red', 'blank', 'plain'],
        dim_cm: [14, 21]
      },
      {
        item: 'planner',
        qty: 75,
        tags: ['blank', 'red'],
        dim_cm: [22.85, 30]
      },
      {
        item: 'postcard',
        qty: 45,
        tags: ['blue'],
        dim_cm: [10, 15.25]
      }
  ];
  dbo.collection("customers").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});