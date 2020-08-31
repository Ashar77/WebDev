// console
/*        console.log('hello world');
        console.error('this is error');
        console.warn('this is warning');    */

//-------------------------------------------------------------------------------------------------------------



// variables
// var , let , const


/*
let score = 10;
score = 7;
console.log(score)

const goal = 'Axiom - PanaCloud team '; //can not be changed
//goal = 'sleep' // will give error 
console.log(goal);
                        */

// ---------------------------------------------------------------------------------------------------------------

// Datatypes 
// Strings , Numbers , Boolean, Null , undefined


/*
const name = 'john';
const age = 30;
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z; //undefined

console.log(typeof name)
console.log(typeof age)
console.log(typeof rating)
console.log(typeof isCool)
console.log(typeof x)       // null is object  :) .. it is Null
console.log(typeof y)
console.log(typeof z)
*/

// ---------------------------------------------------------------------------------------------------------------


// string 


/*


const name = 'ASHAR Mehmood';
const age = 20;

const devops = 'kubernetes, genkins, terraform, mern-stack'

//concetination

console.log('my name is' + name  + 'and i am' +age); //old method

//template string 

console.log(`My name is ${name} and i am ${age}`); //new method


//string methods

console.log(name.length);
console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.substring(0,5));
console.log(name.substring(0,5).toLowerCase());
console.log(devops.split(', '));  // for creating arrays
let array = devops.split(', ');
console.log(array[1]);

*/
//-------------------------------------------------------------------------------------

//Arrays

/*

const Numbers = new Array(2,3,4,3,1);
console.log(Numbers);
const fruits = ['apples','oranges','pears',10,null,true];
console.log(fruits[1]);
fruits[3] = 'grapes'; //  10 is replaced
fruits.push('mangoes'); // push the value
fruits.unshift('cheery'); // push at 0
fruits.pop()                // delete last value
console.log(Array.isArray('fruits'));
console.log(fruits.indexOf('oranges'));
console.log(fruits);

*/

//-------------------------------------------------------------------

// Objects

/*

const person={
    firstName: 'Jhon',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music','movies','sports'],
    address:{
        street: '50 main st',
        city: 'Boston',
        state: 'MA'
    }
}

console.log(person.firstName,person.lastName);
console.log(person.hobbies[1]);
console.log(person.address.city);

person.email = 'jhon@gmail.com';
console.log(person.email);
console.log(person)

//destructuring

const {firstName} = person;
console.log(firstName);
const {address: {city}} = person
console.log(city);


const todos = [
    {
        id: 1,
        text: 'take out trash',
        isCompleted: true,
    },

    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true,
    },

    {
        id: 3,
        text: 'Dentist appt',
        isCompleted: false,
    },

];

console.log(todos[1].text);

const todoJSON = JSON.stringify(todos);
console.log(todoJSON); 

*/


//----------------------------------------------------------------------------------------------------

/*

//Loops
//for loops

for (let i = 0; i<5; i++){
        console.log('for loop number '+ i);
}

//while loop

console.log('while loop')

let i = 0;
while(i<5){
    console.log(`while loop number ${i}`)
    i++;
}

for(let i = 0; i < todos.length; i++){
    console.log(todos[i].text);
}

for(let task of todos){
    console.log(task.text);
}


// high order array function

//forEach                           
todos.forEach(function(todo){
    console.log(todo.id);
});



//filter
const check = todos.filter(function(todo) {
    return todo.isCompleted == true;
});

console.log(check);
 



//Map
const todoText = todos.Map(function(todo) {
    return todo.text;
});

console.log(todoText);


*/
//--------------------------------------------------------------------------------

/*
const x = 10;

if(x==='10'){
    console.log('x is 10')
}
else{
    console.log('not 10')
}


if(x===10){
    console.log('x is 10')
}   
else if(x > 10){
    console.log('x is greater than 10')
}
else{
    console.log('x is less than 10')
}


//ternary operator --> use for assigning variables

const y = 7;
const color = y > 5 ? 'green':'red';

console.log(color);

switch(color){
    case 'green':
        console.log('y is greater than 5');
        break;
    case 'red':
        console.log('y is less than 5');
        break;
    default:
        console.log('y is not greater or less than 5');
}   


*/
//----------------------------------------------------------------------------------------------------

//functions

/*
function addNum(num1=0, num2=2){
    return(num1+num2);
}
console.log(addNum()); */

/*

const addNums = (num1=0, num2=0) => num1 + num2;

console.log(addNums(44,2));

const address = city => city + ' , pakistan';
console.log(address('karachi'));    */

//--------------------------------------------------------------------------
//  OOP
//Constructor function

/*

function Person(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);

    this.getBirthYear = function(){
       return this.dob.getFullYear();
    }

    this.getCity = function(){
        return 'karachi';
    }


    this.getFullName = function(){
        return `${this.firstName} ${this.lastName}`;
    }    

    Person.prototype.getFullName = function(){
        return `${this.firstName} ${this.lastName}`;
    }  
    
}

*/



/*

class Person{
    constructor(firstName, lastName, dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);   
    }    
    
        getFullName(){
            return `${this.firstName} ${this.lastName}`
    }




}






//instantiate object
const person1 = new Person('jhon', 'Doe', '4-3-1980');
console.log(person1);
console.log(person1.lastName);


console.log(person1.getFullName());

*/
//console.log(window);
//window.alert('s');

//single element

const form = document.getElementById("my-form");
console.log(document.querySelector('h1'));
























































