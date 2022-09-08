// Section 1: Navigate through the DOM 

// 1: document.documentElement
// returns the Element that is the root element of the document. 

console.log(document);

console.log(document.documentElement);
// 2: document.head
console.log(document.head);
// 3: document.body
console.log(document.body);
// 4: document.body.childNodes (include tab,enter and whiteSpace)
console.log(document.body.childNodes);
//   list of the direct children only 
// 5: document.children (without text nodes, only regular Elements)
console.log(document.body.children);
// 6: document.childNodes.length
console.log(document.body.childNodes.length)
console.log(document.body.children.length)

const paraId = document.getElementById('para-2');
console.log(paraId);
const allParas = document.getElementsByTagName('p');
console.log(allParas);
const allUls = document.getElementsByTagName('ul');
console.log(allUls);
const paraClassElements = document.getElementsByClassName('para');
console.log(paraClassElements);
const queryElement = document.querySelector('#para-2');
console.log(queryElement);
const queryAllElements = document.querySelectorAll('.para');
console.log(queryAllElements);

// 👉 Practice Time 
// Q # How to check whether an element has child nodes or not?

// .hasChildNodes --> Returns whether node has children
console.log(document.body.hasChildNodes());
// OutPut :
// true

// 👉 Practice Time 
// How to find the child in DOM tree 
// firstChild vs firstElementChild
// lastChild vs lastElementChild 

// --> firstChild returns the 1st Child
console.log(document.body.firstChild)
// --> firstElementChild returns the first child that is an element, and null otherwise.
console.log(document.body.firstElementChild)
console.log(document.body.firstElementChild.firstElementChild)

// Apply CSS Using First Child

const example = document.body.firstElementChild.firstElementChild;
example.style.color = "red"

// 👉 How to find the Parent Nodes 
console.log(document.body.parentNode);
console.log(document.body.parentElement);

// 👉 How to find or access the siblings
console.log(document.body.nextSibling) 
// Output :
// null
console.log(document.body.nextElementSibling)
// Output:
// null
console.log(document.body.previousSibling)
console.log(document.body.previousElementSibling)


// ----> Change Content when click Change Button

const changeContent = () => 
        document.getElementById('son-1').innerHTML = "Content Changed Successfully";

// --> querySelector() 
// The querySelector() method returns the first element that matches a CSS selector.

const select = document.querySelector("#son-2 , #son-3").innerHTML;
document.write(select);


// --> querySelectorAll()
// The querySelectorAll() method returns all elements that matches a CSS selector(s).

// The querySelectorAll() method returns a NodeList.

const selectAll = document.querySelectorAll("#son-2");
console.log(selectAll)
const exp = selectAll[0].innerHTML
console.log(exp);

// --> For Loop on querySelectorAll()

const amount = document.querySelectorAll("#father").length;
for (let a = 0; a < amount; a++) {
    let b = document.querySelectorAll("#father");
    console.log(b[a]);
}




// Function for Go Back

function goback(){
    history.back();
}

// "Alert" run when you load a page 
// "location.href" shows the current URL of the page
alert(location.href)


// "confirm ()" ask Yes Or Cancel - Return True or False
confirm(); // This will only show Options
confirm("Are you a Developer ?") // This will also show text

// The prompt() method returns the input value if the user clicks "OK", otherwise it returns null.

prompt("Please enter your name", "Harry Potter");
//      ☝️ Description              ☝️ Default Value 














