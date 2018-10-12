var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydbtwo");
  var myobj =[ 
    {
        item: 'journal',
        status: 'A',
        size: { h: 14, w: 21, uom: 'cm' },
        instock: [{ warehouse: 'A', qty: 5 }]
      },
      {
        item: 'notebook',
        status: 'A',
        size: { h: 8.5, w: 11, uom: 'in' },
        instock: [{ warehouse: 'C', qty: 5 }]
      },
      {
        item: 'paper',
        status: 'D',
        size: { h: 8.5, w: 11, uom: 'in' },
        instock: [{ warehouse: 'A', qty: 60 }]
      },
      {
        item: 'planner',
        status: 'D',
        size: { h: 22.85, w: 30, uom: 'cm' },
        instock: [{ warehouse: 'A', qty: 40 }]
      },
      {
        item: 'postcard',
        status: 'A',
        size: { h: 10, w: 15.25, uom: 'cm' },
        instock: [{ warehouse: 'B', qty: 15 }, { warehouse: 'C', qty: 35 }]
      }
  ];
  dbo.collection("document").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});