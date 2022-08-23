//operators

let a = 10
let b = 3;
let add = a + b;
let multiply = a * b
let division = a / b
let substraction = a - b
let exponential = a ** b
let modulus = a % b
// addition
document.getElementById('hAddition').innerHTML = "Addition"
document.getElementById('vAddition').innerHTML = "The values are " + a + " + " + b;
document.getElementById('rAddition').innerHTML = "The result is " + add;
document.write("<br>");

//multiplication
document.getElementById('hMultiplication').innerHTML = "Multiplication"
document.getElementById('vMultiplication').innerHTML = "The values are " + a + " * " + b;
document.getElementById('rMultiplication').innerHTML = "The result is " + multiply;
document.write("<br>");

//substraction
document.getElementById('hSubtraction').innerHTML = "Subtraction"
document.getElementById('vSubtraction').innerHTML = "The values are " + a + " - " + b;
document.getElementById('rSubtraction').innerHTML = "The result is " + substraction;
document.write("<br>");

//division
document.getElementById('hDivision').innerHTML = "Division"
document.getElementById('vDivision').innerHTML = "The values are " + a + " / " + b;
document.getElementById('rDivision').innerHTML = "The result is " + division;
document.write("<br>");

//exponentiation
document.getElementById('hExponential').innerHTML = "Exponential"
document.getElementById('vExponential').innerHTML = "The values are " + a + " ** " + b;
document.getElementById('rExponential').innerHTML = "The result is " + exponential;
document.write("<br>");

// modulus
document.getElementById('hModulus').innerHTML = "Modulus"
document.getElementById('vModulus').innerHTML = "The values are " + a + " % " + b;
document.getElementById('rModulus').innerHTML = "The result is " + modulus;
document.write("<br>");

// assignment
x = 20
x += 10
y = 5
y -= 3
document.write(x)
document.write("<br>")
document.write(y)
document.write("<br>")

// comparison
// logical
// bitwise
// ternary
// increment
let z = 1;
z++;
document.write(" z is:" + z)
document.write("<br>");
//decrement --
let d = 5;
d--;
document.write(" d is:" + d)
//unary