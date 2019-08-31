const assert = require('assert');
const MongoClient = require('mongodb').MongoClient;
// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'Workflow_Management';

const findDepartment = function(db, callback) {
    const department = db.collection('department');
    department.find({}).toArray(function(err, docs) {
      assert.equal(err, null);
      callback(docs);
    });
};
MongoClient.connect(url, function (err, client) {
  assert.equal(null, err);
  const db = client.db(dbName);
  findDepartment(db, function (data) {
      console.log(data)
      client.close();
    });
});


module.exports.findDepartment = findDepartment;