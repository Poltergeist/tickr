/* global describe, it, expect, afterEach, beforeEach */
var Ticker = require('../index.js'),
  sinon = require('sinon');

describe('Time', function() {
  var clock;
  beforeEach(function() {
    clock = sinon.useFakeTimers(new Date() * 1);
  });
  afterEach(function() {
    clock.restore();
  });
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
    clock.tick(tick * noOfTicks);
  });
  it('should have the right tick after a lot of time', function(done) {
    var now = new Date(),
      tick = 1000 * 60 * 5,
      noOfTicks = 400,
      tickr = new Ticker(now, {tick: tick});
    setTimeout(function() {
      expect(tickr.getCurrentTick()).toBe(noOfTicks);
      done();
    }, tick * noOfTicks);
    clock.tick(tick * noOfTicks);
  });
  it('should have the right tick after specific time', function() {
    var now = new Date(),
      tick = 5 * 60 * 1000,
      noOfTicks = 50,
      tickr = new Ticker(now, {tick: tick});
    expect(tickr.getCurrentTick(new Date(now * 1 + (noOfTicks * tick)))).toBe(noOfTicks);
  });
});
