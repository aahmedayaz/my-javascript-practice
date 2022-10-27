let posts = [
    {
        title : 'Post One' ,
        body : 'This is Post One'
    },
    {
        title : 'Post Two' ,
        body : 'This is Post Two'
    },
]
 

// Asynchronous 

let a = () => {
    console.log("Function A");
    setTimeout(()=> {
        posts.forEach((post) => {
            document.write(`${post.title}` + "</br>")
        })
    } , 10000)
}


let b = (callback) => {
    setTimeout(() => {
        posts.push({title : "Post Three" , body : "This is Post Three"})
        console.log("Push Done");
        callback();
        console.log("Callback Done");
    } , 10000)
}
b(a);

// Output:
// ----- After 10 seconds -----
// Push Done
// Function A   
// Callback Done
// ---- Again After 10 Seconds ----
// Post One
// Post Two
// Post Three



// Promises

let promise1 = new Promise((resolve , reject) => {
    resolve("Hello");
    reject("Bye")
})

promise1.then((text) => {
    console.log(text);
})
.catch((text) => {
    console.log(text);
})

// Output:
// Hello


//  Async / Await

async function sum(a,b){
   return a*b;
}

console.log(sum(10,3));

// Output :
// Promise { 30 }


async function print(text){
    console.log(text + " 1");
    await console.log(text + " 2");
    console.log(text + " 3");
}

console.log(print("Before"));

console.log("After 1");
console.log("After 2");


// Output:
// Before 1
// Before 2
// Promise { <pending> }
// After 1
// After 2
// Before 3












