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
    console.log("Funcction A");
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