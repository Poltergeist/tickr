var Model = require('fishbone'),
  _ = require('lodash'),

Tickr = new Model({
  _defaultOptions: {
    tick: 5 * 60 * 1000
  },
  init: function(start, options) {
    this.startTime = new Date(start) || new Date();
    this.options = _.merge(this._defaultOptions, options);
  },
  getCurrentTime: function() {
    return new Date();
  },
  getStartTime: function() {
    return this.startTime;
  },
  getTick: function(tick) {
    tick = tick || 0;
    tick = this.startTime * 1 + (this.options.tick * tick);
    return tick;
  },
  getCurrentTick: function(time) {
    var tick = 0;
    time = time || new Date();
    tick = time * 1 - this.startTime;
    tick = Math.floor(tick / this.options.tick);
    return tick;
  }
});

module.exports = Tickr;
