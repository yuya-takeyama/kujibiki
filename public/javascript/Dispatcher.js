/**
 * ディスパッチャ.
 *
 * @param {Counter} counter  カウンター.
 * @param {Number}  interval カウンターを更新する間隔 (ミリ秒).
 */
var Dispatcher = function (counter, interval) {
  this._counter  = counter;
  this._interval = interval;
};

Dispatcher.prototype.dispatch = function () {
  var counter = this._counter;
  this._intervalId = setInterval(function () {
    counter.next();
  }, this._interval);
};

Dispatcher.prototype.destroy = function () {
  clearInterval(this._intervalId);
};
