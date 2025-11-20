console.log("Hello World");

// console.log(global);
//import os module
const os = require('os');

// import path module
const path = require('path');

// const math = require('./math');
const {add, multiply, subtract, divide} = require('./math');


console.log(os.type());
console.log(os.version());
console.log(os.homedir());

// Dir name
console.log(__dirname); 

//File name
console.log(__filename);


console.log(path.dirname(__filename));

// Pull filename out of path
console.log(path.basename(__filename));

// Pull extension name of file
console.log(path.extname(__filename));


// get everything together
console.log(path.parse(__filename));


console.log("Math");

// console.log(math.add(2,3));
console.log(add(2,3));
console.log(subtract(2,3));
console.log(multiply(2,3));
console.log(divide(2,3));
