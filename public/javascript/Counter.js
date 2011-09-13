/**
 * カウンター.
 *
 * @param {Number} maxCount 最大値.
 */
var Counter = function (maxCount) {
  this._maxCount = maxCount;
  this._count = 1;
  this._observers = [];
};

/**
 * オブザーバーの追加.
 *
 * @param  {Object} observer
 * @return {void}
 */
Counter.prototype.addObserver = function (observer) {
  this._observers.push(observer);
};

/**
 * オブザーバーへの通知.
 *
 * @return {void}
 */
Counter.prototype.notify = function () {
  for (var i in this._observers) {
    this._observers[i].update(this);
  }
};

/**
 * カウンターを次の値に進める.
 *
 * 最大値に達したときは 1 に戻る.
 *
 * @return {void}
 */
Counter.prototype.next = function () {
  this.notify();
  if (this._count === this._maxCount) {
    this._count = 1;
  } else {
    this._count++;
  }
};

/**
 * カウント値の取得.
 *
 * @return {Number}
 */
Counter.prototype.getCount = function () {
  return this._count;
};
