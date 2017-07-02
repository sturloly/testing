// test file for app.js

const assert =  require('chai').assert;   // node.js default assertion library
const sayHello = require('../app').sayHello;
// const app = require('../app');

describe("App", function(){
  it('app should return hello', function() {
    assert.equal(sayHello(), 'hello');
  });
});
