let myObj = {
    name : 'ashar',
    city : 'karachi',
    address : {
          street : 1,
          house: 2
    } 
}

let ObjKeys = Object.keys(myObj);
console.log(ObjKeys);                 // to iterate over an object


for (let index = 0; index < ObjKeys.length; index++) {
     console.log(myObj[ObjKeys[index]])
    
}

console.log(myObj["city"])