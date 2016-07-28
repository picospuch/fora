var fora = require('./fora');

function basic() {
fora(function () {
  this.i = 0;
}, function () {
  return this.i < 10;
}, function () {
  ++this.i;
}, function (done) {
  setTimeout(() => {
    console.log(this.i);
    done();
  }, 1000);
});

for (
// function () {
  var i = 0;
// }, function () {
  i < 10;
// }, function () {
  ++i
) {
  console.log(i);
}
} //~basic

function normal() {
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
} //~normal

function quit() {
var f = fora(function () {
  this.i = 0;
}, function () {
  return this.i < 10;
}, function () {
  this.i++;
}, function (done) {
  console.log(this.i);
  if (this.i == 5) {
    setTimeout(() => {
      this.quit();
    }, 0);
  }
  done();
});
}

basic();
