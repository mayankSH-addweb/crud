var express = require('express')
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";

var app = express()
port = 5000,
cors = require("cors");

app.use(cors());
app.use(express.json());

// var client = new MongoClient(url, { useNewUrlParser: true })
// var client = MongoClient.connect(url, {useNewUrlParser: true})


app.post('/signup', function (req, res) {
    var {firstName, lastName, email, password} = req.body;        
        MongoClient.connect(url, function(err, db) {
            var dbo = db.db("mydb");
            var myobj = {firstName, lastName, email, password};
            dbo.collection("customers").insertOne(myobj);
  });
})

app.listen(5000, () => console.log("Backend server live on " + port));