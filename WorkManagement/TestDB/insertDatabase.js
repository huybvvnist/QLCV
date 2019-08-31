var mongoClient = require('mongodb').MongoClient;
mongoClient.connect('mongodb://127.0.0.1:27017', function (err, db) {
    //fail 
    if (err) throw err;
    //successfull
    var dbo = db.db("Workflow_Management");
    // var myobj = [{name: "Tô Hương Giang", 
    //                 birth_day: "1997-11-10", 
    //                 avatar: "https://www.w3schools.com/nodejs/nodejs_get_started.asp", 
    //                 phone: 0984154706, 
    //                 address: "Hai Bà Trưng, Hà Nội"},
    //             {name: "Ngô Vân Anh", 
    //                 birth_day: "1997-12-2", 
    //                 avatar: "https://www.w3schools.com/nodejs/nodejs_get_started.asp", 
    //                 phone: 0984154865, 
    //                 address: "Hai Bà Trưng, Hà Nội"},
    //             {name: "Nguyễn Thị Lương", 
    //                 birth_day: "1997-8-30", 
    //                 avatar: "https://www.w3schools.com/nodejs/nodejs_get_started.asp", 
    //                 phone: 0979554254, 
    //                 address: "Hai Bà Trưng, Hà Nội"},
    //             {name: "Cao Thị Thùy Linh", 
    //                 birth_day: "1997-4-10", 
    //                 avatar: "https://www.w3schools.com/nodejs/nodejs_get_started.asp", 
    //                 phone: 0984158654, 
    //                 address: "Hai Bà Trưng, Hà Nội"}
    //         ];
    var myobj = [
                {department_id: "5d5df3faa83da2255cda3b72", staff_id: "5d5df8d6a83da2255cda3b79"},
                {department_id: "5d5df4f6a83da2255cda3b73", staff_id: "5d5e207e3a423320c404cb07"},
                {department_id: "5d5df58ea83da2255cda3b74", staff_id: "5d5e207e3a423320c404cb08"},
                {department_id: "5d5e20fea83da2255cda3b8c", staff_id: "5d5e207e3a423320c404cb09"},
                {department_id: "5d5df4f6a83da2255cda3b73", staff_id: "5d5e207e3a423320c404cb0a"}
    ];
    dbo.collection("Staff_Department").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});
