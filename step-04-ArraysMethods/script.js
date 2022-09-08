// //  Push Function

// let x = []
// for (let index = 0; index < 10; index++) {
//         x.push(`Push - ${index + 1} == ` + index);      
// }
// for (let i = 0; i < x.length; i++) {
//     console.log(x[i] + " " + typeof x[i]);
// }

// // Output :

// // Push - 1 == 0 string
// // Push - 2 == 1 string
// // Push - 3 == 2 string
// // Push - 4 == 3 string
// // Push - 5 == 4 string
// // Push - 6 == 5 string
// // Push - 7 == 6 string
// // Push - 8 == 7 string
// // Push - 9 == 8 string
// // Push - 10 == 9 string


// // Unshift Fucntion 

// let y = []
// for (let index = 0; index < 10; index++) {
//     if(index == 4){
//         y.unshift("ahmed");
//     }
//     else{
//         y.unshift(index);
//     }
              
// }

// for (let index = 0; index < y.length; index++) {
//         let a = y[index];
//         console.log(y[index] + " " + typeof a)
// }

// // Output :

// // 9 number
// // 8 number
// // 7 number
// // 6 number
// // 5 number
// // ahmed string
// // 3 number
// // 2 number
// // 1 number
// // 0 number

// // concat Method 

// let myArray1 = [1 , 2 , "Ayaz"];
// let myArray2 = [3 , 4];
// let myArray3 = myArray1.concat(myArray2);
// console.log(myArray1)
// console.log(myArray2)
// console.log(myArray3)

// // Output : 
// // 1,2,Ayaz
// // 3,4
// // 1,2,Ayaz,3,4


// // Reverse , Splice , Sort 

// let myArray4 = ["ahmed" , "ayaz" , 3 , 4]
// myArray4.reverse();
// console.log(myArray4);
// myArray4.splice(0 , 0 , "university");
// console.log(myArray4);
// myArray4.sort();
// console.log(myArray4);

// // Output :
// // 4,3,ayaz,ahmed
// // university,4,3,ayaz,ahmed
// // 3,4,ahmed,ayaz,university



// // ---> Searching in Array

// // 1- indexOf(item , from)     ----- It return the index if found , otherwise -1
// // 2- includes(item , from)    ----- It return the true if found , otherwise false

// let arr = [1, 0, false];

// console.log( arr.indexOf(0) ); // 1
// console.log( arr.indexOf(false) ); // 2
// console.log( arr.indexOf(null) ); // -1

// console.log( arr.includes(1) ); // true

// // indexOf() uses the strict equality === for comparison. So, if we look for false, it finds exactly false and not the zero.

// // ---> lastIndexOf() 
// // lastIndexOf() is the same as indexOf, but looks for from right to left.

// // --> forEach() 
// // runs a function on every element of array

// let arr2 = [1 , "ahmed" , false , NaN , null]
// let arr3 = arr2.forEach((word , index) => {
//     return `${word}+2`
// })

// console.log(arr2);
// console.log(arr3);

// // Output:
// // [ 1, 'ahmed', false, NaN, null ]
// // undefined


// ---> map() Funtion
// map() creates a new array from calling a function for every array element.

// let arr4 = arr2.map((word , index) => {
//     return `${word}+2`
// })

// console.log(arr2);
// console.log(arr4);

// // Output:
// // [ 1, 'ahmed', false, NaN, null ]
// // [ '1+2', 'ahmed+2', 'false+2', 'NaN+2', 'null+2' ]      

// // the map method returns a new array by applying the callback function on each element of an array, while the forEach method doesn't return anything

// // Example :

// const percentage = [80.55646 , 90.546263 , -3.54659];
// const finalArr = percentage.map( (value) => (value.toFixed(2).toString()));
// console.log(finalArr);
// console.log(typeof finalArr[0]);

// // Output:
// // [ '80.56', '90.55', '-3.55' ]
// // string


// // ---> find()
// // it return the first element which satisfy the condition

// let arr5 = ["ahmed" , 'c' , 3 , false , 'ahmed' , "AHMED"]
// let arr6 = arr5.find(
//     (e) => e == 'ahmed'
// )
// console.log(arr5)
// console.log(arr6);

// // Output:
// // [ 'ahmed', 'c', 3, false, 'ahmed', 'AHMED' ]
// // ahmed

// // --> filter()
// // it return the new array of every element that satisfy the condition 

// let arr7 = arr5.filter(
//     (e) => e == 'ahmed'
// )
// console.log(arr7);

// // Output:
// // [ 'ahmed', 'ahmed' ]


// // Q# You have an array of name of students , First Capitalize the first letter of All names and then make a new array of students whose names starts from "A"

// let namesOfStudents = ['ahmed' , 'aliyan' , 'bisma' , 'zubair' , 'Nouman' , 'Araib'];
// let result1 = namesOfStudents.map(
//     (e) => {
//         let element = e.charAt(0).toUpperCase() + e.slice(1);
//         return element;
//     }
// )
// console.log(namesOfStudents);
// console.log(result1);

// // Output:
// // [ 'ahmed', 'aliyan', 'bisma', 'zubair', 'Nouman', 'Araib' ]
// // [ 'Ahmed', 'Aliyan', 'Bisma', 'Zubair', 'Nouman', 'Araib' ]


// let result2 = result1.filter(
//     (e) => (e.charAt(0) == 'A' || e.charAt(0) == 'B')
// )
// console.log(result2);

// // Output:
// // 'Ahmed', 'Aliyan', 'Bisma', 'Araib' ]


// // Q# Find the squareRoots of the number elements of an array

// let arr8 = ["ahmed" , true , 1 , 4 , 2.5 , 'Verdan']
// let arr9 = arr8.map(
//     (e) => {
//         if(typeof e == 'number'){
//             return Math.sqrt(e);
//         }
//         else{
//             return e;
//         }
//     }
// )
// console.log(arr9);

// // Output:
// // [ 'ahmed', true, 1, 2, 1.5811388300841898, 'Verdan' ]


// // Q# Multiply every element by 02 , return only those who are greater than 10 and exactly divisible by 02

// let arr10 = [52 , 3 , 10 , 15.64 , 12 , 19]
// let finalArray = arr10.map( (e) => e*2).filter( (e) => (e > 10 && e % 2 == 0) )
// console.log(finalArray);

// // Output:
// // [ 104, 20, 24, 38 ]


// // --> reduce()
// // Syntax = arr.reduce(
// //     (accumulator , item , index , array) =>  {
// //         //code 
// //     } , [initialValue]
// // )

// let arr11 = [10 , 20 , 70 , 90]
// let arr12 = arr11.reduce(
//     (sum , e) => {
//         return sum+e;
//     } , 100
// )

// console.log(arr11);
// console.log(arr12);

// // Output:
// // [ 10, 20, 70, 90 ]
// // 290

// // Q# Now Convert this number into String then in Array:

// let arrr = arr12.toString();
// console.log(arrr);
// let arrr1 = arrr.split();
// console.log(arrr1);

// // Output:
// // 290
// // [ '290' ]

// --> every()
// The every() method returns true if the function returns true for all elements.
// The every() method returns false if the function returns false for one element.


let students = [
    {
        name : 'ahmed' ,
        age : 18
    },
    {
        name : 'ali' ,
        age : 18
    },
    {
        name : 'abdullah' ,
        age : 178
    },
    {
        name : 'zubair' ,
        age : 18
    }
]

let resultant = students.every(
    (e) => e.age >= 18
)
console.log(resultant)

// Output:
// true



