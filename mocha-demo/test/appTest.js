// test file for app.js

const assert =  require('chai').assert;   // node.js default assertion library
const sayHello = require('../app').sayHello;
// const app = require('../app');

describe("App", function(){
  it('app should return hello', function() {
    let result = sayHello();
    assert.equal(result, 'hello');
  });

  it('sayHello should return type string', function(){
    let result = sayHello();
    assert.typeOf(result, 'string');
  });
});
