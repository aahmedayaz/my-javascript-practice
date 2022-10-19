let addHtml = document.getElementsByClassName('container');
console.log(addHtml);

let a = () => {
    for (let index = 0; index < 5; index++) {
        let b = document.createElement('p');
        b.className = `para-${index+1}`
        b.innerText = `I am Para ${index+1}`
        addHtml[0].appendChild(b)
    }
}

a();