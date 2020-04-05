var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/userlist', function(req, res) {
  var db = req.db;
  var collection = db.get('userlist');
  collection.find({}, {}, function(e,docs){
    res.json(docs); //Basically a res.send(JSON.stringify(docs));
  });
  //Generally you want to limit how much data gets spewed out at one time with a response
});

module.exports = router;