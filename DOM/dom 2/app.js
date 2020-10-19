//traversing the DOM 

//parentnode

/*
let itemList = document.querySelector('#items');
//parentNode
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor = 'purple';

console.log(itemList.parentNode.parentNode);

let titles = document.getElementsByClassName('title');
for (let i=0; i<titles.length;i++) {
    titles[i].style.color = 'white';
}
*/


// parentElement
/*
let itemList = document.querySelector('#items');
console.log(itemList.parentElement);
itemList.parentNode.style.backgroundColor = 'purple';
let titles = document.getElementsByClassName('title');
for (let i=0; i<titles.length;i++) {
    titles[i].style.color = 'white';
}
*/

//childNodes
let itemList = document.querySelector('#items');
console.log(itemList.childNodes);
console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor = 'yellow';

//firstChild
console.log(itemList.firstChild); //text node

itemList.firstElementChild.textContent = 'hello 1';

//lastChild
itemList.lastElementChild.textContent = 'hello last';

//nextSibiling

console.log(itemList.nextSibling);

console.log(itemList.nextElementSibling);

//previousSibiling
//previousElementSibiling

console.log(itemList.previousElementSibling);



//Create Element

//create a div

let newDiv = document.createElement('div');

//add class

newDiv.className = 'hello';

//add id

newDiv.id = 'hello1';

//add attribute

newDiv.setAttribute('title','my div');

//create text node

let newDivText = document.createTextNode('hello world this is a div');

//add text to div

newDiv.append(newDivText);

console.log(newDiv);

//inserting

let container = document.querySelector('header .container');
let h1 = document.querySelector('header h1');

container.insertBefore(newDiv,h1);

newDiv.style.fontSize = '25px';


















