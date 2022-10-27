let a = fetch('./README.txt')
console.log(a);

// Output:
// Promise {<pending>}
//     [[Prototype]]: Promise
//     [[PromiseState]]: "fulfilled"
//     [[PromiseResult]]: Response

a.then((response) => {
    return response.text();
})
// Output:
// Promise {<pending>}
//     [[Prototype]]: Promise
//     [[PromiseState]]: "fulfilled"
//     [[PromiseResult]]: "My name is Ahmed Ayaz."

.then((response) => {
    console.log(response);
})

// Output:
// My name is Ahmed Ayaz.


// Free Advice Generator

let advice = document.getElementById('adviceGot')
document.getElementById('adviceBtn').addEventListener('click' , () => {
    let promise = fetch('https://www.boredapi.com/api/activity')
    promise.then(response => response.json()).then(data => {
        advice.innerText = data.activity;
    })
})
