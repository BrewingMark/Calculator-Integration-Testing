var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('it can add', function(){
    calculator.previousTotal = 1;
    calculator.add(4);
    assert.equal(5, calculator.runningTotal);
  })

  it('it can subtract', function(){
    calculator.previousTotal = 7;
    calculator.subtract(4);
    assert.equal(3, calculator.runningTotal);
  })

  it('it can multiply', function(){
    calculator.previousTotal = 5;
    calculator.multiply(3);
    assert.equal(15, calculator.runningTotal);
  })

  it('it can divide', function(){
    calculator.previousTotal = 21;
    calculator.divide(7);
    assert.equal(3, calculator.runningTotal)
  })

  it('it can concatenate mutiple number button clicks', function(){
    calculator.numberClick(1);
    calculator.numberClick(2);
    assert.equal(12, calculator.runningTotal)
  })

  it('it can chain operations',function(){
    calculator.numberClick(8);
    calculator.operatorClick('/');
    calculator.numberClick(4);
    calculator.operatorClick('*');
    calculator.numberClick(3);
    calculator.operatorClick('+');
    assert.equal(6, calculator.runningTotal)
  })

  it('pressing clear resets running total without affecting calculation', function(){
    calculator.numberClick(10);
    calculator.operatorClick('*');
    calculator.numberClick(8);
    calculator.clearClick();
    calculator.numberClick(9);
    calculator.operatorClick('=');
    assert.equal(90, calculator.runningTotal);
  })

});
