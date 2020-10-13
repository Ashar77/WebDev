let myArray = ['safi','ashar','mehmood'];
let [first , second ]  = myArray;
console.log(first)
console.log(second)
console.log(myArray);

let [, , third] = myArray;
console.log(third);

let myObj = {
    'name':'ashar',
    'age':20,
    'profession':'developer'
}

let {age , profession} = myObj
console.log(age);
retirement = age+40;
console.log('retired at '+retirement);
console.log(profession);


let {name: newName} = myObj;
console.log(newName);

let theObj = {
    'name':'ashar',
    'age':20,
    address:{
        country:'Pakistan',
        city: 'karachi'
    }
}

let {address:addressObject} = theObj;
console.log(addressObject);


let {address: {city,country:myCountry}} = theObj;
console.log(city);
console.log(myCountry)

//how to rename the destructured oject













