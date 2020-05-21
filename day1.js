console.log("hello world");

//alert('this is javascript');

//variables

var b = 'smoothie';
//console.log(b);

var someNumber = 5;
console.log(someNumber);

// controlling html through js

//var age = prompt('what is your age ?');
//document.getElementById('intro').innerHTML = age;
// -----------------------------------------------------------------------------------------

//Numbers in javascript

var num1 = 7;
//console.log(num1/2);

//increment number
num1+=1;                //num1 = num1+1; //num1++ ;
console.log(num1);  

//decrement number
num1--;
console.log(num1);  

//console.log(num1%2);


// ------------------------------------------------------------------------------------------

//Functions

/*
//creating function
function fun(){
    console.log('this is fun !')
}

//calling function
fun();

*/

//crate a function that takes your name and says hello followed by your name;


/*
function greetings(){
    var name =  prompt('what is your name?');
    var result = 'hello'+' '+name;               //string concatenation
    console.log(result);
}

greetings();
*/

//arguments in function

/*
function sumNumbers(num1,num2){
    var result = num1+num2;
    console.log(result);
}

sumNumbers(6,2)
*/

// ---------------------------------------------------------------------------------

// LOOPS


//while loop


/*

var number=0;
while (number<=10){
    console.log(number)
    number+=1
}


//for loop

for(let num=10;num>0;){
    console.log(num);
    num--;
}

*/



// --------------------------------------------------------------------



//Data types

/*
let yourAge = 18; //number
let yourName = 'bob'; //string
let name = {first:'jane',last:'doe'}; //object
let truth = true; //boolean
let groceries = ['apple','banana','oranges']; //array 
let random; //undefined
let nothing=null; // value null
*/



//Strings in JS (common methods)

/*
let fruit = 'orange';
let groceries = 'apple,banana,orange,berry';
let moreFruit = 'banana\napple';  //newline
console.log(moreFruit);
console.log(fruit.length);  // counting the overall length (not starting from zero)
console.log(fruit.indexOf('ge'));  //find index 
console.log(fruit.slice(2,4));  // slice including 2 upto 4
console.log(fruit.replace('ora','123'));
console.log(fruit.toLowerCase());
console.log(fruit.toUpperCase());
console.log(fruit.charAt(2));
console.log(fruit[2]);
console.log(fruit.split("")); // seprated by character
console.log(groceries.split(',')); //separated by comma
*/

//Array

let fruits = ['banana','apple','orange','pineapples'];
fruits = new Array('banana','apple','orange','pineapples');
console.log(fruits[1]);  //access value at index 1
fruits[0]='pear';        //replacing element
console.log(fruits);

for (let i=0; i<fruits.length;i++){
    console.log(fruits[i]);
}                                     //looping through elements of array

console.log(fruits.toString());

console.log('to the string',fruits.toString());  // opposite of split

console.log(fruits.join('*'));  // each element joined with eachother through *

console.log(fruits);
console.log(fruits.pop());  // eliminate the last item
console.log(fruits);
console.log(fruits.push('blackberries'),fruits); // add an element at last position
fruits[fruits.length]='new fruit';      // another way to push
console.log(fruits);
console.log(fruits.slice(0,fruits.length-1)); //another way of popping last element
fruits.shift() //removing first element
console.log(fruits.shift())
fruits.unshift('kiwi');     //add first element to array
console.log(fruits)

let vegetables = ['tomato','potato','spanich'];
let allGroceries = fruits.concat(vegetables);       //concatenate 2 Arrays
console.log(allGroceries);  
console.log(allGroceries.slice(1,4));
console.log(allGroceries.reverse());            //reversing an array

let someNumbers = [9,2,7,4,5,3,4,10];
console.log(someNumbers.sort(function(a,b) {return a-b} )); // sorting in ascending order
console.log(someNumbers.sort(function(a,b) {return b-a} )); // sorting in descending order

let emptyArray = [];
for (let num = 0; num<=10; num++){
    emptyArray.push(num);
}
console.log(emptyArray);

let vehicles= ['cultus','civic','hayabusa','aston marton','R6']
let myVehicles = []
for ( let a = 0 ;a<vehicles.length;a++){
    myVehicles.push(vehicles[a])
}
console.log(myVehicles);

















