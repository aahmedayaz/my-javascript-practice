var myName = "Ahmed Ayaz";
var myAge = 26;
var isAyaz = false;
var value = ["ahmed" , 1 , true]
var obj = {
    name : "ayaz",
    age : 18
}
console.log(typeof(myName));
console.log(typeof(myAge));
console.log(typeof(isAyaz));
console.log(typeof(value));
console.log(typeof(obj));

// Output:
// string
// number   
// boolean  
// object   
// object   


// Difference between null vs undefined? 


var Locha = null;
console.log(typeof(Locha));
// Output:
// object       ----> // javascript bug


var iAmStandBy;
console.log(iAmStandBy);
console.log(typeof(iAmStandBy));

// Output:
// undefined
// undefined