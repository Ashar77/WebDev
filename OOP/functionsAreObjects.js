function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
}


Circle.call({},1);
Circle.apply({},[1])

const another = new Circle(1);

// line 9 == line 11 , when we use new operator the new operator internally create an empty object and pass them as the first argument to the call method  