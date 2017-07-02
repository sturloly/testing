// test file for app.js

const assert =  require('chai').assert;   // node.js default assertion library
const app = require('../app');

// results
sayHelloResult = app.sayHello();
addNumbersResult = app.addNumbers(5,5);

describe("App", function(){

  describe('sayHello', function(){
    it('app should return hello', function() {
      // let result = app.sayHello();
      assert.equal(sayHelloResult, 'hello');
    });

    it('sayHello should return type string', function(){
      // let result = app.sayHello();
      assert.typeOf(sayHelloResult, 'string');
    });
  })

  describe('addNumbers', function(){
    it('addNumbers should be more than 7', function(){
      // let result = app.addNumbers(5,5); //ramdom numbers
      assert.isAbove(addNumbersResult, 7);
    });

    it('addNumbers should should return type number', function(){
      // let result = app.addNumbers(5,5); //ramdom numbers
      assert.typeOf(addNumbersResult, 'number');
    });
  })

});
