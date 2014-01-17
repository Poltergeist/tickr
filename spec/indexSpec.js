/* global describe, it, expect */
var Ticker = require('../index.js');

describe('Time', function() {
  it('should return the right time', function() {
    var tickr = new Ticker();
    expect((tickr.getCurrentTime() % 1000)).toBe(new Date() % 1000);
  });
  it('should have the right start time', function() {
    var now = new Date(),
      tickr = new Ticker(now);
    expect(tickr.getStartTime() * 1).toBe(now * 1);
  });
  it('should have the right start time', function() {
    var now = new Date(),
      tick = 1000,
      tickr = new Ticker(now, {tick: tick});
    expect(tickr.getTick(100) * 1).toBe(now * 1 + (100 * tick));
  });
  it('should have the right tick after time', function(done) {
    var now = new Date(),
      tick = 1000,
      noOfTicks = 4,
      tickr = new Ticker(now, {tick: tick});
    setTimeout(function() {
      expect(tickr.getCurrentTick()).toBe(noOfTicks);
      done();
    }, tick * noOfTicks);
  });
  it('should have the right tick after specific time', function() {
    var now = new Date(),
      tick = 5 * 60 * 1000,
      noOfTicks = 50,
      tickr = new Ticker(now, {tick: tick});
    expect(tickr.getCurrentTick(new Date(now * 1 + (noOfTicks * tick)))).toBe(noOfTicks);
  });
});
