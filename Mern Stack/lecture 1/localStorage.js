//local storage ---> key value pair
localStorage.setItem('fname','ashar');
localStorage.setItem('lname','mehmood');
//signin,login management is done with local storge -- (server tokern)
//passwords are not stored in local storage (client site)

//getting the value from local storage.

let myValue = localStorage.getItem('fname');
let lastName = localStorage.getItem('lname');
console.log(myValue);


//removing item from localStorage

//localStorage.removeItem('fname');
console.log(lastName);

//localStorage.clear()

localStorage.setItem('info',{'name':'ashar','age':30});
let myinfo = localStorage.getItem('info');
console.log(myinfo.age);
console.log(localStorage.length);

let myObj = {'name':'ashar','reg':20};
localStorage.setItem('address',myObj);
let myAddress = localStorage.getItem('address')
console.log(myAddress.reg);