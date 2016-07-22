var fora = require('./ForAsync');

var f = fora(function () {
  this.i = 0;
}, function () {
  return this.i < 10;
}, function () {
  this.i++;
}, function (done) {
  console.log(this.i);
  done();
});

