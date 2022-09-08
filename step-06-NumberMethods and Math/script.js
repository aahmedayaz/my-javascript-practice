console.log(Math.round(10) , Math.round(10.4) , Math.round(10.5));
// Output:
// 10 10 11
console.log(Math.ceil(10) , Math.ceil(10.4) , Math.ceil(10.5));
// Output:
// 10 11 11
console.log(Math.trunc(10) , Math.trunc(10.4) , Math.trunc(10.5));
// Output:
// 10 10 10
console.log(Math.floor(10) , Math.floor(10.4) , Math.floor(10.5));
// Output:
// 10 10 10
// Math.trunc() cuts away (truncates) the decimal places.
// Math.round() rounds towards closest integer number.
// Math.floor() rounds towards closest lower integer number. 3.5 -> 3 -3.5 -> -4
// Math.ceil() rounds towards closest higher integer number. 3.5 -> 4 -3.5 -> -3

console.log(Math.trunc(-3.14));
console.log(Math.ceil(-3.14));
console.log(Math.floor(-3.14));

// Output:
// -3
// -3
// -4


console.log(Math.pow(10) , Math.pow(10.4) , Math.pow(10.5));
// Output:
// NaN NaN NaN
console.log(Math.pow(10 , 2) , Math.pow(10.4 , 5) , Math.pow(10.5 , 1));
// Output:
// 100 121665.29024000002 10.5
console.log(Math.sign(10) , Math.sign(-10.4) , Math.sign(0) , Math.sign(NaN));
// Output:
// 1 -1 0 NaN 
// 1 means positive
// -1 means negative
// 0 means neither negative neither positive
console.log(Math.abs(10) , Math.abs(-10.4) , Math.abs(NaN));
// Output:
// 10 10.4 NaN
// Returns the absolute value of a number (the value without regard to whether it is positive or negative). For example, the absolute value of -5 is the same as the absolute value of 5.
console.log(Math.sqrt(10) , Math.sqrt(10.4) , Math.sqrt(10.5));
// Output:
// 3.1622776601683795 3.22490309931942 3.24037034920393
console.log(Math.min(10) , Math.min(10.4 , -11) , Math.min());
// Output:
// 10 -11 Infinity
console.log(Math.max(10) , Math.max(10.4 , -11) , Math.max());
// Output:
// 10 10.4 -Infinity



let inputArray = [0.3 , 9.333 , -16.241 , 5.46523]
let ResultArray = inputArray.map(
    (e) => {
        let r = Math.pow(e , 3)
        let p = Math.trunc(r) 
        let q = Math.abs(p)
        return q;
    }
)
console.log(ResultArray);

// Output:
// [ 0, 812, 4283, 163 ]


































