# Async For Loop Implement

a for loop for async functions.

```js
var fora = require('for-loop-async');

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
```
⬆this mimics this⬇
```js
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
```

## Installation

npm install for-loop-async

## License

MIT

