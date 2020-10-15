let myObj = {
    fname : 'ashar',

}

let myObj2 = {
    lname : 'mehmood',
}

/*
let finalObj = {
    ...myObj,
    ...myObj2
}

console.log(finalObj)*/

let finalObj = Object.assign({},myObj,myObj2);
//console.log(finalObj);

let another = Object.assign(myObj2,myObj);
console.log(myObj2);

myObj.fname = 'kazim';
console.log(myObj2);
console.log(myObj);