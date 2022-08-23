console.time('time');

console.log(12345);

//single line comment

/* 
emulti line comment
here is another line comment
*/

//log variable to console
var message = "We don enter august"
console.log(message);

//log array to console
var array = [1, 2, 3, 4, 5];
console.log(array);
console.log([9, 8, 7, 6, 5]);

// log object to console
var object = { a: 1, b: 2, c: 3 };
console.log(object);
console.log({ d: 4, e: 5, f: 5 });

//log boolean to console
var boolean = true;
console.log(boolean);
console.log(false)

//log a table
console.table(array);
console.table({ a: 1, b: 2, c: 3 });

//console warning
console.warn("This is a warning");

// console error
console.error("This is an error");

// console.clear();

console.timeEnd('time');