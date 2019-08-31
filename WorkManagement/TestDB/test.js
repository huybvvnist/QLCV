var mongoClient = require('mongodb').MongoClient;
mongoClient.connect('mongodb://127.0.0.1:27017', function (err, db) {
    //fail 
    if (err) throw err;
    //successfull
    var dbo = db.db("Workflow_Management");
    dbo.collection('staff_department').aggregate([
        { $lookup:
           {
             from: 'department',
             localField: 'department_id',
             foreignField: '_id',
             as: 'department_details'
           }
         },
         {
             $lookup:
             {
                 from: 'staff',
                 localField: 'staff_id',
                 foreignField: '_id',
                 as: 'staff_details'
             }
         }
        ]).toArray(function(err, res) {
        if (err) throw err;
        for(var i=0; i<res.length; i++){
            console.log(JSON.stringify(res[i]));
            console.log("\n");
        }
        db.close();
      });
});