// for for event loop
function ForAsync(init, check, final, body) {
  var self = this;
  self.break = function () {
    throw "forasync_break";
  }
  self.quit = function () {
    self.brk = true;
  }
  self.brk = false;
  init.call(self);
  function loop(self) {
    if (check.call(self) && !self.brk) {
      try {
        body.call(self, function (t) {
          final.call(self);
          setTimeout(loop, Number(t), self);
        });
      } catch (e) {
        if (e === "forasync_break") {
          self.brk = true;
        } else {
          throw e;
        }
      }
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

