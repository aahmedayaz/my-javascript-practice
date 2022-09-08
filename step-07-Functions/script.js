// Function

console.log(sum(5 , 10))
function sum(a = null , b = Null){
    let sum = a+b;
    return sum;
}

// Output :
// 15


// Function in a VARIABLE

let a = function sum(a = null , b = Null){
    let sum = a+b;
    return sum;
}
console.log(a(5, 47))

// Output:
// 52


// Fat Arrow Function

const multiply = (a , b) => console.log(`${a} People can work for ${b} Bosses`)
multiply(10 , 15);

// Output :
// 10 People can work for 15 Bosses
