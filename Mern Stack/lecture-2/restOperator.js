let obj = { 
    fname : 'ashar',
    lname : 'mehmood',
    city  :   'khi'
}

let  {lname , ...restValues}  = obj;
console.log(lname);
console.log(restValues);

//nested rest 
//rest in function