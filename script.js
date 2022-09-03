//  Push Function

let x = []
for (let index = 0; index < 10; index++) {
        x.push(`Push - ${index + 1} == ` + index);      
}
for (let i = 0; i < x.length; i++) {
    document.write(x[i] + " ");
    document.write(typeof x[i] + "<br>");
    if (i%2 != 0) {
        document.write("<br>");
    }
}

// Output :

// Push - 1 == 0 string
// Push - 2 == 1 string

// Push - 3 == 2 string
// Push - 4 == 3 string

// Push - 5 == 4 string
// Push - 6 == 5 string

// Push - 7 == 6 string
// Push - 8 == 7 string

// Push - 9 == 8 string
// Push - 10 == 9 string


// Unshift Fucntion 

let y = []
for (let index = 0; index < 10; index++) {
    if(index == 4){
        y.unshift("ahmed");
    }
    else{
        y.unshift(index);
    }
              
}

for (let index = 0; index < y.length; index++) {
        let a = y[index];
        document.write(y[index] + " " + typeof a + "<br>")
}

// Output :

// 9 number
// 8 number
// 7 number
// 6 number
// 5 number
// ahmed string
// 3 number
// 2 number
// 1 number
// 0 number

// concat Method 

let myArray1 = [1 , 2 , "Ayaz"];
let myArray2 = [3 , 4];
let myArray3 = myArray1.concat(myArray2);
document.write(myArray1)
document.write("<br>")
document.write(myArray2)
document.write("<br>")
document.write(myArray3)

// Output : 
// 1,2,Ayaz
// 3,4
// 1,2,Ayaz,3,4


// Reverse , Splice , Sort 

let myArray4 = ["ahmed" , "ayaz" , 3 , 4]
myArray4.reverse();
document.write(myArray4);
document.write("<br>");
myArray4.splice(0 , 0 , "university");
document.write(myArray4);
document.write("<br>");
myArray4.sort();
document.write(myArray4);

// Output :
// 4,3,ayaz,ahmed
// university,4,3,ayaz,ahmed
// 3,4,ahmed,ayaz,university










