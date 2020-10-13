
let myArray = [11,11,22,22,33,42,9];
let mySet = new Set(myArray);

//console.log(mySet);

//mySet.add('200');

console.log(mySet);  //set removes the duplicate items from array

mySet.add({a:1,b:2});

mySet.delete(22);

//mySet.clear();

//console.log(mySet);

//console.log(mySet.size);


/*
mySet.forEach(function(val){
    console.log(val);
});
*/

//MAP

/*

let myMap = new Map([['a1','hello'],['b2','goodbye']]);
myMap.set('c3','Foo');
console.log(myMap);
myMap.delete('a1');
console.log(myMap);
console.log(myMap.size);



let carWeakSet = new WeakSet();

let car1 = {
    make: 'honda',
    model : 'civic',

}

let car2 = {
    make: 'toyota',
    model: 'Camry',
}


carWeakSet.add(car1);
carWeakSet.add(car2);
console.log(carWeakSet);
carWeakSet.delete(car1);
console.log(carWeakSet);


let  carWeakMap = new WeakMap();

let key1 = {
     id:1
}

carWeakMap.set(key1,car1);

console.log(carWeakMap);
*/