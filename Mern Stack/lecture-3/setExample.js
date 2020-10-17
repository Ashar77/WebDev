const newSet = new Set(['ashar','mehmood','ashar']);
//console.log(newSet);  //unique values only

const mySet = new Set()
//console.log(mySet);

mySet.add('muhammad');
mySet.add('ashar');
mySet.add('muhammad');
mySet.add('saqlain');
mySet.delete('ashar');
console.log(mySet);

for (i of newSet){
    console.log(i)
}