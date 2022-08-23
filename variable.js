// variable declaration
var myName = "John Doe";
var myAge = 35;

// how to declare and initialize a variable 
console.log(myName);
console.log(myAge);

// variable initialization
let ourName;
// value assigned to variable
ourName = "John Doe";

// how to write your variable name
// 1. start with a letter, underscore, or dollar sign
// 2. followed by any number of letters, numbers, or underscores
// 3. cannot start with a number
// 4. cannot use reserved keywords
// 5. variables are case sensitive

//camelCase
// var myVariable;
// // snake_case
// var my_variable
// let Opti;
// Opti = "BombomTina"

/* console.log('Your name is ' + nameOfMan + ', You are ' + ageOfMan + ' years old and you have 3 children. ' + ' The name of your first child is called: ' + firstChild + ', and the name of your second child is called: ' + secondChild + ', and the name of your third child is called: ' + thirdChild + '.' + ' It is ' + isSick + ' that you are sick and ' + condition + '. ' + myMessage + '.') */

let nameOfMan = "John Doe"
let ageOfMan = 35;
let firstChild = "Paul"
let secondChild = "Ernestina"
let thirdChild = "Diana"
let isSick = "true"
let condition = "you can't remember"
let myMessage = "Get well soon man"

document.getElementById('hisName').innerHTML = nameOfMan;
document.getElementById('hisAge').innerHTML = ageOfMan;
document.getElementById('hisFirst').innerHTML = firstChild;
document.getElementById('hisSecond').innerHTML = secondChild
document.getElementById('hisThird').innerHTML = thirdChild
document.getElementById('sick').innerHTML = isSick
document.getElementById('hisCondition').innerHTML=condition
document.getElementById('hisMessage').innerHTML = myMessage


document.getElementById('hisName').style.backgroundColor = "red"
document.getElementById('hisName').style.color = "white"
document.getElementById('hisName').style.textAlign ="center"


// 

