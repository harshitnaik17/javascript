//first code
console.log("Hello World")

//javascript variables
var number1 = 100;
var number2 = 200;
console.log(number1 + number2);

// Data types in javascript
//Numbers
var num1 = 73
var num2 = 63
var num3 = 78
console.log(num1+num2+num3); 

//strings
var str1 = "My name is harshit"
var str2 = "i have graduated from NHCE"
var str3 = "i have scored 78% aggregate in BE"

//objects
var marks = {
    marks1: 91,
    marks2: 109,
    marks3: 63,
}



//booleans 
var a = true;
var b = false;
console.log(a);

//undefined
var und = undefined;
console.log(undefined);

//null
var n = null;
console.log(n);

/*there are two types of data types in JavaScript
1. Primitive data types: undefined, null, number, string, boolean, symbol
2. Reference data types: Arrays and Objects
*/

//Arrays 
var arr = [1, 2, 3, 4, 5]
console.log(arr[1]);

var arr = [1, 2, "name", 4, 5]
console.log(arr[2]);

// Operators in JavaScript
// Arithmetic Operators
var a = 100;
var b = 10;
 console.log("The value of a + b is ", a+b);
 console.log("The value of a - b is ", a-b);
 console.log("The value of a * b is ", a*b);
 console.log("The value of a / b is ", a/b);

 // Assignment Operators
var b = 10;
var c = b;
 c += 2;
 c -= 2;
 c *= 2;
 c /= 2;
 console.log(c);
 

 // Comparison Operators
var x = 34;
var y = 56;
 console.log(x == y);
 console.log(x >= y);
 console.log(x <= y);
 console.log(x > y);
 console.log(x < y);


 // Logical Operators

// Logical AND
 console.log(true && true)
 console.log(true && false)
 console.log(false && true)
 console.log(false && false)


 // Logical OR
 console.log(true || true)
 console.log(true || false)
 console.log(false || true)
 console.log(false || false)


 // Logical not
 console.log(!false);
 console.log(!true);


 // Function in JavaScript
function avg(a, b) {
    c = (a + b) / 2;
    return c;
}
 
c1 = avg(4, 6);
c2 = avg(14, 16);
 console.log(c1, c2);


 // Conditionals in JavaScript

// Single if statement
var age = 41;
if(age > 18){
    console.log('You are a teenager');
}

// if - else statement
var age = 16
 if(age > 18){
     console.log('You are a teenager');
}
else{
     console.log('You are not a teenager');
 }

//For loop

var arr = [1, 2, 3, 4, 5, 6, 7];

arr.forEach(function(element){
         console.log(element);
     })


//While loop

var arr = [1, 2, 3, 4, 5, 6, 7];
 
let j = 0;
 while(j<arr.length){
    console.log(arr[j]);
   j ++
 }



 // String Methods in JavaScript
let myString = "Harshit is a good boy";
console.log(myString.length)
console.log(myString.lastIndexOf("good"))



let myDate = new Date();
 console.log(myDate.getTime());
 console.log(myDate.getFullYear());
 console.log(myDate.getDay());
 console.log(myDate.getMinutes());
 console.log(myDate.getHours());


 