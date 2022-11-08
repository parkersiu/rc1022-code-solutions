function ExampleConstructor() {}
console.log('value of prototype:', ExampleConstructor.prototype);
console.log('typeof prototype:', typeof ExampleConstructor.prototype);

var functionReturn = new ExampleConstructor();
console.log('ExampleConstructor return:', functionReturn);
var instance = functionReturn instanceof ExampleConstructor;
console.log('instanceof ExampleConstructor:', instance);
