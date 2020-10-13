//store values for the specific session --> banking apps etc.
sessionStorage.setItem('fname','ashar');
let myName = sessionStorage.getItem('fname');
sessionStorage.removeItem('fname');
console.log(myName);

let hello = sessionStorage.getItem('fname')
console.log(hello)  //null


//clear all keys
sessionStorage.clear()