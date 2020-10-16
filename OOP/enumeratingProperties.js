function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw !!');
    }
}

const circle = new Circle(10);

for (let key in circle){

    if (typeof circle[key]!='function')
    console.log(key,circle[key])
}

const keys = Object.keys(circle);
console.log(keys)

// to check a specific property/attriute or method is in an object

if ('draw' in circle) {
console.log('Circle has a draw method')}