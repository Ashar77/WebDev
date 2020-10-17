const name = 'ashar';
setTimeout( () => console.log('this is set time out'), 2000);  //async javaScript                 

 
fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(response => response.json()              )
.then(data => console.log(data)) 
.catch(err => console.log(err));

console.log(name);
