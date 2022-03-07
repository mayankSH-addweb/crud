var express = require('express')
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";

var app = express();
(port = 5000), (cors = require("cors"));

app.use(cors());
app.use(express.json());

// var client = new MongoClient(url, { useNewUrlParser: true })
// var client = MongoClient.connect(url, {useNewUrlParser: true})

app.post("/signup", function (req, res) {
  var { firstName, lastName, email, password } = req.body;
  MongoClient.connect(url, function (err, db) {
    var dbo = db.db("mydb");
    var myobj = { firstName, lastName, email, password };
    dbo.collection("customers").insertOne(myobj);
  });
});
var userLogin;
app.post("/login", (req, res) => {
  var { email, password } = req.body;
  MongoClient.connect(url, async function (err, db) {
    var dbo = db.db("mydb").collection("customers");
    userLogin = await dbo
      .findOne({ email: email, password: password })
      .then((res) => res)
      .catch((err) => err);
    if (userLogin) {
      res.json({ message: "Bhai Waah" });
    } else {
      throw new Error("Email and Password Do Not Match!");
    }
  });
});

app.get("/data", (req, res) => {
  res.send(userLogin);
});

app.listen(5000, () => console.log("Backend server live on " + port));