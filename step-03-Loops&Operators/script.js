// -----> Assignment operators
// An assignment operator assigns a value to its left operand 
// based on the value of its right operand. 
// The simple assignment operator is equal (=)

var x = 5; 
var y = 5;

console.log(`Is both the x and y are equal : ${x == y}`);
// Output:
// Is both the x and y are equal : true



// ----> Arithmetic operators
// An arithmetic operator takes numerical values 
// (either literals or variables) as their operands and 
// returns a single numerical value.

console.log(3+3);
console.log(10-5);
console.log(20/5);
console.log(5*6);
console.log("Remainder Operator " + 27%4);

// Output:
// 6
// 5
// 4
// 30
// Remainder Operator 3



// ----> Increment and Decrement operator
// Operator: x++ or ++x or x-- or --x
// If used postfix, with operator after operand (for example, x++), 
// the increment operator increments and returns the value before incrementing.

var num = 15;
var newNum = num-- + 5;
console.log(num);
console.log(newNum);

// Output:
// 14
// 20

// Postfix increment operator means the expression is evaluated 
// first using the original value of the variable and then the 
// variable is incremented(increased).


// If used prefix, with operator before operand (for example, ++x), 
// the increment operator increments and returns the value after incrementing.

var num = 15;
var newNum = --num + 5; 
console.log(num);
console.log(newNum);

// Output:
// 14
// 19


Prefix increment operator means the variable is incremented first and then 
the expression is evaluated using the new value of the variable.










// ----->  Comparison operators
// A comparison operator compares its operands and 
// returns a logical value based on whether the comparison is true.

var a = 30;
var b = 10;

// Equal (==)
console.log(a == b);
// Not equal (!=)
console.log(a != b);
// // Greater than (>)
console.log(a > b);
// // Greater than or equal (>=)
console.log(a >= b);
// // Less than (<)
console.log(a < b);
// // Less than or equal (<=)
console.log(a <= b);

// Output:
// false
// true 
// true 
// true 
// false
// false






// ---->  Logical operators
// Logical operators are typically used with Boolean (logical) values; 
// when they are, they return a Boolean value.

var a = 30;
var b = -20;

// Logical AND (&&)
// The logical AND (&&) operator (logical conjunction) for a set of 
// operands is true if and only if all of its operands are true.

console.log(a > b && b > -50 && b < 0);
// Output:
// true

// Logical OR (||)
// The logical OR (||) operator (logical disjunction) for a set of 
// operands is true if and only if one or more of its operands is true.

console.log((a < b) || (b > 0) || (b > 0));
// Output :
// false

// Logical NOT (!)
// The logical NOT (!) operator (logical complement, negation) 
// takes truth to falsity and vice versa.

console.log(!((a>0) || (b<0)));
console.log(!true);

// Output:
// false
// false

// -----> String Concatenation(operators)
// The concatenation operator (+) concatenates two string values together, 
// returning another string that is the union of the two operand strings.


console.log("Hello World");
console.log("hello " +  "world");
var myName = "Ayaz";
console.log(myName + " Ahmed");
console.log(myName + " TheGreat");
console.log(myName + " TheGreat Ahmed");

// Output:
// Hello World
// hello world
// Ayaz Ahmed
// Ayaz The
// Ayaz The Ahmed




// -----> Challenge Time 
// Q # 1 -----> What will be the output of 3**3? 

// sol 1: ✔
// console.log(9**2); // 9*9
// console.log(10 ** -1); 1/10

console.log(3**3);
// Output:
// 27


// Q # 2 -----> What will be the output, when we add a number and a string?

// sol 2:  ✔
console.log(5 + "Ayaz");
// Output:
// 5Ayaz      ----> 5 also become a string



// Q # 3 -----> Write a program to swap two numbers?

// sol 3: ✔ 

var a = 5;
var b = 10;

// output b=5; a=10

var c = b; //c = 10
b = a; // b = 5;
a = c;

console.log("the value of a is " + a);
console.log("the value of b is " + b);

// Output:
// the value of a is 10
// the value of b is 5

// Q # 4 -----> Write a program to swap two numbers without using third variable?

// sol 4: ✔

var a = 5;
var b = 10;

// output b=5; a=10

a = a + b; // a = 15
b = a - b; // b = 5; 
a = a - b; // a = 10;

console.log("the value of a is " + a);
console.log("the value of b is " + b);

// Output:
// the value of a is 10
// the value of b is 5


// What is the Difference between == vs === ?

var num1 = 5;
var num2 = '5';
console.log(typeof(num1));
console.log(typeof(num2));
console.log(num1 == num2 );
console.log(num1 === num2 );

// Output:
// number
// string
// true  
// false