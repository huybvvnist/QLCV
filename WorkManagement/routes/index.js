var express = require('express');
var app = express();
const port = process.env.PORT || 5000;
var mongoIO = require('../DAO/MongoIO');
var router = express.Router();


const MongoClient = require('mongodb').MongoClient;
// Connection URL
const url = 'mongodb://localhost:27017';
// Database Name
const dbName = 'Workflow_Management';

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

// app.get('/express_backend', (req, res) => {
//   res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
// });

// Get Data department
app.get('/api/departments', function (req, res, next) {
  const findDepartment = function(db, callback) {
    const department = db.collection('department');
    department.find({}).toArray(function(err, docs) {
      assert.equal(err, null);
      callback(docs);
    });
}
  MongoClient.connect(url, function (err, client) {
    assert.equal(null, err);
    const db = client.db(dbName);
    findDepartment(db, function (data) {
      res.send({dulieu: data});
      console.log(data);
      client.close();
    });
  });
});

// console.log that your server is up and running
// app.listen(port, () => console.log(`Listening on port ${port}`));
module.exports = router;
