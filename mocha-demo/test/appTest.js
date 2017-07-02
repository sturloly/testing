// test file for app.js

const assert =  require('chai').assert;   // node.js default assertion library
const app = require('../app');

describe("App", function(){
  it('app should return hello', function() {
    let result = app.sayHello();
    assert.equal(result, 'hello');
  });

  it('sayHello should return type string', function(){
    let result = app.sayHello();
    assert.typeOf(result, 'string');
  });

  it('addNumbers should be more than 7', function(){
    let result = app.addNumbers(5,5); //ramdom numbers
    assert.isAbove(result, 7);
  });

  it('addNumbers should should return type number', function(){
    let result = app.addNumbers(5,5); //ramdom numbers
    assert.typeOf(result, 'number');
  });
});
