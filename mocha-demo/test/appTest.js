// test file for app.js

const assert =  require('chai').assert;   // node.js default assertion library
const sayHello = require('../app').sayHello;
const addNumbers = require('../app').addNumbers;

describe("App", function(){
  it('app should return hello', function() {
    let result = sayHello();
    assert.equal(result, 'hello');
  });

  it('sayHello should return type string', function(){
    let result = sayHello();
    assert.typeOf(result, 'string');
  });

  it('addNumbers should be more than 7', function(){
    let result = addNumbers(5,5); //ramdom numbers
    assert.isAbove(result, 7);
  });
});
