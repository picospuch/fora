// for for event loop
function ForAsync(init, check, final, body) {
  var self = this;
  init.call(self);
  function loop(self) {
    if (check.call(self)) {
      body.call(self, function (t) {
        final.call(self);
        setTimeout(loop, Number(t), self);
      });
    } else {
      ;
    }
  }
  setTimeout(loop, 0, self);
}

function forAsync(init, check, final, body) {
  return new ForAsync(init, check, final, body);
}

module.exports = forAsync;

