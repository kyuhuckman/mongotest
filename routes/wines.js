var mongo = require('mongodb');

var Server = mongo.Server,
     Db = mongo.Db,
     BSON = mongo.BSONPure;

var server = new Server('52.91.16.126', 27017, {auto_reconnect: true});
db = new Db('kyuhuckmongo', server);

//db연결부

db.open(function(err, db) {
    console.log("hogoo");
    if(!err) {
        console.log("Connected to 'winedb' database");
        db.collection('gorealra', {safe:true}, function(err, collection) {
            if (err) {
                console.log("The 'wines' collection doesn't exist. Creating it with sample data...");
                populateDB();
            }
        });
    }else{
        console.log("that is nono~~");
    }
});


//아이템 all list
exports.findAll = function(req, res) {
    // 몽고 db  전체 select
    var cursor = db.collection('gorealra').find();

    db.collection('gorealra').count(function (err, count) {
        console.log("count==" + count);
        var json_object1 = new Object();


        cursor.toArray(function (err, items) {


            json_object1.totalCount = count;
            json_object1.list = items;
            var finalJsonData = JSON.stringify(json_object1);
            console.log("log===" + finalJsonData);



        });
    });
}


//아이템 선택
exports.findById= function(req, res) {
    var id = req.query.id;
    console.log("paramid===" + id);

    var cursor = db.collection('gorealra').find({"name":id});

    cursor.toArray(function (err, items) {


        //json_object1.totalCount = count;
        //json_object1.list = items;
        //var finalJsonData = JSON.stringify(json_object1);
        var finalJsonData = JSON.stringify(items);
        console.log("log===" + finalJsonData);



    });


}







