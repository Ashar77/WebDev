console.log("hello js");



//objects in javascript 
// dictionary in python 

/*
let student = {first:'ashar',
               last:'mehmood',
               age:25,
               height:170,
               studentInfo: function(){
                   return this.first + '\n' + this.last + '\n' + this.height;   //this in js == self in python
               }
            };

console.log(student.first);
student.first='notashar';
console.log(student.first)
student.age++;
console.log(student.age)
console.log(student.studentInfo());
*/
//--------------------------------------------------------------------------------------------------------------------------

//      18-35 is my demographic
//      && AND
//      || OR


let age = 8;

if ((age >= 18) && (age<=35)){
    status = 'target demo';
}  else{
    status = 'not my audience';
} 

console.log(status);


switch('sunday'){

    case 'friday':
        text = 'weekend';
        break;
    case 'saturday':
        text = 'weekend';
        break;
    
    case 'sunday':
        text = 'weekend';
        break;

    default:
        text = 'weekday';
}

console.log(text)





var num = '1';
var real =parseInt(num);
console.log(real+1);



































