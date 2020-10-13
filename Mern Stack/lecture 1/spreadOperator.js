/*
let myObj = {
    firstName :'ashar',

    lastName : 'mehmood'

}


let mySecondObj = myObj;    //pass by reference, change in one obj will effect others not a true copy

console.log('1st obj ---> '+myObj.firstName)
mySecondObj.firstName = 'ismail'
console.log('2nd obj ---> '+mySecondObj.firstName);
console.log('1st obj ---> '+myObj.firstName)           // on changing secondObj firstObj also get changed
*/




// for getting the true copy



let myObj = {
    firstName :'ashar',

    lastName : 'mehmood',

    address:{
        
        city:'karachi',
        country:'Pakistan'
    }

}




let mySecondObj = {
        ...myObj                     // through this way we will get the true copy, change in one obj will not effect others not a true copy
}

console.log('1st obj ---> '+myObj.firstName)
mySecondObj.firstName = 'ismail'
console.log('2nd obj ---> '+mySecondObj.firstName);
console.log('1st obj ---> '+myObj.firstName)           




let myThirdObj = {
    ...myObj,
    lastName:'amir',                    // changing the value of key
    
    address : {
        ...myObj.address,
           city: 'islamabad'                //changing value of deep obj

        
    }


}


console.log(myObj)
console.log(myThirdObj)
console.log(myObj)

console.log(myObj.address.city)

console.log(myThirdObj.address.city)

console.log(myObj.address.city)














