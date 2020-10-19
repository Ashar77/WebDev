//checkin the document object
//console.log(document);

/*
console.log(document.domain);
console.log(document.URL);
console.log(document.title);
document.title = 'hello world';
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.all[10]);
document.all[10].textContent = 'hello !' //not the right way
console.log(document.forms);
console.log(document.links);
console.log(document.forms);
console.log(document.images);
*/


// GetElementById

let headerTile = document.getElementById('header-title');
console.log(headerTile);
//changing the content
headerTile.textContent = 'my second title :) ';
//headerTile.innerText = 'good bye';             //consider style as well 
console.log(headerTile.textContent);
//headerTile.innerHTML = '<h3>Hello small</h3>'  // created h3 inside h1 ,, h1 is not changed to h3  

headerTile.style.borderBottom = 'solid 2px white';



// GetElementsByClassName

/*
let items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[1].textContent='hello 2nd';  // changing content
items[1].style.fontWeight = 'bold';
items[1].style.backgroundColor = 'yellow';

//items[i].style.backgroundColor = 'pink'; // gives error

for(i=0; i<items.length; i++){
items[i].style.backgroundColor = 'pink';
}
*/


//GET ELEMENT BY TAG

let li = document.getElementsByTagName('li');
console.log(li);

for(i=0; i<li.length; i++){
    li[i].style.backgroundColor = '#f4f4f4';
    }


// Query Selector

/*

let header = document.querySelector('#main-header');
header.style.borderBottom = 'solid 4px red'

let input = document.querySelector('input');
input.value = 'hello world';

let submit = document.querySelector('input[type="submit"]');
submit.value="SEND !";

let item = document.querySelector('.list-group-item');
item.style.color = 'red';

let lastItem = document.querySelector('.list-group-item:last-child');
lastItem.style.color = 'blue';

let secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.color = 'yellow';

*/


//QUERY SELECTOR ALL

let titles = document.querySelectorAll('.title');
console.log(titles)

titles[0].textContent = 'HeLlO'


let odd = document.querySelectorAll('li:nth-child(odd)');

for(let i=0 ; i<odd.length; i++){
    odd[i].style.backgroundColor = 'pink';
}