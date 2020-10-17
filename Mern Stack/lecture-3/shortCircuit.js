let gender = 'male';
let msg = (gender === 'male') && " && shortCircuit works"
let msg2 = (gender === 'male') || " ||  shoertCircuit works"
console.log(msg);
console.log(ms2)
// AND : &&   ,   OR  :  || 

/*
if (num > 5 || num <10){
    console.log('unicycle')
}

if (num > 5 && num <10){
    console.log('6 to 9')
}
*/


//short circuit

/*
if (4>5 && 5>6){                    // && donot check the second condition if the first one is false
    console.log('hi')
} else{
    console.log('no')
}
*/


var test = true;
var isTrue = function(){
    console.log('test is true');
};

var isFalse = function(){
    console.log('test is false');
};

/*
if(test){
  isTrue;
}; */

//(test && isTrue())


test = false

if(!test){
    isFalse()
} 

(test || isFalse())

//setting default value

function evaluateFriend(name){
   name = 'kashif';
   name = name || 'bar';
   console.log('my best friend is '+name);
}
friend();
friend('amir');