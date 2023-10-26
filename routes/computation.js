var express = require('express');
var router = express.Router();
var x = Math.random();
var y = Math.random();
/* GET users listing. */
router.get('/', function(req, res, next) {
  var result1 = Math.hypot(x,y);
  var result2 = Math.ceil(x);
  var result3 = Math.clz32(y);
  res.send(`hypot applied to [${x},${y}] is [${result1}] <br> ceil applied to [${x}] is [${result2}]<br>cla32 is applied to [${y}] is [${result3}]`);
});

module.exports = router;
